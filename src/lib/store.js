import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, useStore } from 'react-redux'

export const makeStore = () => {
  return configureStore({
    reducer: {},
  })
}

export const useAppDispatch = useDispatch
export const useAppSelector = useSelector
export const useAppStore = useStore
