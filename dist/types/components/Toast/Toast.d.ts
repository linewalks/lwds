import { IToast } from '@components/Toast/Type';
declare const Toast: {
    ({ className, toastId, callbackMessage, duration, message, type, style, onRemove, callback, }: IToast): JSX.Element;
    defaultProps: {
        callbackMessage: string;
        duration: number;
        type: string;
    };
};
export default Toast;
//# sourceMappingURL=Toast.d.ts.map