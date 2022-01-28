import { ReactNode } from 'react';
import { toast } from 'react-toastify';

const error = (message: string|ReactNode) => {
  toast.error(message, { className: 'toastnotification--error' });
};

export default error;
