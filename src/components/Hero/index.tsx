import { Game } from '../../Pages/Home'
import Button from '../Button'
import Tag from '../Tag'

import { formataPreco } from '../ProductsList'

import { Banner, Infos } from './styles'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()
  const AddToCart = () => {
    dispatch(add(game))
    dispatch(open()) // esse comando faz com que toda ves que o usuario for incluir um produto ao carrinho abra a janela do carrinho, se ele for retirado, o usuario tera que clicar no carrino para visualizar//
  }

  return (
    <Banner style={{ backgroundImage: `Url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>

        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discout && (
              <span>De {formataPreco(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>Por {formataPreco(game.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              title="Clique aqui para adicionar este jogo ao carrinho"
              variant="Primary"
              onClick={AddToCart}
            >
              Adicionar ao Carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
