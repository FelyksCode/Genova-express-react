import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const Modal = ({ open, onClose, title, content }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <h2 className="text-center font-bold text-2xl mb-4">{title}</h2>
        {content}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
