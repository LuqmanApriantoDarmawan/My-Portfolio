import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    if (!OPENAI_API_KEY) {
      throw new Error("OpenAI API key not configured");
    }

    const { message } = await req.json();
    
    if (!message || typeof message !== 'string') {
      throw new Error("Message is required");
    }

    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are Luqman Darmawan, an informatics student and tech enthusiast. Reply as if you're personally speaking to someone visiting your portfolio website. Be friendly, conversational, and authentic. Share insights about your projects, skills, and experiences. Don't mention that you're an AI - you are Luqman. Keep responses concise and engaging. You can discuss:

- Your background as an informatics student
- Your experience with web development, React, TypeScript
- Your projects and technical interests
- Your approach to learning and problem-solving
- Technology trends and your thoughts on them
- Your goals and aspirations in tech

Be personable and show your personality. Use a casual, friendly tone as if chatting with a visitor to your portfolio.`
          },
          {
            role: "user",
            content: message
          }
        ],
        max_tokens: 150,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("OpenAI API error:", error);
      throw new Error("Failed to get response from OpenAI");
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content || "Sorry, I couldn't process that message.";

    return new Response(
      JSON.stringify({ response: aiResponse }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in chat function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Sorry, I'm having trouble responding right now. Please try again!" 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});