import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey:
    "",
  dangerouslyAllowBrowser: true,
});

async function GPT(input: string) {
  const completion = await openai.chat.completions.create({
    model: "deepseek/deepseek-chat",
    messages: [
      {
        role: "user",
        content: input,
      },
    ],
  });
  return completion.choices[0].message;
}

export default GPT;
