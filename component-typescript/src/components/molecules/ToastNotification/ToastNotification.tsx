import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import success from './success';
import error from './error';

/**
 * ToastContainerのWrapper
 *  ※ APPでのみ使用する
 */
const ToastContainerWrapper: React.FC & {
  success: typeof success;
  error: typeof error;
} = () => (
  <ToastContainer
    position="top-center"
    style={{ whiteSpace: 'pre-line', width: 'auto' }}
  />
);

/**
 * ToastNotificationの表示
 */
ToastContainerWrapper.success = success;
ToastContainerWrapper.error = error;

export default ToastContainerWrapper;
