"use client";

import { useChat } from "ai/react";
import ReactMarkdown from "react-markdown";
import { useState, useEffect, useRef } from 'react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [darkMode, setDarkMode] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);;

  useEffect(() => {
    const classList = document.body.classList;
    darkMode ? classList.add('dark') : classList.remove('dark');
  }, [darkMode]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const handleButtonClick = (text: string) => {
    handleInputChange({ target: { value: text } } as React.ChangeEvent<HTMLInputElement>);
  };
  

  return (
    <div className="mx-auto w-full max-w-lg py-10 flex flex-col stretch bg-white dark:bg-black">
      <button onClick={toggleDarkMode} className="w-1/4 border border-gray-300 rounded shadow-xl p-2 text-black dark:text-white">{darkMode ? "Dark Mode" : "Light Mode"}</button>
      {messages.length > 0
        ? messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap text-black dark:text-white">
              {m.role === "user" ? "User: " : "AI: "}
              <ReactMarkdown>{m.content}</ReactMarkdown>
            </div>
          ))
        : null}
      <div ref={messagesEndRef} />

      <form onSubmit={handleSubmit} className="bg-white dark:bg-black">
        <div className="flex justify-around mb-4">
          <button onClick={() => handleButtonClick("Can you diagram a sample of the network with ascii?")}>ASCII</button>
          <button onClick={() => handleButtonClick("can you list the infrastructure with names and ip addresses?")}>List</button>
        </div>
        <input
          className="fixed w-full max-w-md bottom-0 border border-gray-300 rounded mb-8 shadow-xl p-2 text-black dark:text-white bg-white dark:bg-black"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
