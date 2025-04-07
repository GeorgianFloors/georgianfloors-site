'use client';

import { useState, useRef, useEffect } from 'react';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi there! How can I help you with your flooring today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when a new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, newMessage]);

    // Fake bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: 'bot', text: "Thanks for your message! We'll get back to you shortly." }
      ]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-80 max-h-[75vh] bg-white shadow-xl rounded-xl flex flex-col overflow-hidden border border-gray-200">
          <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
            <span className="font-medium">Chat with Us</span>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 text-lg">
              ×
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-2 text-sm bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg ${
                  msg.role === 'user'
                    ? 'bg-blue-100 text-right self-end ml-12'
                    : 'bg-gray-200 text-left mr-12'
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="border-t border-gray-200 p-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring focus:border-blue-400"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
          aria-label="Open chatbot"
        >
          💬
        </button>
      )}
    </div>
  );
}
