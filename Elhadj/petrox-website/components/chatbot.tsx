"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Petrox Assistant 👋\n\nI can help with:\n• Services & solutions\n• Contact information\n• Career opportunities\n• Project portfolio\n\nWhat can I help you with?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("service") || input.includes("what do you do")) {
      return "We offer oil exploration, transportation, equipment maintenance, and energy consulting. Which service interests you most?"
    }

    if (input.includes("contact") || input.includes("reach") || input.includes("phone")) {
      return "📞 +1 (555) 123-4567\n✉️ info@petrox.com\n📍 Houston, TX\nHours: Mon-Fri 8AM-6PM CST"
    }

    if (input.includes("career") || input.includes("job") || input.includes("hiring")) {
      return "We're hiring! Current openings include engineers, technicians, and project managers. Visit our Careers page or email careers@petrox.com"
    }

    if (input.includes("project") || input.includes("portfolio")) {
      return "We've completed 500+ projects globally including pipelines, exploration, and maintenance. Check our Projects page for case studies!"
    }

    if (input.includes("safety") || input.includes("environment")) {
      return "Safety first! We have 2M+ safe work hours and ISO certifications. Environmental responsibility is core to our operations."
    }

    if (input.includes("quote") || input.includes("price") || input.includes("cost")) {
      return "For project quotes, call +1 (555) 123-4567 or use our contact form. We provide estimates within 24-48 hours."
    }

    if (input.includes("location") || input.includes("office") || input.includes("where")) {
      return "🏢 Headquarters: Houston, TX\n🌍 Offices: Dallas, Calgary, Dubai\nServing clients globally!"
    }

    if (input.includes("about") || input.includes("company") || input.includes("history")) {
      return "Founded in 1985, Petrox is a leading energy solutions provider with 35+ years experience and 500+ professionals worldwide."
    }

    if (input.includes("thank") || input.includes("thanks")) {
      return "You're welcome! Happy to help with any other questions about Petrox! 😊"
    }

    return "I can help with info about our services, projects, careers, contact details, or company background. What would you like to know?"
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-yellow-600 hover:bg-yellow-700 text-black shadow-lg z-40"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-40 flex flex-col">
          <CardHeader className="bg-gray-900 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Petrox Assistant</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-gray-800"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            <ScrollArea className="flex-1 p-4 max-h-80">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                    <div
                      className={`max-w-[85%] p-3 rounded-lg break-words ${
                        message.isBot ? "bg-gray-100 text-gray-900" : "bg-yellow-600 text-black"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                      <p className="text-xs opacity-70 mt-2">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-900 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything about Petrox..."
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-yellow-600 hover:bg-yellow-700 text-black"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
