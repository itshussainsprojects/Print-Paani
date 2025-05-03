// 'use client';

// import { Card } from '@/components/ui/card';
// import { useEffect, useState } from 'react';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// interface StatsData {
//   totalDesigns: number;
//   totalContacts: number;
//   totalQuotes: number;
// }

// interface Design {
//   userId: string;
//   name: string;
//   email: string | null;
//   phone: string | null;
//   bottleColor: string;
//   capColor: string;
//   labelText: string;
//   textColor: string;
//   fontSize: number;
//   logoImage: string | null;
//   bottleSize: string;
//   status: string;
//   createdAt: string;
// }

// interface Contact {
//   name: string;
//   email: string;
//   phone: string;
//   company: string;
//   message: string;
//   status: string;
//   createdAt: string;
// }

// interface Quote {
//   name: string;
//   email: string;
//   phone: string;
//   company: string;
//   bottleSize: string;
//   quantity: number;
//   customization: string[];
//   designHelp: string;
//   deadline: string;
//   additionalInfo: string;
//   status: string;
//   createdAt: string;
// }

// interface RecentData {
//   designs: Design[];
//   contacts: Contact[];
//   quotes: Quote[];
// }

// export default function AdminDashboard() {
//   const [stats, setStats] = useState<StatsData>({
//     totalDesigns: 0,
//     totalContacts: 0,
//     totalQuotes: 0
//   });

//   const [recentData, setRecentData] = useState<RecentData>({
//     designs: [],
//     contacts: [],
//     quotes: []
//   });

//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/api/admin/stats');
//         const data = await response.json();
        
//         if (response.ok) {
//           setStats(data.stats);
//           setRecentData(data.recentData);
//         } else {
//           console.error('Failed to fetch data:', data.error);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (isLoading) {
//     return <div className="flex items-center justify-center h-full">Loading...</div>;
//   }

//   return (
//     <div className="space-y-6 p-2 md:p-6">
//       <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      
//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
//         <Card className="p-4 md:p-6 bg-white">
//           <div className="text-sm text-gray-500">Total Designs</div>
//           <div className="text-2xl md:text-3xl font-bold mt-2">{stats.totalDesigns}</div>
//         </Card>
//         <Card className="p-4 md:p-6 bg-white">
//           <div className="text-sm text-gray-500">Total Contacts</div>
//           <div className="text-2xl md:text-3xl font-bold mt-2">{stats.totalContacts}</div>
//         </Card>
//         <Card className="p-4 md:p-6 bg-white">
//           <div className="text-sm text-gray-500">Total Quotes</div>
//           <div className="text-2xl md:text-3xl font-bold mt-2">{stats.totalQuotes}</div>
//         </Card>
//       </div>

//       {/* Recent Designs Section */}
//       <Card className="p-4 md:p-6 bg-white overflow-hidden">
//         <h2 className="text-xl font-semibold mb-4">Recent Designs</h2>
//         <div className="overflow-x-auto">
//           <ScrollArea className="h-[300px]">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead className="min-w-[100px]">User ID</TableHead>
//                   <TableHead className="min-w-[120px]">Name</TableHead>
//                   <TableHead className="min-w-[150px]">Email</TableHead>
//                   <TableHead className="min-w-[120px]">Phone</TableHead>
//                   <TableHead className="min-w-[100px]">Bottle Size</TableHead>
//                   <TableHead className="min-w-[100px]">Bottle Color</TableHead>
//                   <TableHead className="min-w-[100px]">Cap Color</TableHead>
//                   <TableHead className="min-w-[150px]">Label Text</TableHead>
//                   <TableHead className="min-w-[100px]">Text Color</TableHead>
//                   <TableHead className="min-w-[100px]">Font Size</TableHead>
//                   <TableHead className="min-w-[100px]">Status</TableHead>
//                   <TableHead className="min-w-[120px]">Date</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {recentData.designs.map((design) => (
//                   <TableRow key={design.userId}>
//                     <TableCell className="truncate">{design.userId}</TableCell>
//                     <TableCell className="truncate">{design.name}</TableCell>
//                     <TableCell className="truncate">{design.email || 'N/A'}</TableCell>
//                     <TableCell className="truncate">{design.phone || 'N/A'}</TableCell>
//                     <TableCell className="truncate">{design.bottleSize}</TableCell>
//                     <TableCell className="truncate">{design.bottleColor}</TableCell>
//                     <TableCell className="truncate">{design.capColor}</TableCell>
//                     <TableCell className="truncate">{design.labelText}</TableCell>
//                     <TableCell className="truncate">{design.textColor}</TableCell>
//                     <TableCell className="truncate">{design.fontSize}</TableCell>
//                     <TableCell className="truncate">{design.status}</TableCell>
//                     <TableCell className="truncate">{new Date(design.createdAt).toLocaleDateString()}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </ScrollArea>
//         </div>
//       </Card>

