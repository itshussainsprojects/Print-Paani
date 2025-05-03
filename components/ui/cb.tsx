'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, X, Loader2 } from "lucide-react";

interface Message {
  text: string;
  isBot: boolean;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [context, setContext] = useState('');

  useEffect(() => {
    // Load context from the provided .txt file
    const loadContext = async () => {
      try {
        const response = await fetch('/context.txt');
        const text = await response.text();
        setContext(text);
      } catch (error) {
        console.error('Error loading context:', error);
      }
    };

    loadContext();
  }, []);

  useEffect(() => {
    if (isOpen) {
      setMessages([{
        text: "Hello! Welcome to PrintPaani. I'm here to help you with your custom branded water bottle needs. How can I assist you today?",
        isBot: true
      }]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Add greeting message if this is the first message
    if (messages.length === 0) {
      setMessages(prev => [
        ...prev,
        {
          text: "Hello! Welcome to PrintPaani. I'm here to help you with your custom branded water bottle needs. How can I assist you today?",
          isBot: true
        }
      ]);
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: input,
          context: context
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      setMessages(prev => [...prev, { text: data.answer, isBot: true }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [
        ...prev,
        { text: 'Sorry, I encountered an error. Please try again.', isBot: true }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 p-0 bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
        >
          <MessageCircle className="h-8 w-8 text-white" />
        </Button>
      ) : (
        <Card className="w-[380px] h-[600px] flex flex-col rounded-2xl shadow-2xl transform transition-all duration-300 ease-in-out">
          <div className="flex items-center justify-between p-4 bg-blue-600 text-white rounded-t-2xl">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-6 w-6" />
              <h3 className="font-semibold text-lg">PrintPaani Assistant</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-blue-700 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <ScrollArea
            ref={scrollAreaRef}
            className="flex-1 p-4"
          >
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-4 ${message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-600 text-white'
                    } shadow-md`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-3 bg-secondary text-secondary-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="p-4 bg-gray-50 border-t rounded-b-2xl">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="flex gap-3"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !input.trim()}
                className="rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </Card>
      )}
    </div>
  );
}