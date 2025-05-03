"use client"

import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Send, Mic, StopCircle } from "lucide-react"

interface Message {
  id: string
  type: 'user' | 'bot'
  text: string
  timestamp: Date
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const recognition = useRef<any>(null)

  useEffect(() => {
    // Add initial greeting message
    const greeting: Message = {
      id: Date.now().toString(),
      type: 'bot',
      text: 'Hello! I\'m AquaBot, PrintPaani\'s customer support assistant. How can I help you today?',
      timestamp: new Date()
    }
    setMessages([greeting])
  }, [])

  useEffect(() => {
    // Initialize Web Speech API
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      // @ts-ignore
      recognition.current = new webkitSpeechRecognition()
      recognition.current.continuous = true
      recognition.current.interimResults = true

      recognition.current.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result) => result.transcript)
          .join('')
        setInput(transcript)
      }
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      const data = await response.json()
      
      if (!data.response) {
        throw new Error('Invalid response format from API')
      }
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: data.response,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Error:', error)
      // Add error message to chat
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: "I'm having trouble connecting right now. Please try again later.",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const toggleVoiceInput = () => {
    if (isListening) {
      recognition.current?.stop()
      setIsListening(false)
    } else {
      recognition.current?.start()
      setIsListening(true)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto flex flex-col h-[100dvh]">
    {/* // <Card className="w-full max-w-md mx-auto h-[600px] flex flex-col"> */}
      <div className="flex items-center space-x-4 p-4 border-b">
        <Avatar>
          <AvatarImage src="/images/l.png" alt="AquaBot" />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">AquaBot</h3>
          <p className="text-sm text-muted-foreground">PrintPaani Support</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${message.type === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
            >
              <p>{message.text}</p>
              <span className="text-xs opacity-70 mt-1 block">
                {message.timestamp.toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg p-3 bg-muted">
              <div className="flex space-x-2 items-center">
                <div className="w-2 h-2 rounded-full bg-current animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-current animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 rounded-full bg-current animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1"
        />
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={toggleVoiceInput}
        >
          {isListening ? (
            <StopCircle className="h-4 w-4 text-red-500" />
          ) : (
            <Mic className="h-4 w-4" />
          )}
        </Button>
        <Button type="submit" size="icon">
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </Card>
  )
}

export default Chatbot;

// return (
//   <Card className="w-full max-w-md mx-auto flex flex-col h-[100dvh] sm:max-w-full sm:px-4">
//     {/* // <Card className="w-full max-w-md mx-auto h-[600px] flex flex-col"> */}
//     <div className="flex items-center space-x-4 p-4 border-b">
//       <Avatar>
//         <AvatarImage src="/images/l.png" alt="AquaBot" />
//         <AvatarFallback>AB</AvatarFallback>
//       </Avatar>
//       <div>
//         <h3 className="font-semibold">AquaBot</h3>
//         <p className="text-sm text-muted-foreground">PrintPaani Support</p>
//       </div>
//     </div>

//     <div className="flex-1 overflow-y-auto p-4 space-y-4 px-2 sm:px-4">
//       {messages.map((message) => (
//         <div
//           key={message.id}
//           className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
//         >
//           <div
//             className={`max-w-[80%] sm:max-w-[70%] rounded-lg p-3 ${message.type === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'} px-4`}
//           >
//             <p>{message.text}</p>
//             <span className="text-xs opacity-70 mt-1 block">
//               {message.timestamp.toLocaleTimeString()}
//             </span>
//           </div>
//         </div>
//       ))}
//       {isLoading && (
//         <div className="flex justify-start">
//           <div className="max-w-[80%] sm:max-w-[70%] rounded-lg p-3 bg-muted">
//             <div className="flex space-x-2 items-center">
//               <div className="w-2 h-2 rounded-full bg-current animate-bounce" />
//               <div className="w-2 h-2 rounded-full bg-current animate-bounce [animation-delay:0.2s]" />
//               <div className="w-2 h-2 rounded-full bg-current animate-bounce [animation-delay:0.4s]" />
//             </div>
//           </div>
//         </div>
//       )}
//       <div ref={messagesEndRef} />
//     </div>

//     <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
//       <Input
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Type your message..."
//         className="flex-1"
//       />
//       <Button
//         type="button"
//         variant="outline"
//         size="icon"
//         onClick={toggleVoiceInput}
//       >
//         {isListening ? (
//           <StopCircle className="h-4 w-4 text-red-500" />
//         ) : (
//           <Mic className="h-4 w-4" />
//         )}
//       </Button>
//       <Button type="submit" size="icon">
//         <Send className="h-4 w-4" />
//       </Button>
//     </form>
//   </Card>
// )
// }
// export default Chatbot;