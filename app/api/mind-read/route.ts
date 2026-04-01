import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

const PROMPT = `You are a hilarious pet mind reader! Look at this pet photo and tell me exactly what the animal(s) are thinking RIGHT NOW.

IMPORTANT: First, count how many pets are in the image.

If there is ONLY ONE pet:
- Write a single funny thought in first person (2-3 sentences)
- Return it as a JSON object: {"type": "single", "thought": "the thought here"}

If there are MULTIPLE pets (2 or more):
- Create a hilarious conversation between them
- Each pet gets 1-2 short, punchy lines
- They should be responding to each other in a funny way
- Return as JSON: {"type": "conversation", "messages": [{"pet": "Dog", "thought": "..."}, {"pet": "Cat", "thought": "..."}, ...]}
- Identify each pet by type (Dog, Cat, Bird, etc.) or by a distinguishing feature (Orange Cat, Black Dog, etc.)

Rules for ALL responses:
- Be FUNNY and creative - the more absurd the better!
- Include thoughts about treats, naps, world domination, judging humans, etc.
- Dogs think about food, walks, or their favorite human
- Cats are plotting something or judging everyone
- Use casual, playful language
- NO emojis in the response
- ONLY return valid JSON, nothing else

Example single pet:
{"type": "single", "thought": "I've been waiting for my treat for exactly 47 seconds. This is a war crime."}

Example multiple pets:
{"type": "conversation", "messages": [{"pet": "Golden Retriever", "thought": "Did someone say walk?! WALK?!"}, {"pet": "Cat", "thought": "Pathetic. I would never show such desperate enthusiasm."}, {"pet": "Golden Retriever", "thought": "You literally sprint to the food bowl every time it rattles."}]}

Now read this pet's mind!`

export async function POST(req: Request) {
  const formData = await req.formData()
  const image = formData.get('image') as File

  if (!image) {
    return Response.json({ error: 'No image provided' }, { status: 400 })
  }

  const bytes = await image.arrayBuffer()
  const base64 = Buffer.from(bytes).toString('base64')
  const mimeType = (image.type || 'image/jpeg') as 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp'

  try {
    const result = await model.generateContent([
      { inlineData: { data: base64, mimeType } },
      PROMPT,
    ])

    const responseText = result.response.text().trim()
    
    // Try to parse as JSON
    try {
      // Clean up the response - remove markdown code blocks if present
      let cleanedResponse = responseText
      if (responseText.startsWith('```json')) {
        cleanedResponse = responseText.slice(7)
      } else if (responseText.startsWith('```')) {
        cleanedResponse = responseText.slice(3)
      }
      if (cleanedResponse.endsWith('```')) {
        cleanedResponse = cleanedResponse.slice(0, -3)
      }
      cleanedResponse = cleanedResponse.trim()
      
      const parsed = JSON.parse(cleanedResponse)
      
      if (parsed.type === 'conversation' && Array.isArray(parsed.messages)) {
        return Response.json({ 
          type: 'conversation', 
          messages: parsed.messages 
        })
      } else if (parsed.type === 'single' && parsed.thought) {
        return Response.json({ 
          type: 'single', 
          thought: parsed.thought 
        })
      }
      
      // Fallback if structure is unexpected
      return Response.json({ type: 'single', thought: responseText })
    } catch {
      // If JSON parsing fails, treat as single thought
      return Response.json({ type: 'single', thought: responseText })
    }
  } catch (err) {
    console.error('Gemini error:', err)
    return Response.json({ error: 'Failed to read pet mind' }, { status: 500 })
  }
}