//       {/* Recent Contacts and Quotes Grid */}
//       <div className="grid grid-cols-1 gap-6">
//         {/* Recent Contacts */}
//         <Card className="p-4 md:p-6 bg-white overflow-hidden">
//           <h2 className="text-xl font-semibold mb-4">Recent Contacts</h2>
//           <div className="overflow-x-auto">
//             <ScrollArea className="h-[300px]">
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead className="min-w-[120px]">Name</TableHead>
//                     <TableHead className="min-w-[150px]">Email</TableHead>
//                     <TableHead className="min-w-[120px]">Phone</TableHead>
//                     <TableHead className="min-w-[120px]">Company</TableHead>
//                     <TableHead className="min-w-[200px]">Message</TableHead>
//                     <TableHead className="min-w-[100px]">Status</TableHead>
//                     <TableHead className="min-w-[120px]">Date</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {recentData.contacts.map((contact) => (
//                     <TableRow key={`${contact.email}-${contact.createdAt}`}>
//                       <TableCell className="truncate">{contact.name}</TableCell>
//                       <TableCell className="truncate">{contact.email}</TableCell>
//                       <TableCell className="truncate">{contact.phone}</TableCell>
//                       <TableCell className="truncate">{contact.company}</TableCell>
//                       <TableCell className="truncate">{contact.message}</TableCell>
//                       <TableCell className="truncate">{contact.status}</TableCell>
//                       <TableCell className="truncate">{new Date(contact.createdAt).toLocaleDateString()}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </ScrollArea>
//           </div>
//         </Card>

//         {/* Recent Quotes */}
//         <Card className="p-4 md:p-6 bg-white overflow-hidden">
//           <h2 className="text-xl font-semibold mb-4">Recent Quotes</h2>
//           <div className="overflow-x-auto">
//             <ScrollArea className="h-[300px]">
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead className="min-w-[120px]">Name</TableHead>
//                     <TableHead className="min-w-[150px]">Email</TableHead>
//                     <TableHead className="min-w-[120px]">Phone</TableHead>
//                     <TableHead className="min-w-[120px]">Company</TableHead>
//                     <TableHead className="min-w-[100px]">Bottle Size</TableHead>
//                     <TableHead className="min-w-[100px]">Quantity</TableHead>
//                     <TableHead className="min-w-[200px]">Customization</TableHead>
//                     <TableHead className="min-w-[120px]">Design Help</TableHead>
//                     <TableHead className="min-w-[120px]">Deadline</TableHead>
//                     <TableHead className="min-w-[200px]">Additional Info</TableHead>
//                     <TableHead className="min-w-[100px]">Status</TableHead>
//                     <TableHead className="min-w-[120px]">Created At</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {recentData.quotes.map((quote) => (
//                     <TableRow key={`${quote.email}-${quote.createdAt}`}>
//                       <TableCell className="truncate">{quote.name}</TableCell>
//                       <TableCell className="truncate">{quote.email}</TableCell>
//                       <TableCell className="truncate">{quote.phone}</TableCell>
//                       <TableCell className="truncate">{quote.company}</TableCell>
//                       <TableCell className="truncate">{quote.bottleSize}</TableCell>
//                       <TableCell className="truncate">{quote.quantity}</TableCell>
//                       <TableCell className="truncate">{quote.customization.join(', ')}</TableCell>
//                       <TableCell className="truncate">{quote.designHelp}</TableCell>
//                       <TableCell className="truncate">{new Date(quote.deadline).toLocaleDateString()}</TableCell>
//                       <TableCell className="truncate">{quote.additionalInfo}</TableCell>
//                       <TableCell className="truncate">{quote.status}</TableCell>
//                       <TableCell className="truncate">{new Date(quote.createdAt).toLocaleDateString()}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </ScrollArea>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// }
'use client';

import { Card } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface StatsData {
  totalDesigns: number;
  totalContacts: number;
  totalQuotes: number;
}

interface Design {
  userId: string;
  name: string;
  email: string | null;
  phone: string | null;
  bottleColor: string;
  capColor: string;
  labelText: string;
  textColor: string;
  fontSize: number;
  logoImage: string | null;
  bottleSize: string;
  status: string;
  createdAt: string;
}

interface Contact {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  status: string;
  createdAt: string;
}

interface Quote {
  name: string;
  email: string;
  phone: string;
  company: string;
  bottleSize: string;
  quantity: number;
  customization: {
    customLabel: boolean;
    customCapColor: boolean;
    embossedLogo: boolean;
    customDesign: boolean;
  };
  designHelp: boolean;
  deadline: string;
  additionalInfo: string;
  status: string;
  createdAt: string;
}

