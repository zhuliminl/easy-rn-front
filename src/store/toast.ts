import create from 'zustand'

interface State {
  title: string,
  isShow: boolean,
  showToast: (title: string) => void,
  closeToast: () => void,
}

export const useToast = create<State>((set) => ({
  title: '',
  isShow: false,
  showToast: (title) => {
    console.log('saul bb', title)
    set({ isShow: true, })
    set({ title, })
  },
  closeToast: () => {
    set({isShow: false,})
    set({title: ''})
  }
}))