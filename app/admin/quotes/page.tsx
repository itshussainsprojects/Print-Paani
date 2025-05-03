'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

interface Quote {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  bottleSize: string;
  quantity: number;
  price: number;
  customization: string[];
  designHelp: string;
  deadline: string;
  additionalInfo: string;
  status: 'pending' | 'approved' | 'completed' | 'rejected';
  createdAt: string;
}

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await fetch('/api/admin/quotes');
      const data = await response.json();
      setQuotes(data);
    } catch (error) {
      console.error('Error fetching quotes:', error);
      toast.error('Failed to fetch quotes');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (quoteId: string, status: Quote['status']) => {
    try {
      const response = await fetch(`/api/admin/quotes/${quoteId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        toast.success('Quote status updated successfully');
        fetchQuotes();
      } else {
        throw new Error('Failed to update quote status');
      }
    } catch (error) {
      console.error('Error updating quote:', error);
      toast.error('Failed to update quote status');
    }
  };

  const handleDelete = async (quoteId: string) => {
    if (!confirm('Are you sure you want to delete this quote?')) return;

    try {
      const response = await fetch(`/api/admin/quotes/${quoteId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast.success('Quote deleted successfully');
        fetchQuotes();
      } else {
        throw new Error('Failed to delete quote');
      }
    } catch (error) {
      console.error('Error deleting quote:', error);
      toast.error('Failed to delete quote');
    }
  };

  const handleUpdateQuote = async (quoteId: string, updatedData: Partial<Quote>) => {
    try {
      const response = await fetch(`/api/admin/quotes/${quoteId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        toast.success('Quote updated successfully');
        fetchQuotes();
        setIsEditMode(false);
        setIsDialogOpen(false);
      } else {
        throw new Error('Failed to update quote');
      }
    } catch (error) {
      console.error('Error updating quote:', error);
      toast.error('Failed to update quote');
    }
  };

  const handleViewDetails = (quote: Quote) => {
    setSelectedQuote(quote);
    setIsDialogOpen(true);
    setIsEditMode(false);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  if (loading) {
    return <div className="flex items-center justify-center h-full">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Quotes Management</h1>
      </div>

      <Card className="p-6">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Bottle Size</TableHead>
                <TableHead>Quantity</TableHead>
                {/* <TableHead>Price (Rs)</TableHead> */}
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quotes.map((quote) => (
                <TableRow key={quote._id}>
                  <TableCell>{quote.name}</TableCell>
                  <TableCell>{quote.email}</TableCell>
                  <TableCell>{quote.company}</TableCell>
                  <TableCell>{quote.bottleSize}</TableCell>
                  <TableCell>{quote.quantity}</TableCell>
                  {/* <TableCell>{formatPrice(quote.price || 0)}</TableCell> */}
                  <TableCell>
                    <Select
                      value={quote.status}
                      onValueChange={(value: Quote['status']) => handleUpdateStatus(quote._id, value)}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleViewDetails(quote)}
                    >
                      View
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(quote._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{isEditMode ? 'Edit Quote' : 'Quote Details'}</DialogTitle>
          </DialogHeader>
          {selectedQuote && (
            <div className="space-y-4">
              {isEditMode ? (
                <form onSubmit={(e) => {
                  e.preventDefault();
                  handleUpdateQuote(selectedQuote._id, selectedQuote);
                }} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={selectedQuote.name}
                        onChange={(e) => setSelectedQuote({ ...selectedQuote, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        value={selectedQuote.email}
                        onChange={(e) => setSelectedQuote({ ...selectedQuote, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={selectedQuote.phone}
                        onChange={(e) => setSelectedQuote({ ...selectedQuote, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={selectedQuote.company}
                        onChange={(e) => setSelectedQuote({ ...selectedQuote, company: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bottleSize">Bottle Size</Label>
                      <Select
                        value={selectedQuote.bottleSize}
                        onValueChange={(value) => setSelectedQuote({ ...selectedQuote, bottleSize: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select bottle size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="500ml">500ml</SelectItem>
                          <SelectItem value="1000ml">1000ml</SelectItem>
                          <SelectItem value="1500ml">1500ml</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input
                        id="quantity"
                        type="number"
                        min="100"
                        value={selectedQuote.quantity}
                        onChange={(e) => setSelectedQuote({ ...selectedQuote, quantity: parseInt(e.target.value) })}
                      />
                    </div>
                    {/* <div className="space-y-2">
                      <Label htmlFor="price">Price</Label>
                      <Input
                        id="price"
                        type="number"
                        value={selectedQuote.price}
                        onChange={(e) => setSelectedQuote({ ...selectedQuote, price: parseInt(e.target.value) })}
                      />
                    </div> */}
                    <div className="space-y-2">
                      <Label htmlFor="deadline">Deadline</Label>
                      <Input
                        id="deadline"
                        type="date"
                        value={selectedQuote.deadline.split('T')[0]}
                        onChange={(e) => setSelectedQuote({ ...selectedQuote, deadline: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo">Additional Info</Label>
                    <Input
                      id="additionalInfo"
                      value={selectedQuote.additionalInfo}
                      onChange={(e) => setSelectedQuote({ ...selectedQuote, additionalInfo: e.target.value })}
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button type="button" variant="outline" onClick={() => setIsEditMode(false)}>Cancel</Button>
                    <Button type="submit">Save Changes</Button>
                  </div>
                </form>
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Name</Label>
                      <p>{selectedQuote.name}</p>
                    </div>
                    <div>
                      <Label>Email</Label>
                      <p>{selectedQuote.email}</p>
                    </div>
                    <div>
                      <Label>Phone</Label>
                      <p>{selectedQuote.phone}</p>
                    </div>
                    <div>
                      <Label>Company</Label>
                      <p>{selectedQuote.company}</p>
                    </div>
                    <div>
                      <Label>Bottle Size</Label>
                      <p>{selectedQuote.bottleSize}</p>
                    </div>
                    <div>
                      <Label>Quantity</Label>
                      <p>{selectedQuote.quantity}</p>
                    </div>
                    {/* <div>
                      <Label>Price</Label>
                      <p>{formatPrice(selectedQuote.price || 0)}</p>
                    </div> */}
                    <div>
                      <Label>Status</Label>
                      <p className="capitalize">{selectedQuote.status}</p>
                    </div>
                  </div>
                  <div>
                    <Label>Customization</Label>
                    <div className="flex flex-wrap gap-2">
                      {selectedQuote.customization.map((item, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label>Design Help</Label>
                    <p>{selectedQuote.designHelp}</p>
                  </div>
                  <div>
                    <Label>Deadline</Label>
                    <p>{new Date(selectedQuote.deadline).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <Label>Additional Info</Label>
                    <p>{selectedQuote.additionalInfo}</p>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button onClick={() => setIsEditMode(true)}>Edit</Button>
                  </div>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}