import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async () => {
        try {
            if (!userInput.trim()) return;

            const newMessages = [...messages, { text: userInput, isUser: true }];
            setMessages(newMessages);
            setUserInput('');

            const res = await fetch('https://devman.kuki.ai/talk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    botkey: process.env.REACT_APP_KUKI_API_KEY,
                    input: userInput,
                }),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            const botResponse = data.responses[0];

            const updatedMessages = [...newMessages, { text: botResponse, isUser: false }];
            setMessages(updatedMessages);
        } catch (error) {
            console.error('Error:', error);
            setError('Sorry, something went wrong. Please try again later.');
        }
    };

    return (
        <div className="container">
            <h1 className="text-center my-4">Health and Wellness Chatbot</h1>
            <div className="chat-container bg-light p-3 rounded">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`d-inline-block p-2 my-2 rounded ${message.isUser ? 'bg-primary text-white align-self-end' : 'bg-secondary text-white align-self-start'}`}
                        style={{ maxWidth: '70%' }}
                    >
                        {message.text}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="input-group my-3">
                <input
                    type="text"
                    className="form-control"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Ask your question..."
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default App;
