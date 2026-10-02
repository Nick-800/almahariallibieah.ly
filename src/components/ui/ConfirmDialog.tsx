import React from "react";
import { Dialog } from "./Dialog";
import { Button } from "./Button";
import { Warning2 } from "iconsax-reactjs";

export interface ConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  danger?: boolean;
  loading?: boolean;
}

export function ConfirmDialog({
  open,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = "تأكيد",
  cancelText = "إلغاء",
  danger = false,
  loading = false,
}: ConfirmDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      title={
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#262626] border border-[#D3D3D3]/20 flex items-center justify-center text-[#F2F2F2]">
            <Warning2 size="20" variant="Bold" />
          </div>
          <span>{title}</span>
        </div>
      }
      description={description}
      footer={
        <>
          <Button variant="ghost" size="sm" onClick={onClose} disabled={loading}>
            {cancelText}
          </Button>
          <Button
            variant={danger ? "danger" : "primary"}
            size="sm"
            onClick={onConfirm}
            loading={loading}
          >
            {confirmText}
          </Button>
        </>
      }
    >
      <div />
    </Dialog>
  );
}
