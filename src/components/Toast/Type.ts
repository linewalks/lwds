export interface IAddToast {
  className?: string
  toastId?: string
  callbackMessage?: string
  duration?: number
  message: string | React.ReactNode
  type?: 'success' | 'fail'
  style?: object
  callback?: () => void
}

export interface IToast extends IAddToast {
  onRemove: (toastId: string) => void
}

export interface IToastCtx {
  addToast: (toast: IAddToast) => void
  removeToast: (toastId: string) => void
  removeAllToast: () => void
}

export interface IToastProvider {
  className?: string
  style?: object
  children: React.ReactNode
}

export interface IToastBox {
  duration: number
}
