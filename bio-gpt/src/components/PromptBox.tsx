import { useState } from "react";

// the prompt box in which users can enter their text
function PromptBox() {
  // state variable that tracks the inputted text
  const [prompt, setPrompt] = useState("");
  // submission handler
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(prompt);
    setPrompt("");
  }
  return (
    <div>
      <form method="post" onSubmit={(x) => handleSubmit(x)}>
        <input
          name="promptText"
          placeholder="Enter text here..."
          value={prompt}
          onChange={(text) => setPrompt(text.target.value)}
        />
      </form>
      <button
        onClick={() => {
          console.log(prompt);
          setPrompt("");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default PromptBox;
