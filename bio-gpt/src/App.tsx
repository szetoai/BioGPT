import { useState } from "react";
import PromptBox from "./components/PromptBox";
import ChatLog from "./components/ChatLog";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  console.log(prompt);
  return (
    <>
      <ChatLog userText={prompt} aiText={response} />
      <PromptBox
        setPrompt={(x) => setPrompt(x)}
        setResponse={(x) => setResponse(x)}
      />
    </>
  );
}

export default App;
