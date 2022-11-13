import React from "react";

export interface ModalInterface {
  show: boolean;
  title?: string;
  content: React.ReactElement | string;
  saveShow?: boolean;
  closeShow?: boolean;
  confirmShow?: boolean;
  confirmText?: string;
  cancelShow?: boolean;
  cancelText?: React.ReactElement | string;
}