interface RecentData {
  designs: Design[];
  contacts: Contact[];
  quotes: Quote[];
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<StatsData>({
    totalDesigns: 0,
    totalContacts: 0,
    totalQuotes: 0
  });

  const [recentData, setRecentData] = useState<RecentData>({
    designs: [],
    contacts: [],
    quotes: []
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/admin/stats');
        const data = await response.json();

        if (response.ok) {
          setStats(data.stats);
          setRecentData(data.recentData);
        } else {
          console.error('Failed to fetch data:', data.error);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="flex items-center justify-center h-full text-sm">Loading...</div>;
  }

  return (
    // <div className="w-full space-y-2 p-2 text-sm">
    <div className="w-full sm:w-[35%] md:w-[85%] lg:w-[85%] xl:w-[75%] space-y-2 p-2 text-sm">

      <h1 className="text-base font-semibold">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <Card className="p-2">
          <div className="text-xs text-gray-500">Total Designs</div>
          <div className="text-base font-bold">{stats.totalDesigns}</div>
        </Card>
        <Card className="p-2">
          <div className="text-xs text-gray-500">Total Contacts</div>
          <div className="text-base font-bold">{stats.totalContacts}</div>
        </Card>
        <Card className="p-2">
          <div className="text-xs text-gray-500">Total Quotes</div>
          <div className="text-base font-bold">{stats.totalQuotes}</div>
        </Card>
      </div>

      {/* Tables */}
      <div className="space-y-2">
        <Card className="p-2">
          <h2 className="text-sm font-semibold mb-1">Recent Designs</h2>
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <Table className="text-xs">
                <TableHeader>
                  <TableRow>
                    <TableHead>User ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Color</TableHead>
                    <TableHead>Cap</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentData.designs.map((design) => (
                    <TableRow key={design.userId}>
                      <TableCell>{design.userId}</TableCell>
                      <TableCell>{design.name}</TableCell>
                      <TableCell>{design.email || 'N/A'}</TableCell>
                      <TableCell>{design.phone || 'N/A'}</TableCell>
                      <TableCell>{design.bottleSize}</TableCell>
                      <TableCell>{design.bottleColor}</TableCell>
                      <TableCell>{design.capColor}</TableCell>
                      <TableCell>{design.status}</TableCell>
                      <TableCell>{new Date(design.createdAt).toLocaleDateString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </Card>

        <Card className="p-2">
          <h2 className="text-sm font-semibold mb-1">Recent Contacts</h2>
          <div className="overflow-x-auto">
            <div className="min-w-[900px]">
              <Table className="text-xs">
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentData.contacts.map((contact) => (
                    <TableRow key={`${contact.email}-${contact.createdAt}`}>
                      <TableCell>{contact.name}</TableCell>
                      <TableCell>{contact.email}</TableCell>
                      <TableCell>{contact.phone}</TableCell>
                      <TableCell>{contact.company}</TableCell>
                      <TableCell className="max-w-[200px] truncate">{contact.message}</TableCell>
                      <TableCell>{contact.status}</TableCell>
                      <TableCell>{new Date(contact.createdAt).toLocaleDateString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </Card>

        <Card className="p-2">
          <h2 className="text-sm font-semibold mb-1">Recent Quotes</h2>
          <div className="overflow-x-auto">
            <div className="min-w-[1200px]">
              <Table className="text-xs">
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Qty</TableHead>
                    <TableHead>Customization</TableHead>
                    <TableHead>Design Help</TableHead>
                    <TableHead>Deadline</TableHead>
                    <TableHead>Additional Info</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentData.quotes.map((quote) => (
                    <TableRow key={`${quote.email}-${quote.createdAt}`}>
                      <TableCell>{quote.name}</TableCell>
                      <TableCell>{quote.email}</TableCell>
                      <TableCell>{quote.phone}</TableCell>
                      <TableCell>{quote.company}</TableCell>
                      <TableCell>{quote.bottleSize}</TableCell>
                      <TableCell>{quote.quantity}</TableCell>
                      <TableCell className="max-w-[200px] truncate">
                        {Object.entries(quote.customization)
                          .filter(([_, value]) => value)
                          .map(([key]) => key.replace(/([A-Z])/g, ' $1').trim())
                          .join(', ')}
                      </TableCell>
                      <TableCell>{quote.designHelp ? 'Yes' : 'No'}</TableCell>
                      <TableCell>{new Date(quote.deadline).toLocaleDateString()}</TableCell>
                      <TableCell className="max-w-[200px] truncate">{quote.additionalInfo}</TableCell>
                      <TableCell>{quote.status}</TableCell>
                      <TableCell>{new Date(quote.createdAt).toLocaleDateString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
