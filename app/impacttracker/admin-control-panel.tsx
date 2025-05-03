// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Trash2 } from "lucide-react"
// import EnvironmentalImpactTracker from "./environmental-impact-tracker"
// import ConsumerImpactTracker from "./consumer-impact-tracker"

// export default function AdminControlPanel() {
//   // Your Impact tab data
//   const [userBottles, setUserBottles] = useState(5)
//   const [userInputValue, setUserInputValue] = useState("5")

//   // Collective Impact tab data
//   const [bottlesDelivered, setBottlesDelivered] = useState(3000)
//   const [inputValue, setInputValue] = useState("3000")

//   // Impact Timeline tab data
//   const [impactHistory, setImpactHistory] = useState([
//     { bottlesDelivered: 3000, timestamp: "2023-12-01", businessName: "Eco Cafe" },
//     { bottlesDelivered: 1500, timestamp: "2024-01-15", businessName: "Green Gym" },
//     { bottlesDelivered: 2200, timestamp: "2024-02-10", businessName: "Sustainable Bistro" },
//     { bottlesDelivered: 800, timestamp: "2024-03-05", businessName: "Organic Market" },
//     { bottlesDelivered: 1200, timestamp: "2024-04-20", businessName: "Wellness Studio" },
//   ])
//   const [newBusinessName, setNewBusinessName] = useState("")
//   const [newBottlesDelivered, setNewBottlesDelivered] = useState("")
//   const [newTimestamp, setNewTimestamp] = useState("")

//   const handleUpdateUserBottles = () => {
//     const newValue = Number.parseInt(userInputValue)
//     if (!isNaN(newValue) && newValue >= 0) {
//       setUserBottles(newValue)
//     }
//   }

//   const handleUpdateBottles = () => {
//     const newValue = Number.parseInt(inputValue)
//     if (!isNaN(newValue) && newValue >= 0) {
//       setBottlesDelivered(newValue)
//     }
//   }

//   const handleAddTimelineEntry = () => {
//     if (newBusinessName && newBottlesDelivered && newTimestamp) {
//       const bottles = Number.parseInt(newBottlesDelivered)
//       if (!isNaN(bottles) && bottles >= 0) {
//         const newEntry = {
//           businessName: newBusinessName,
//           bottlesDelivered: bottles,
//           timestamp: newTimestamp,
//         }
//         setImpactHistory([...impactHistory, newEntry])
//         setNewBusinessName("")
//         setNewBottlesDelivered("")
//         setNewTimestamp("")
//       }
//     }
//   }

//   const handleRemoveTimelineEntry = (index: number) => {
//     const updatedHistory = [...impactHistory]
//     updatedHistory.splice(index, 1)
//     setImpactHistory(updatedHistory)
//   }

//   return (
//     <div className="container mx-auto p-4 max-w-6xl">
//       <h1 className="text-3xl font-bold mb-8 text-center">PrintPaani Admin Dashboard</h1>

//       <Tabs defaultValue="your-impact" className="w-full mb-8">
//         <TabsList className="w-full mb-6">
//           <TabsTrigger value="your-impact" className="flex-1">
//             Your Impact
//           </TabsTrigger>
//           <TabsTrigger value="collective-impact" className="flex-1">
//             Collective Impact
//           </TabsTrigger>
//           <TabsTrigger value="impact-timeline" className="flex-1">
//             Impact Timeline
//           </TabsTrigger>
//         </TabsList>

//         <TabsContent value="your-impact">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             <Card className="lg:col-span-1">
//               <CardHeader>
//                 <CardTitle>Update User Impact</CardTitle>
//                 <CardDescription>Set the number of bottles purchased by an individual user</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="userBottles">User Bottles Purchased</Label>
//                     <Input
//                       id="userBottles"
//                       type="number"
//                       min="0"
//                       value={userInputValue}
//                       onChange={(e) => setUserInputValue(e.target.value)}
//                       placeholder="Enter number of bottles"
//                     />
//                   </div>
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button onClick={handleUpdateUserBottles} className="w-full">
//                   Update User Impact
//                 </Button>
//               </CardFooter>
//             </Card>

