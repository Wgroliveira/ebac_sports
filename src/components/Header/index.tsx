import React from 'react'
import { Produto } from '../../App' // Certifique-se de importar a interface Produto corretamente
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import * as S from './styles'

interface HeaderProps {
  favoritos: Produto[]
}

const Header: React.FC<HeaderProps> = ({ favoritos }) => {
  const carrinho = useSelector((state: RootState) => state.carrinho.itens)

  const valorTotal = carrinho.reduce((acc: number, item: Produto) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Cesta de compras" />
        <span>
          {carrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
