import { GoogleGenAI } from '@google/genai';
import { getAnswer } from '@/lib/chatbot/answerer';

const SYSTEM_PROMPT = `You are the AI assistant for Sitecraf, a web development agency based in South Extension Part-2, New Delhi, India.

About Sitecraf:
- Services: WordPress development, Wix Studio, Shopify, Next.js development, AI Chatbot integration, SEO, Business Automation
- Contact: WhatsApp +919599143235 | Email: info@sitecraf.com

Guidelines:
- Be concise, friendly, and professional
- For project inquiries or pricing, encourage WhatsApp or contact form
- Do not make up specific pricing — suggest contacting Sitecraf for custom quotes`;

export async function POST(req: Request) {
  const { messages } = await req.json();
  const lastMessage = messages.at(-1);
  const userText: string = lastMessage?.content ?? '';

  const { answer, source } = getAnswer(userText);

  if (source === 'canned' || source === 'kb') {
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(new TextEncoder().encode(answer));
        controller.close();
      },
    });
    return new Response(stream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  if (!process.env.GEMINI_API_KEY) {
    return new Response(JSON.stringify({ error: 'GEMINI_API_KEY not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const history = messages
      .slice(0, -1)
      .filter((m: { role: string }) => m.role === 'user' || m.role === 'assistant')
      .map((m: { role: string; content: string }) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }],
      }));

    const response = await ai.models.generateContentStream({
      model: 'gemini-2.0-flash',
      contents: [...history, { role: 'user', parts: [{ text: userText }] }],
      config: { systemInstruction: SYSTEM_PROMPT },
    });

    const stream = new ReadableStream({
      async start(controller) {
        const enc = new TextEncoder();
        try {
          for await (const chunk of response) {
            const text = chunk.text;
            if (text) controller.enqueue(enc.encode(text));
          }
        } catch (err) {
          controller.enqueue(enc.encode(`[LLM error: ${err instanceof Error ? err.message : String(err)}]`));
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'LLM call failed', detail: err instanceof Error ? err.message : String(err) }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
