import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Undo } from "lucide-react";

type EditDialogProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  oldName: string;
  editFavorite: (id: string, newName: string) => void;
  id: string;
  originalName: string;
};

const EditDialog = (props: EditDialogProps) => {
  const { open, setOpen, oldName, editFavorite, id, originalName } = props;
  const [newName, setNewName] = useState(oldName);

  const handleChangeOpen = (state: boolean) => {
    setNewName(oldName);
    setOpen(state);
  };

  return (
    <Dialog open={open} onOpenChange={handleChangeOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit station</DialogTitle>
          <DialogDescription>
            {`Make changes to your favorited radio here. Click save when you're done.`}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              if (newName !== oldName) {
                editFavorite(id, newName);
                handleChangeOpen(false);
              }
            }}
          >
            Save changes
          </Button>
          <Button
            title="Undo changes"
            size="icon"
            onClick={() => {
              setNewName(originalName);
            }}
          >
            <Undo className="size-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditDialog;
