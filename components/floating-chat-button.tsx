'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MessageCircle, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { DialogTitle } from '@/components/ui/dialog'
import Chatbot from './chatbot'

export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center space-y-2">
      {/* Label */}
      <div className="bg-black text-white text-xs rounded-full px-3 py-1 shadow-md">
        {isOpen ? 'Close Chat' : 'Chat with us'}
      </div>

      {/* Chat Button */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-blue-500 text-white"
            title="Chat with us"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MessageCircle className="h-6 w-6" />
            )}
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[400px] sm:w-[540px] p-0">
          <DialogTitle className="sr-only">Chat with us</DialogTitle>
          <Chatbot />
        </SheetContent>
      </Sheet>
    </div>
  )
}
