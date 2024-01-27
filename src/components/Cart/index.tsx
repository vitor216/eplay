import Button from '../Button'
import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Quantity,
  CartItem
} from './styles'
import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const CloseCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={CloseCart} />
      <Sidebar>
        <ul>
          {items.map((Item) => (
            <CartItem key={Item.id}>
              <img src={Item.media.thumbnail} alt={Item.name} />
              <div>
                <h3>{Item.name}</h3>
                <Tag>{Item.details.category}</Tag>
                <Tag>{Item.details.system}</Tag>
                <span>{formataPreco(Item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(Item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} Jogo(s) no Carrinho</Quantity>
        <Prices>
          Total de {formataPreco(getTotalPrice())}{' '}
          <span>Em até 6x sem juros</span>
        </Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
