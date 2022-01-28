
import ToastNotification from 'components/molecules/ToastNotification';

const useToastNotification = () => ({
  successNotification: (message: string) => {
    ToastNotification.success(message.split(/(?:<br\/>|<br>|<\/br>|<br \/>)/g).join('\n'));
  },
  errorNotification: (message: string) => {
    ToastNotification.error(message.split(/(?:<br\/>|<br>|<\/br>|<br \/>)/g).join('\n'));
  },
});

export default useToastNotification;
