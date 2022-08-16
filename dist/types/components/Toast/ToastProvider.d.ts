import React from 'react';
import '@components/Toast/Toast.scss';
import { IToastCtx, IToastProvider } from '@components/Toast/Type';
export declare const ToastContext: React.Context<IToastCtx>;
export declare const ToastProvider: ({ className, style, children, }: IToastProvider) => JSX.Element;
export declare const useToast: () => {
    add: (toast: import("@components/Toast/Type").IAddToast) => void;
    remove: (toastId: string) => void;
    removeAll: () => void;
};
//# sourceMappingURL=ToastProvider.d.ts.map