import { Link } from 'react-router-dom'
import { HeaderBar, Links, LinkItem, CartButton } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const OpenCart = () => {
    dispatch(open())
  }
  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/Novidades">Novidades</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/Promocoes">Promoções</Link>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <CartButton onClick={OpenCart}>
        {items.length} - produto(s)
        <img src={carrinho} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
