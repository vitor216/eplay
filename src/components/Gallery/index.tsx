import { useState } from 'react'
import { GalleryItem } from '../../Pages/Home'
import { Item, Items, Action, Modal, ModalContent } from './styles'

import Section from '../Section'
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

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: hogwartsimg1
  },
  {
    type: 'image',
    url: hogwartsimg2
  },
  {
    type: 'image',
    url: hogwartsimg3
  },
  {
    type: 'image',
    url: hogwartsimg4
  },
  {
    type: 'image',
    url: hogwartsimg5
  },
  {
    type: 'image',
    url: hogwartsimg6
  },
  {
    type: 'image',
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
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return ZoomImg
    return PlayImg
  }

  const closeModal = () => {
    setModall({
      EstaVisivel: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModall({
                  EstaVisivel: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
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
          {Modall.type === 'image' ? (
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
