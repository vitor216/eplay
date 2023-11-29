import Game from '../../models/Game'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ background, title, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((Game) => (
          <Product
            key={Game.id}
            category={Game.category}
            description={Game.description}
            image={Game.image}
            infos={Game.infos}
            system={Game.system}
            title={Game.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
