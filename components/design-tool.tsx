"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Download, RotateCcw, Share2, ShoppingCart } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { toast } from "sonner"
import { api } from "@/app/services/api"
import { useRouter } from "next/navigation"

const bottleColors = [
  { name: "Clear", value: "bg-transparent border-2 border-gray-300" },
  { name: "Blue", value: "bg-blue-200" },
  { name: "Green", value: "bg-green-200" },
  { name: "Pink", value: "bg-pink-200" },
  { name: "Purple", value: "bg-purple-200" },
]

const capColors = [
  { name: "White", value: "bg-white border border-gray-300" },
  { name: "Blue", value: "bg-blue-500" },
  { name: "Green", value: "bg-green-500" },
  { name: "Black", value: "bg-black" },
  { name: "Red", value: "bg-red-500" },
]

interface UserInfo {
  name: string | null;
  email: string | null;
  phone: string | null;
}

interface DesignToolProps {
  userInfo: UserInfo;
  onUpdateUserInfo: (info: UserInfo) => void;
}

export default function DesignTool({ userInfo, onUpdateUserInfo }: DesignToolProps) {
  const [bottleColor, setBottleColor] = useState(bottleColors[0].value)
  const [capColor, setCapColor] = useState(capColors[0].value)
  const [labelText, setLabelText] = useState("Your Brand")
  const [textColor, setTextColor] = useState("#000000")
  const [fontSize, setFontSize] = useState([24])
  const [logoImage, setLogoImage] = useState<string | null>(null)
  const [bottleSize, setBottleSize] = useState("500ml")
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Create a URL for the file
    const objectUrl = URL.createObjectURL(file);
    
    // Create image element with proper typing
    const img = document.createElement('img');
    
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        if (!ctx) {
          throw new Error('Could not get canvas context');
        }

        // Calculate dimensions
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 800;
        let width = img.width;
        let height = img.height;

        if (width > height && width > MAX_WIDTH) {
          height = Math.round(height * (MAX_WIDTH / width));
          width = MAX_WIDTH;
        } else if (height > MAX_HEIGHT) {
          width = Math.round(width * (MAX_HEIGHT / height));
          height = MAX_HEIGHT;
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7);
        setLogoImage(compressedDataUrl);

        // Clean up
        URL.revokeObjectURL(objectUrl);
      } catch (error) {
        console.error('Error processing image:', error);
        toast.error('Error processing image');
        URL.revokeObjectURL(objectUrl);
      }
    };

    img.onerror = () => {
      toast.error('Error loading image');
      URL.revokeObjectURL(objectUrl);
    };

    img.src = objectUrl;
  };

  const resetDesign = () => {
    setBottleColor(bottleColors[0].value)
    setCapColor(capColors[0].value)
    setLabelText("Your Brand")
    setTextColor("#000000")
    setFontSize([24])
    setLogoImage(null)
    setBottleSize("500ml")
  }

  const handleAddToQuote = () => {
    setShowConfirmDialog(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onUpdateUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  const handleConfirmDesign = async () => {
    if (!userInfo.name || (!userInfo.email && !userInfo.phone)) {
      toast.error('Please provide your name and either email or phone number');
      return;
    }

    try {
      setLoading(true);
      toast.loading('Saving your design...');

      const designData = {
        userId: 'user_' + Math.random().toString(36).substr(2, 9),
        name: userInfo.name,
        email: userInfo.email,
        phone: userInfo.phone,
        bottleColor,
        capColor,
        labelText,
        textColor,
        fontSize: fontSize[0],
        logoImage,
        bottleSize,
        createdAt: new Date().toISOString(),
        status: 'pending'
      };

      const response = await api.saveDesign(designData);

      if (response.success) {
        toast.success('Design saved successfully!');
        setShowConfirmDialog(false);
        router.push('/quote');
      } else {
        toast.error(response.message || 'Failed to save design');
      }
    } catch (error) {
      console.error('Save error:', error);
      toast.error('Failed to save design. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Helper function to convert Tailwind classes to colors
  const getTailwindColor = (colorClass: string): string => {
    switch (colorClass) {
      case 'bg-transparent':
        return 'transparent';
      case 'bg-blue-200':
        return '#BFDBFE';
      case 'bg-green-200':
        return '#BBF7D0';
      case 'bg-pink-200':
        return '#FBCFE8';
      case 'bg-purple-200':
        return '#E9D5FF';
      case 'bg-white':
        return '#FFFFFF';
      case 'bg-blue-500':
        return '#3B82F6';
      case 'bg-green-500':
        return '#22C55E';
      case 'bg-black':
        return '#000000';
      case 'bg-red-500':
        return '#EF4444';
      default:
        return '#FFFFFF';
    }
  };

  const handleShare = async () => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        throw new Error('Could not create canvas context');
      }

      // Set canvas dimensions
      canvas.width = 800;
      canvas.height = 1200;

      // Draw background
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw bottle
      ctx.fillStyle = getTailwindColor(bottleColor);
      ctx.fillRect(200, 100, 400, 800);

      // Draw cap
      ctx.fillStyle = getTailwindColor(capColor);
      ctx.fillRect(300, 50, 200, 100);

      // Draw label
      ctx.fillStyle = 'white';
      ctx.fillRect(250, 300, 300, 400);

      // Add text
      ctx.fillStyle = textColor;
      ctx.font = `${fontSize[0]}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(labelText, 400, 500);

      // Convert to shareable format
      const designImage = canvas.toDataURL('image/png');

      if (navigator.share) {
        try {
          await navigator.share({
            title: 'My PrintPaani Bottle Design',
            text: 'Check out my custom bottle design from PrintPaani!',
            url: window.location.href
          });
          toast.success('Design shared successfully!');
        } catch (shareError) {
          await navigator.clipboard.writeText(window.location.href);
          toast.success('Design link copied to clipboard!');
        }
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success('Design link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing design:', error);
      toast.error('Failed to share design. Please try again.');
    }
  };

  const handleSaveImage = () => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        throw new Error('Could not create canvas context');
      }

      // Set canvas size
      canvas.width = 800;
      canvas.height = 1200;

      // Draw background
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw bottle
      ctx.fillStyle = getTailwindColor(bottleColor);
      ctx.fillRect(200, 100, 400, 800);

      // Draw cap
      ctx.fillStyle = getTailwindColor(capColor);
      ctx.fillRect(300, 50, 200, 100);

      // Draw label
      ctx.fillStyle = 'white';
      ctx.fillRect(250, 300, 300, 400);

      // Add text
      ctx.fillStyle = textColor;
      ctx.font = `${fontSize[0]}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(labelText, 400, 500);

      // Add logo if exists
      if (logoImage) {
        const img = document.createElement('img');
        img.onload = () => {
          ctx.drawImage(img, 300, 350, 200, 100);
          downloadImage(canvas);
        };
        img.onerror = () => {
          toast.error('Error loading logo image');
          // Still download the design without the logo
          downloadImage(canvas);
        };
        img.src = logoImage;
      } else {
        downloadImage(canvas);
      }
    } catch (error) {
      console.error('Error saving design:', error);
      toast.error('Failed to save design. Please try again.');
    }
  };

  const downloadImage = (canvas: HTMLCanvasElement) => {
    try {
      const link = document.createElement('a');
      link.download = `printpaani-design-${new Date().getTime()}.png`;
      link.href = canvas.toDataURL('image/png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success('Design downloaded successfully!');
    } catch (error) {
      console.error('Error downloading design:', error);
      toast.error('Failed to download design. Please try again.');
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 sm:p-6 bg-blue-50 border-b">
        <h2 className="text-xl sm:text-2xl font-bold text-center">Custom Bottle Designer</h2>
        <p className="text-sm sm:text-base text-center text-gray-500">Design your own branded water bottle</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 p-4 sm:p-6">
        {/* Preview Section */}
        <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-4 sm:p-6 min-h-[400px] sm:min-h-[500px]">
          <div className="relative">
            {/* Bottle */}
            <div
              className={`relative w-[100px] sm:w-[120px] h-[250px] sm:h-[300px] rounded-lg mx-auto ${bottleColor}`}
              style={{
                borderRadius: "10px 10px 20px 20px",
              }}
            >
              {/* Cap */}
              <div
                className={`absolute -top-8 left-1/2 transform -translate-x-1/2 w-[30px] sm:w-[40px] h-[25px] sm:h-[30px] rounded-t-lg ${capColor}`}
              ></div>

              {/* Label */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80px] sm:w-[100px] h-[120px] sm:h-[150px] bg-white rounded-lg flex flex-col items-center justify-center p-2 border border-gray-200">
                {logoImage && (
                  <div className="mb-2">
                    <Image
                      src={logoImage || "/placeholder.svg"}
                      alt="Logo"
                      width={60}
                      height={30}
                      className="object-contain max-h-[30px] sm:max-h-[40px]"
                    />
                  </div>
                )}
                <div
                  className="text-center font-bold break-words w-full"
                  style={{
                    color: textColor,
                    fontSize: `${fontSize[0]}px`,
                  }}
                >
                  {labelText}
                </div>
                <div className="mt-2 text-xs text-gray-500">{bottleSize}</div>
              </div>
            </div>

            {/* Size indicator */}
            <div className="mt-4 text-center text-sm text-gray-500">{bottleSize} Bottle</div>
          </div>

          <div className="flex flex-wrap gap-2 mt-6 justify-center">
            <Button variant="outline" size="sm" onClick={resetDesign}>
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" size="sm" onClick={handleSaveImage}>
              <Download className="mr-2 h-4 w-4" />
              Save
            </Button>
          </div>
        </div>

        {/* Controls Section */}
        <div className="w-full max-w-full overflow-hidden">
          <Tabs defaultValue="bottle" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="bottle">Bottle</TabsTrigger>
              <TabsTrigger value="label">Label</TabsTrigger>
              <TabsTrigger value="text">Text</TabsTrigger>
            </TabsList>

            <TabsContent value="bottle" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label>Bottle Size</Label>
                <RadioGroup
                  defaultValue="500ml"
                  value={bottleSize}
                  onValueChange={setBottleSize}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="500ml" id="r1" />
                    <Label htmlFor="r1">500ml</Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="1000ml" id="r2" />
                    <Label htmlFor="r2">1000ml</Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="1500ml" id="r3" />
                    <Label htmlFor="r3">1500ml</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Bottle Color</Label>
                <div className="flex flex-wrap gap-2">
                  {bottleColors.map((color, index) => (
                    <button
                      key={index}
                      className={`w-8 h-8 rounded-full ${color.value} ${
                        bottleColor === color.value ? "ring-2 ring-blue-600 ring-offset-2" : ""
                      }`}
                      onClick={() => setBottleColor(color.value)}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Cap Color</Label>
                <div className="flex flex-wrap gap-2">
                  {capColors.map((color, index) => (
                    <button
                      key={index}
                      className={`w-8 h-8 rounded-full ${color.value} ${
                        capColor === color.value ? "ring-2 ring-blue-600 ring-offset-2" : ""
                      }`}
                      onClick={() => setCapColor(color.value)}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="label" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="logo-upload">Upload Logo</Label>
                <Input id="logo-upload" type="file" accept="image/*" onChange={handleLogoUpload} />
                {logoImage && (
                  <div className="mt-2">
                    <Button variant="outline" size="sm" onClick={() => setLogoImage(null)}>
                      Remove Logo
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="text" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="label-text">Label Text</Label>
                <Input
                  id="label-text"
                  value={labelText}
                  onChange={(e) => setLabelText(e.target.value)}
                  maxLength={20}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="text-color">Text Color</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="text-color"
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-12 h-10 p-1"
                  />
                  <span className="text-sm text-gray-500">{textColor}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="font-size">Font Size</Label>
                  <span className="text-sm text-gray-500">{fontSize[0]}px</span>
                </div>
                <Slider id="font-size" min={12} max={36} step={1} value={fontSize} onValueChange={setFontSize} />
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8">
            <Button 
              className="w-full" 
              onClick={handleAddToQuote}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Save Your Design</DialogTitle>
            <DialogDescription>
              Please provide your contact information to save your design.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={userInfo.name || ''}
                onChange={handleInputChange}
                placeholder="Your name"
                className="w-full"
                autoComplete="off"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={userInfo.email || ''}
                onChange={handleInputChange}
                placeholder="Your email"
                className="w-full"
                autoComplete="off"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={userInfo.phone || ''}
                onChange={handleInputChange}
                placeholder="Your phone number"
                className="w-full"
                autoComplete="off"
              />
              <p className="text-sm text-gray-500">
                Please provide either email or phone number
              </p>
            </div>

            <div className="mt-4 space-y-2">
              <h4 className="font-medium">Design Details</h4>
              <p><strong>Bottle Size:</strong> {bottleSize}</p>
              <p><strong>Bottle Color:</strong> {bottleColor}</p>
              <p><strong>Cap Color:</strong> {capColor}</p>
              <p><strong>Label Text:</strong> {labelText}</p>
              <p><strong>Font Size:</strong> {fontSize[0]}px</p>
              {logoImage && <p><strong>Logo:</strong> Included</p>}
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowConfirmDialog(false)}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                type="button"
                onClick={handleConfirmDesign}
                disabled={loading || !userInfo.name || (!userInfo.email && !userInfo.phone)}
              >
                {loading ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Saving...
                  </>
                ) : (
                  'Save Design'
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

