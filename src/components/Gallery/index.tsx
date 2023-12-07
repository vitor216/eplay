import Section from '../Section'
import { Item, Items, Action, Modal, ModalContent } from './styles'

import hogwartsimg1 from '../../assets/images/hogwartsimg1.svg'
import hogwartsimg2 from '../../assets/images/Hogwarts.png'
import hogwartsimg3 from '../../assets/images/hogwartsimg3.png'
import hogwartsimg4 from '../../assets/images/hogwartsimg4.png'
import hogwartsimg5 from '../../assets/images/Hogwarts1.png'
import PlayImg from '../../assets/images/botao-play.svg'
import ZoomImg from '../../assets/images/mais-zoom.svg'
import Fechar from '../../assets/images/close 1.svg'

type GalleryItem = {
  type: 'imagem' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'imagem',
    url: hogwartsimg1
  },
  {
    type: 'imagem',
    url: hogwartsimg2
  },
  {
    type: 'imagem',
    url: hogwartsimg3
  },
  {
    type: 'imagem',
    url: hogwartsimg4
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/mG_cB5oJ440?si=RczCrsL8B2cyL2H7'
  }
]

type Props = {
  defautCover: string
  name: string
}

const Gallery = ({ defautCover, name }: Props) => {
  const getMidiaCover = (item: GalleryItem) => {
    if (item.type === 'imagem') return item.url
    return defautCover
  }

  const getMidiaIcon = (item: GalleryItem) => {
    if (item.type === 'imagem') return ZoomImg
    return PlayImg
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((midia, index) => (
            <Item key={midia.url}>
              <img
                src={getMidiaCover(midia)}
                alt={`Midia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMidiaIcon(midia)}
                  alt="Clique para maximizar a midia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={Fechar} alt="icone de fechar" />
          </header>
          <img src={hogwartsimg5} />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}
export default Gallery
