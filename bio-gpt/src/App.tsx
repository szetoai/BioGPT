import { useState } from "react";
import Logo from "./components/Logo";
import PromptBox from "./components/PromptBox";
import ChatLog from "./components/ChatLog";

function App() {
  const [prompt, setPrompt] = useState("Awaiting prompt...");
  const [response, setResponse] = useState("Awaiting prompt...");
  return (
    <>
      <Logo />
      <ChatLog userText={prompt} aiText={response} />
      <PromptBox
        setPrompt={(x) => setPrompt(x)}
        setResponse={(x) => setResponse(x)}
      />
    </>
  );
}

export default App;
