export type AlertColor = "success" | "info" | "warning" | "error";

export interface IAlertSuccess {
  open: boolean;
  onClose: () => void;
  type: AlertColor;
  message: string;
}
