interface ChatLogProps {
  userText: string;
  aiText: string;
}

function ChatLog({ userText, aiText }: ChatLogProps) {
  return (
    <>
      <div className="chat-container">
        <div className="me">{userText}</div>
        <div className="you">{aiText}</div>
      </div>
    </>
  );
}

export default ChatLog;
