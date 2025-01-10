import { useState } from "react";

interface PromptBoxProps {
  setPrompt: (item: string) => void;
  setResponse: (item: string) => void;
}

// the prompt box in which users can enter their text
function PromptBox({ setPrompt, setResponse}: PromptBoxProps) {
  // current text state
  const [curText, setCurText] = useState("");
  // submission handler
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPrompt(curText);
    setResponse(curText + " this is the response")
    setCurText("");
  }
  return (
    <div>
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
