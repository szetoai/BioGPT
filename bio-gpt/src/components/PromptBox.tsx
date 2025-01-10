import { useState } from "react";

// the prompt box in which users can enter their text
function PromptBox() {
  // state variable that tracks the inputted text
  const [prompt, setPrompt] = useState("");
  // submission handler
  function handleSubmit() {
    console.log(prompt);
    setPrompt("");
  }
  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <input
          name="promptText"
          placeholder="Enter text here..."
          value={prompt}
          onChange={(text) => setPrompt(text.target.value)}
        />
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default PromptBox;