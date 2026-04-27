import { SifirlamaOnayModali } from "../screens/SifirlamaOnayModali";

interface ConfirmDialogProps {
  count: number;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmDialog(props: ConfirmDialogProps) {
  return <SifirlamaOnayModali {...props} />;
}
