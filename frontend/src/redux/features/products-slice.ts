import { Product } from '@/app/interfaces/Product'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type InitialState = {
  value: Product[]
}

const initialState: InitialState = {
  value: [{
    name: "",
    price: null,
    rate: null,
    image: ''
  }]
}

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    
  }
})