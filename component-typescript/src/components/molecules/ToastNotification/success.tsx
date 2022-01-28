import { ReactNode } from 'react';
import { toast } from 'react-toastify';

const success = (message: string|ReactNode) => {
  toast.success(message, { className: 'toastnotification--success' });
};

export default success;
