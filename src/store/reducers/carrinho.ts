// store/reducers/carrinhoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

interface CarrinhoState {
  itens: Produto[]
  favoritos: Produto[]
}

const initialState: CarrinhoState = {
  itens: [],
  favoritos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (!state.itens.find((p) => p.id === produto.id)) {
        state.itens.push(produto)
      }
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      const id = action.payload
      state.itens = state.itens.filter((p) => p.id !== id)
    },
    favoritarProduto: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.favoritos.find((p) => p.id === produto.id)) {
        state.favoritos = state.favoritos.filter((p) => p.id !== produto.id)
      } else {
        state.favoritos.push(produto)
      }
    }
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho, favoritarProduto } =
  carrinhoSlice.actions

export default carrinhoSlice.reducer
