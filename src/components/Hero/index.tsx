import BannerImg from '../../assets/images/fundo-hogwarts.svg'
import Button from '../Button'
import Tag from '../Tag'

import { Banner, Infos } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `Url(${BannerImg})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>

      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 250,00</span>
          Por R$ 190,99
        </p>
        <Button
          type="button"
          title="Clique aqui para adicionar este jogo ao carrinho"
          variant="Primary"
        >
          Adicionar ao Carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero
