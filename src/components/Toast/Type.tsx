export interface IToast {
  className?: string
  toastId?: string
  duration?: number
  message: string | React.ReactNode
  type?: 'success' | 'fail'
  style?: object
  callback?: () => void
}

export interface IToastCtx {
  addToast: (toast: IToast) => void
  removeToast: (id: string) => void
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
