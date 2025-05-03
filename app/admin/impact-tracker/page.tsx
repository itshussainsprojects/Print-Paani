'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trash2 } from "lucide-react";
import { toast } from 'sonner';

interface ImpactHistory {
  bottlesDelivered: number;
  timestamp: string;
  businessName: string;
}

interface ImpactData {
  id: string;
  user_bottles: number;
  total_bottles: number;
  impact_history: ImpactHistory[];
  updated_at: string;
}

export default function ImpactTrackerPage() {
  const [impactData, setImpactData] = useState<ImpactData | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Your Impact tab data
  const [userInputValue, setUserInputValue] = useState("");
  
  // Collective Impact tab data
  const [inputValue, setInputValue] = useState("");
  
  // Impact Timeline tab data
  const [newBusinessName, setNewBusinessName] = useState("");
  const [newBottlesDelivered, setNewBottlesDelivered] = useState("");
  const [newTimestamp, setNewTimestamp] = useState("");

  useEffect(() => {
    fetchImpactData();
  }, []);

  const fetchImpactData = async () => {
    try {
      const response = await fetch('/api/admin/impact-tracker');
      const data = await response.json();
      setImpactData(data[0] || {
        user_bottles: 0,
        total_bottles: 0,
        impact_history: []
      });
      setUserInputValue(data[0]?.user_bottles?.toString() || "0");
      setInputValue(data[0]?.total_bottles?.toString() || "0");
    } catch (error) {
      console.error('Error fetching impact data:', error);
      toast.error('Failed to fetch impact data');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateUserBottles = async () => {
    try {
      const newValue = Number.parseInt(userInputValue);
      if (!isNaN(newValue) && newValue >= 0) {
        const response = await fetch('/api/admin/impact-tracker', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_bottles: newValue
          }),
        });

        if (!response.ok) throw new Error('Failed to update user bottles');

        toast.success('User impact updated successfully');
        fetchImpactData();
      }
    } catch (error) {
      console.error('Error updating user bottles:', error);
      toast.error('Failed to update user bottles');
    }
  };

  const handleUpdateBottles = async () => {
    try {
      const newValue = Number.parseInt(inputValue);
      if (!isNaN(newValue) && newValue >= 0) {
        const response = await fetch('/api/admin/impact-tracker', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            total_bottles: newValue
          }),
        });

        if (!response.ok) throw new Error('Failed to update total bottles');

        toast.success('Collective impact updated successfully');
        fetchImpactData();
      }
    } catch (error) {
      console.error('Error updating total bottles:', error);
      toast.error('Failed to update total bottles');
    }
  };

  const handleAddTimelineEntry = async () => {
    try {
      if (newBusinessName && newBottlesDelivered && newTimestamp) {
        const bottles = Number.parseInt(newBottlesDelivered);
        if (!isNaN(bottles) && bottles >= 0) {
          const newEntry = {
            businessName: newBusinessName,
            bottlesDelivered: bottles,
            timestamp: newTimestamp,
          };

          const response = await fetch('/api/admin/impact-tracker', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              impact_history: [...(impactData?.impact_history || []), newEntry]
            }),
          });

          if (!response.ok) throw new Error('Failed to add timeline entry');

          toast.success('Timeline entry added successfully');
          setNewBusinessName("");
          setNewBottlesDelivered("");
          setNewTimestamp("");
          fetchImpactData();
        }
      }
    } catch (error) {
      console.error('Error adding timeline entry:', error);
      toast.error('Failed to add timeline entry');
    }
  };

  const handleRemoveTimelineEntry = async (index: number) => {
    try {
      const updatedHistory = [...(impactData?.impact_history || [])];
      updatedHistory.splice(index, 1);

      const response = await fetch('/api/admin/impact-tracker', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          impact_history: updatedHistory
        }),
      });

      if (!response.ok) throw new Error('Failed to remove timeline entry');

      toast.success('Timeline entry removed successfully');
      fetchImpactData();
    } catch (error) {
      console.error('Error removing timeline entry:', error);
      toast.error('Failed to remove timeline entry');
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8 text-center">PrintPaani Admin Dashboard</h1>

      <Tabs defaultValue="your-impact" className="w-full mb-8">
        <TabsList className="w-full mb-6">
          <TabsTrigger value="your-impact" className="flex-1">
            Your Impact
          </TabsTrigger>
          <TabsTrigger value="collective-impact" className="flex-1">
            Collective Impact
          </TabsTrigger>
          <TabsTrigger value="impact-timeline" className="flex-1">
            Impact Timeline
          </TabsTrigger>
        </TabsList>

        <TabsContent value="your-impact">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Update User Impact</CardTitle>
                <CardDescription>Set the number of bottles purchased by an individual user</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="userBottles">User Bottles Purchased</Label>
                    <Input
                      id="userBottles"
                      type="number"
                      min="0"
                      value={userInputValue}
                      onChange={(e) => setUserInputValue(e.target.value)}
                      placeholder="Enter number of bottles"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleUpdateUserBottles} className="w-full">
                  Update User Impact
                </Button>
              </CardFooter>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>User Impact Statistics</CardTitle>
                <CardDescription>Summary of individual user impact metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">User Bottles Purchased:</span>
                    <span>{impactData?.user_bottles.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Plastic Bottles Saved:</span>
                    <span>{((impactData?.user_bottles ?? 0) * 20).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">CO₂ Saved:</span>
                    <span>{((impactData?.user_bottles ?? 0) * 20 * 0.025).toFixed(1)} kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Trees Equivalent:</span>
                    <span>{(((impactData?.user_bottles ?? 0) * 20 * 0.025) / 21).toFixed(1)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="collective-impact">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Update Collective Impact</CardTitle>
                <CardDescription>
                  Set the total number of custom bottles delivered to calculate collective environmental impact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="bottles">Total Bottles Delivered</Label>
                    <Input
                      id="bottles"
                      type="number"
                      min="0"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Enter number of bottles"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleUpdateBottles} className="w-full">
                  Update Collective Impact
                </Button>
              </CardFooter>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Collective Impact Statistics</CardTitle>
                <CardDescription>Summary of collective environmental impact metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Total Bottles Delivered:</span>
                    <span>{impactData?.total_bottles.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Plastic Bottles Saved:</span>
                    <span>{((impactData?.total_bottles ?? 0) * 20).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">CO₂ Saved:</span>
                    <span>{((impactData?.total_bottles ?? 0) * 20 * 0.025).toFixed(1)} kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Trees Equivalent:</span>
                    <span>{(((impactData?.total_bottles ?? 0) * 20 * 0.025) / 21).toFixed(1)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="impact-timeline">
          <div className="grid grid-cols-1 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Add Timeline Entry</CardTitle>
                <CardDescription>Add a new entry to the impact timeline</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input
                      id="businessName"
                      value={newBusinessName}
                      onChange={(e) => setNewBusinessName(e.target.value)}
                      placeholder="Enter business name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timelineBottles">Bottles Delivered</Label>
                    <Input
                      id="timelineBottles"
                      type="number"
                      min="0"
                      value={newBottlesDelivered}
                      onChange={(e) => setNewBottlesDelivered(e.target.value)}
                      placeholder="Enter number of bottles"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timestamp">Date</Label>
                    <Input
                      id="timestamp"
                      type="date"
                      value={newTimestamp}
                      onChange={(e) => setNewTimestamp(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleAddTimelineEntry} className="w-full">
                  Add Timeline Entry
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Impact Timeline</CardTitle>
                <CardDescription>History of impact contributions from businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {impactData?.impact_history?.map((entry, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <div className="font-medium">{entry.businessName}</div>
                        <div className="text-sm text-gray-500">
                          {new Date(entry.timestamp).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-lg font-semibold">
                          {entry.bottlesDelivered.toLocaleString()} bottles
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveTimelineEntry(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 