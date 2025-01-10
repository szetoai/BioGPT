import { useState } from "react";

interface PromptBoxProps {
  setPrompt: (item: string) => void;
}

// the prompt box in which users can enter their text
function PromptBox({ setPrompt }: PromptBoxProps) {
  // current text state
  const [curText, setCurText] = useState("");
  // submission handler
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPrompt(curText);
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
