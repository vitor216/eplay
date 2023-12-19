import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../Pages/Home'

type CartState = {
  items: Game[]
}

const initialState: CartState = {
  items: []
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = CartSlice.actions
export default CartSlice.reducer
