'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

interface Order {
  _id: string;
  name: string;
  email: string;
  company: string;
  bottleSize: string;
  quantity: number;
  status: string;
  quoteId: string;
  orderId: string;
  createdAt: string;
  quoteDetails?: {
    customization: string;
    designHelp: boolean;
    deadline: string;
    additionalInfo: string;
    phone: string;
  };
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/admin/orders');
      if (!response.ok) throw new Error('Failed to fetch orders');
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to fetch orders');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/admin/orders/${orderId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) throw new Error('Failed to update order status');
      
      toast.success('Order status updated successfully');
      fetchOrders(); // Refresh orders list
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to update order status');
    }
  };

  const handleViewDetails = (order: Order) => {
    setSelectedOrder(order);
    setIsDetailsOpen(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-2 sm:p-4 lg:p-6">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Orders</CardTitle>
          <CardDescription>Manage all orders here</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative overflow-x-auto">
            <div className="min-w-full overflow-hidden overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="whitespace-nowrap">Order ID</TableHead>
                    <TableHead className="whitespace-nowrap">Name</TableHead>
                    <TableHead className="whitespace-nowrap hidden sm:table-cell">Company</TableHead>
                    <TableHead className="whitespace-nowrap hidden md:table-cell">Bottle Size</TableHead>
                    <TableHead className="whitespace-nowrap hidden md:table-cell">Quantity</TableHead>
                    <TableHead className="whitespace-nowrap">Status</TableHead>
                    <TableHead className="whitespace-nowrap">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order._id}>
                      <TableCell className="whitespace-nowrap">{order.orderId}</TableCell>
                      <TableCell className="whitespace-nowrap">{order.name}</TableCell>
                      <TableCell className="whitespace-nowrap hidden sm:table-cell">{order.company}</TableCell>
                      <TableCell className="whitespace-nowrap hidden md:table-cell">{order.bottleSize}</TableCell>
                      <TableCell className="whitespace-nowrap hidden md:table-cell">{order.quantity}</TableCell>
                      <TableCell className="whitespace-nowrap">
                        <Select
                          value={order.status}
                          onValueChange={(value) => handleStatusChange(order._id, value)}
                        >
                          <SelectTrigger className="w-[140px] sm:w-[180px]">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="processing">Processing</SelectItem>
                            <SelectItem value="shipped">Shipped</SelectItem>
                            <SelectItem value="delivered">Delivered</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleViewDetails(order)}
                          className="whitespace-nowrap"
                        >
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Order Details</DialogTitle>
          </DialogHeader>
          {selectedOrder && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-3 sm:grid-cols-4 items-center gap-4">
                <Label className="text-right col-span-1">Order ID</Label>
                <div className="col-span-2 sm:col-span-3">{selectedOrder.orderId}</div>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 items-center gap-4">
                <Label className="text-right col-span-1">Name</Label>
                <div className="col-span-2 sm:col-span-3">{selectedOrder.name}</div>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 items-center gap-4">
                <Label className="text-right col-span-1">Email</Label>
                <div className="col-span-2 sm:col-span-3 break-words">{selectedOrder.email}</div>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 items-center gap-4">
                <Label className="text-right col-span-1">Phone</Label>
                <div className="col-span-2 sm:col-span-3">{selectedOrder.quoteDetails?.phone}</div>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 items-center gap-4">
                <Label className="text-right col-span-1">Company</Label>
                <div className="col-span-2 sm:col-span-3">{selectedOrder.company}</div>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 items-center gap-4">
                <Label className="text-right col-span-1">Bottle Size</Label>
                <div className="col-span-2 sm:col-span-3">{selectedOrder.bottleSize}</div>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 items-center gap-4">
                <Label className="text-right col-span-1">Quantity</Label>
                <div className="col-span-2 sm:col-span-3">{selectedOrder.quantity}</div>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 items-center gap-4">
                <Label className="text-right col-span-1">Status</Label>
                <div className="col-span-2 sm:col-span-3">{selectedOrder.status}</div>
              </div>
              {selectedOrder.quoteDetails && (
                <>
                  <div className="grid grid-cols-3 sm:grid-cols-4 items-center gap-4">
                    <Label className="text-right col-span-1">Customization</Label>
                    <div className="col-span-2 sm:col-span-3 break-words">{selectedOrder.quoteDetails.customization}</div>
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 items-center gap-4">
                    <Label className="text-right col-span-1">Design Help</Label>
                    <div className="col-span-2 sm:col-span-3">{selectedOrder.quoteDetails.designHelp ? 'Yes' : 'No'}</div>
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 items-center gap-4">
                    <Label className="text-right col-span-1">Deadline</Label>
                    <div className="col-span-2 sm:col-span-3">
                      {new Date(selectedOrder.quoteDetails.deadline).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 items-center gap-4">
                    <Label className="text-right col-span-1">Additional Info</Label>
                    <div className="col-span-2 sm:col-span-3 break-words">{selectedOrder.quoteDetails.additionalInfo}</div>
                  </div>
                </>
              )}
            </div>
          )}
          <DialogFooter>
            <Button variant="secondary" onClick={() => setIsDetailsOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 