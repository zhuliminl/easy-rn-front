import create from 'zustand'

interface State {
  title: string,
  isShow: boolean,
  showToast: (title: string) => void,
  closeToast: () => void,
}


const useToastStore = create<State>((set, get) => ({
  title: '',
  isShow: false,
  showToast: (title) => {
    set({ isShow: true, })
    set({ title, })
    setTimeout(() => {
      get().closeToast()
    }, 1500);
  },
  closeToast: () => {
    set({ isShow: false, })
    set({ title: '' })
  }
}))

export const useToastIsShow = () => {
  return useToastStore(state => state.isShow)
}
export const useShowToast = () => {
  return useToastStore(state => state.showToast)
}
export const useCloseToast = () => {
  return useToastStore(state => state.closeToast)
}
export const useToastTitle = () => {
  return useToastStore(state => state.title)
}