import { useState } from "react";
import OpenAI from "openai";

const key =
  "";
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: key,
  dangerouslyAllowBrowser: true,
});

async function GPT(input: string) {
  const defaultPrompt =
    "Answer the following prompt using only knowledge and language appropriate for an AP Biology class for high school. Do not use any asterisks. ";
  const completion = await openai.chat.completions.create({
    model: "deepseek/deepseek-chat",
    messages: [
      {
        role: "user",
        content: defaultPrompt + input,
      },
    ],
  });
  return completion.choices[0].message.content;
}

interface PromptBoxProps {
  setPrompt: (item: string) => void;
  setResponse: (item: string) => void;
}

// the prompt box in which users can enter their text
function PromptBox({ setPrompt, setResponse }: PromptBoxProps) {
  // current text state
  const [curText, setCurText] = useState("");
  // submission handler
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPrompt(curText);
    setResponse("Thinking...");
    GPT(curText)
      .then((response) => {
        setResponse(response);
      })
      .catch(() => {
        setResponse(
          "Something went wrong. Please try again or contact the creator for support."
        );
      });
    setCurText("");
  }
  return (
    <div className="ui">
      <form method="post" onSubmit={(x) => handleSubmit(x)}>
        <input
          name="promptText"
          placeholder="Enter text here..."
          value={curText}
          onChange={(text) => setCurText(text.target.value)}
        />
      </form>
      <button
        onClick={() => {
          setPrompt(curText);
          setCurText("");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default PromptBox;
