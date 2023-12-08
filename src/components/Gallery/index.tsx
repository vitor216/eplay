import { useState } from 'react'
import Section from '../Section'
import { Item, Items, Action, Modal, ModalContent } from './styles'

import hogwartsimg1 from '../../assets/images/hogwartsimg1.png'
import hogwartsimg2 from '../../assets/images/hogwartsimg2.png'
import hogwartsimg3 from '../../assets/images/hogwartsimg3.png'
import hogwartsimg4 from '../../assets/images/hogwartsimg4.png'
import hogwartsimg5 from '../../assets/images/hogwartsimg5.png'
import hogwartsimg6 from '../../assets/images/hogwartsimg6.png'
import hogwartsimg7 from '../../assets/images/Hogwarts1.png'
import PlayImg from '../../assets/images/botao-play.svg'
import ZoomImg from '../../assets/images/mais-zoom.svg'
import Fechar from '../../assets/images/close 1.svg'

interface GalleryItem {
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
    type: 'imagem',
    url: hogwartsimg5
  },
  {
    type: 'imagem',
    url: hogwartsimg6
  },
  {
    type: 'imagem',
    url: hogwartsimg7
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/1O6Qstncpnc?si=B-qeNiRpR_BmtcCN'
  }
]

type Props = {
  defaultCover: string
  name: string
}

interface ModalState extends GalleryItem {
  EstaVisivel: boolean
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [Modall, setModall] = useState<ModalState>({
    EstaVisivel: false,
    type: 'imagem',
    url: ''
  })

  const getMidiaCover = (item: GalleryItem) => {
    if (item.type === 'imagem') return item.url
    return defaultCover
  }

  const getMidiaIcon = (item: GalleryItem) => {
    if (item.type === 'imagem') return ZoomImg
    return PlayImg
  }

  const closeModal = () => {
    setModall({
      EstaVisivel: false,
      type: 'imagem',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((midia, index) => (
            <Item
              key={midia.url}
              onClick={() => {
                setModall({
                  EstaVisivel: true,
                  type: midia.type,
                  url: midia.url
                })
              }}
            >
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
      <Modal className={Modall.EstaVisivel ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={Fechar}
              alt="icone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {Modall.type === 'imagem' ? (
            <img src={Modall.url} />
          ) : (
            <iframe frameBorder={0} src={Modall.url} />
          )}
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}
export default Gallery
