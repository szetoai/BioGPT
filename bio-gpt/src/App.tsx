import { useState } from "react";
import PromptBox from "./components/PromptBox";
import ChatLog from "./components/ChatLog";

function App() {
  const [prompt, setPrompt] = useState("");
  console.log(prompt);
  return (
    <>
      <ChatLog userText={prompt} />
      <PromptBox setPrompt={(x) => setPrompt(x)} />
    </>
  );
}

export default App;