//             <Card className="lg:col-span-2">
//               <CardHeader>
//                 <CardTitle>User Impact Statistics</CardTitle>
//                 <CardDescription>Summary of individual user impact metrics</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-2">
//                   <div className="flex justify-between">
//                     <span className="font-medium">User Bottles Purchased:</span>
//                     <span>{userBottles.toLocaleString()}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-medium">Plastic Bottles Saved:</span>
//                     <span>{(userBottles * 20).toLocaleString()}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-medium">CO₂ Saved:</span>
//                     <span>{(userBottles * 20 * 0.025).toFixed(1)} kg</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-medium">Trees Equivalent:</span>
//                     <span>{((userBottles * 20 * 0.025) / 21).toFixed(1)}</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </TabsContent>

//         <TabsContent value="collective-impact">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             <Card className="lg:col-span-1">
//               <CardHeader>
//                 <CardTitle>Update Collective Impact</CardTitle>
//                 <CardDescription>
//                   Set the total number of custom bottles delivered to calculate collective environmental impact
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="bottles">Total Bottles Delivered</Label>
//                     <Input
//                       id="bottles"
//                       type="number"
//                       min="0"
//                       value={inputValue}
//                       onChange={(e) => setInputValue(e.target.value)}
//                       placeholder="Enter number of bottles"
//                     />
//                   </div>
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button onClick={handleUpdateBottles} className="w-full">
//                   Update Collective Impact
//                 </Button>
//               </CardFooter>
//             </Card>

//             <Card className="lg:col-span-2">
//               <CardHeader>
//                 <CardTitle>Collective Impact Statistics</CardTitle>
//                 <CardDescription>Summary of collective environmental impact metrics</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-2">
//                   <div className="flex justify-between">
//                     <span className="font-medium">Total Bottles Delivered:</span>
//                     <span>{bottlesDelivered.toLocaleString()}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-medium">Plastic Bottles Saved:</span>
//                     <span>{(bottlesDelivered * 20).toLocaleString()}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-medium">CO₂ Saved:</span>
//                     <span>{(bottlesDelivered * 20 * 0.025).toFixed(1)} kg</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-medium">Trees Equivalent:</span>
//                     <span>{((bottlesDelivered * 20 * 0.025) / 21).toFixed(1)}</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </TabsContent>

//         <TabsContent value="impact-timeline">
//           <div className="grid grid-cols-1 gap-8">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Add Timeline Entry</CardTitle>
//                 <CardDescription>Add a new entry to the impact timeline</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="businessName">Business Name</Label>
//                     <Input
//                       id="businessName"
//                       value={newBusinessName}
//                       onChange={(e) => setNewBusinessName(e.target.value)}
//                       placeholder="Enter business name"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="timelineBottles">Bottles Delivered</Label>
//                     <Input
//                       id="timelineBottles"
//                       type="number"
//                       min="0"
//                       value={newBottlesDelivered}
//                       onChange={(e) => setNewBottlesDelivered(e.target.value)}
//                       placeholder="Enter number of bottles"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="timestamp">Date</Label>
//                     <Input
//                       id="timestamp"
//                       type="date"
//                       value={newTimestamp}
//                       onChange={(e) => setNewTimestamp(e.target.value)}
//                     />
//                   </div>
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button onClick={handleAddTimelineEntry} className="w-full">
//                   Add Timeline Entry
//                 </Button>
//               </CardFooter>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <CardTitle>Impact Timeline Entries</CardTitle>
//                 <CardDescription>Manage existing timeline entries</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   {impactHistory.map((entry, index) => (
//                     <div key={index} className="flex items-center justify-between p-4 border rounded-md">
//                       <div className="flex-1">
//                         <div className="font-medium">{entry.businessName}</div>
//                         <div className="text-sm text-gray-500">
//                           {entry.timestamp} • {entry.bottlesDelivered.toLocaleString()} bottles
//                         </div>
//                       </div>
//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         onClick={() => handleRemoveTimelineEntry(index)}
//                         className="text-red-500 hover:text-red-700 hover:bg-red-50"
//                       >
//                         <Trash2 className="h-5 w-5" />
//                       </Button>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </TabsContent>
//       </Tabs>

//       <div className="mt-8 border-t pt-8">
//         <h2 className="text-2xl font-bold mb-6 text-center">Environmental Impact Preview</h2>
//         <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
//           <EnvironmentalImpactTracker bottlesDelivered={bottlesDelivered} />
//         </div>

//         <h2 className="text-2xl font-bold mb-6 text-center">Consumer View Preview</h2>
//         <div className="bg-white rounded-lg shadow-lg p-6">
//           <ConsumerImpactTracker
//             userBottles={userBottles}
//             totalBottlesDelivered={bottlesDelivered}
//             impactHistory={impactHistory}
//           />
//         </div>
//       </div>
//     </div>
//   )
// }
