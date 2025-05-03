'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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

  useEffect(() => {
    fetchImpactData();
  }, []);

  const fetchImpactData = async () => {
    try {
      const response = await fetch('/api/impact-tracker');
      if (!response.ok) {
        throw new Error('Failed to fetch impact data');
      }
      const data = await response.json();
      setImpactData(data);
    } catch (error) {
      console.error('Error fetching impact data:', error);
      toast.error('Failed to fetch impact data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Impact</h1>

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
          <Card>
            <CardHeader>
              <CardTitle>Your Impact Statistics</CardTitle>
              <CardDescription>Summary of your environmental impact</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Your Bottles Purchased:</span>
                  <span>{impactData?.user_bottles?.toLocaleString() ?? '0'}</span>
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
        </TabsContent>

        <TabsContent value="collective-impact">
          <Card>
            <CardHeader>
              <CardTitle>Collective Impact Statistics</CardTitle>
              <CardDescription>Summary of our collective environmental impact</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Total Bottles Delivered:</span>
                  <span>{impactData?.total_bottles?.toLocaleString() ?? '0'}</span>
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
        </TabsContent>

        <TabsContent value="impact-timeline">
          <Card>
            <CardHeader>
              <CardTitle>Impact Timeline</CardTitle>
              <CardDescription>History of our collective impact</CardDescription>
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
                    <div className="text-lg font-semibold">
                      {entry.bottlesDelivered.toLocaleString()} bottles
                    </div>
                  </div>
                ))}
                {(!impactData?.impact_history || impactData.impact_history.length === 0) && (
                  <div className="text-center text-gray-500 py-4">
                    No impact history available yet
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 