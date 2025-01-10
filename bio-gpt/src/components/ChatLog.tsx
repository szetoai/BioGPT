interface ChatLogProps {
  userText: string;
}

function ChatLog({ userText }: ChatLogProps) {
  return (
    <>
      <div className="chat-container">
        <div className="me">{userText}</div>
        <div className="you">Hello! Great, and yourself?</div>
      </div>
    </>
  );
}

export default ChatLog;
