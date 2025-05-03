import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle } from "lucide-react"

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  userInfo: {
    name: string;
    email?: string;
    phone?: string;
  };
  designDetails: {
    bottleColor: string;
    capColor: string;
    labelText: string;
    bottleSize: string;
  };
}

export function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  userInfo,
  designDetails
}: ConfirmationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            Confirm Your Design
          </DialogTitle>
          <DialogDescription>
            Please review your details before proceeding to quote
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <h4 className="font-medium">Your Information</h4>
            <div className="text-sm space-y-1">
              <p><span className="font-medium">Name:</span> {userInfo.name}</p>
              {userInfo.email && <p><span className="font-medium">Email:</span> {userInfo.email}</p>}
              {userInfo.phone && <p><span className="font-medium">Phone:</span> {userInfo.phone}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Design Details</h4>
            <div className="text-sm space-y-1">
              <p><span className="font-medium">Bottle Size:</span> {designDetails.bottleSize}</p>
              <p><span className="font-medium">Label Text:</span> {designDetails.labelText}</p>
              <p><span className="font-medium">Bottle Color:</span> {designDetails.bottleColor.split('-')[1]}</p>
              <p><span className="font-medium">Cap Color:</span> {designDetails.capColor.split('-')[1]}</p>
            </div>
          </div>
        </div>

        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={onClose}>
            <XCircle className="mr-2 h-4 w-4" />
            Cancel
          </Button>
          <Button onClick={onConfirm}>
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Confirm & Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
} 