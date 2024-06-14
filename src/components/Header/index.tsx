import { Link } from 'react-router-dom'
import {
  HeaderBar,
  Links,
  LinkItem,
  CartButton,
  Hamburguer,
  HeaderRow,
  NavMobile
} from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const OpenCart = () => {
    dispatch(open())
  }
  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link
                  title="clique aqui para acessar a página de categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </LinkItem>
              <LinkItem>
                <Link
                  title="clique aqui para acessar a página de novidades"
                  to="/Novidades"
                >
                  Novidades
                </Link>
              </LinkItem>
              <LinkItem>
                <Link
                  title="clique aqui para acessar a página de promoções"
                  to="/Promocoes"
                >
                  Promoções
                </Link>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <CartButton onClick={OpenCart}>
          {items.length} <span>- produto(s)</span>
          <img src={carrinho} alt="Carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link
              title="clique aqui para acessar a página de categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </LinkItem>
          <LinkItem>
            <Link
              title="clique aqui para acessar a página de novidades"
              to="/Novidades"
              onClick={() => setIsMenuOpen(false)}
            >
              Novidades
            </Link>
          </LinkItem>
          <LinkItem>
            <Link
              title="clique aqui para acessar a página de promoções"
              to="/Promocoes"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </Link>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
