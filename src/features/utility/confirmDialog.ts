export const confirmDialog: ConfirmDialog = ({
  message,
  callback,
  disabled,
}) => {
  if (disabled) {
    callback();

    return;
  }

  if (confirm(message)) {
    callback();
  }
};

type ConfirmDialog = (props: {
  message: string;
  callback: () => void;
  disabled?: boolean;
}) => void;
