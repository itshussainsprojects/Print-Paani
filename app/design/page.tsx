"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DesignTool from "@/components/design-tool"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface UserInfo {
  name: string | null;
  email: string | null;
  phone: string | null;
}

export default function DesignPage() {
  const router = useRouter();
  const [isIdentified, setIsIdentified] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({    
    name: '',
    email: '',
    phone: ''
  });
  const [step, setStep] = useState<'name' | 'contact'>('name');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Check if user info exists in localStorage
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
      setIsIdentified(true);
    }
  }, []);

  const handleSubmit = () => {
    if (step === 'name') {
      if (!inputValue.trim()) {
        toast.error('Please enter your name');
        return;
      }
      setUserInfo(prev => ({ ...prev, name: inputValue }));
      setStep('contact');
      setInputValue('');
    } else {
      if (!inputValue.trim()) {
        toast.error('Please enter your contact information');
        return;
      }
      const isEmail = inputValue.includes('@');
      const newUserInfo = {
        ...userInfo,
        [isEmail ? 'email' : 'phone']: inputValue
      };
      setUserInfo(newUserInfo);
      localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
      setIsIdentified(true);
      toast.success('Identification complete! You can now use the design tool.');
    }
  };

  if (!isIdentified) {
  return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">Identify Yourself</h1>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="input">
                {step === 'name' ? 'Enter your name' : 'Enter your email or phone number'}
              </Label>
              <Input
                id="input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={step === 'name' ? 'Your name' : 'Email or phone number'}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              />
            </div>

            <Button 
              onClick={handleSubmit}
              className="w-full"
            >
              {step === 'name' ? 'Next' : 'Complete'}
              </Button>
          </div>
        </Card>
        </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Design Your Bottle</h1>
        <DesignTool 
          userInfo={userInfo} 
          onUpdateUserInfo={(info) => setUserInfo(info)}
        />
      </div>
    </div>
  );
}

