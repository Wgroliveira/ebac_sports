import { Provider } from 'react-redux'
import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { favoritarProduto } from './store/reducers/carrinho'
import store, { RootState } from './store'
import Header from './components/Header'
import { GlobalStyle } from './styles'
import ProdutosComponent from './components/Produto'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootState) => state.carrinho.favoritos)

  const { data: produtos = [] } = useQuery('produtos', async () => {
    const response = await fetch(
      'https://fake-api-tau.vercel.app/api/ebac_sports'
    )
    return response.json()
  })

  function handleFavoritar(produto: Produto) {
    dispatch(favoritarProduto(produto))
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} />
        <ProdutosComponent produtos={produtos} favoritar={handleFavoritar} />
      </div>
    </Provider>
  )
}

export default App
