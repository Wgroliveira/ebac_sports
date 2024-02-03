import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import * as S from './styles'

export interface Produto {
  id: number
  nome: string
  preco: number
  imagem: string
}

type Props = {
  produtos: Produto[]
  favoritos: ProdutoType[]
  favoritar: (produto: Produto) => void
}

const ProdutosComponent = ({ produtos, favoritos, favoritar }: Props) => {
  const produtoEstaNosFavoritos = (produtos: ProdutoType) => {
    const produtoId = produtos.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={favoritar}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
