import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey:
    "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",
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
