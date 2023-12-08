import { useState, useEffect } from 'react'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discout?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const [Promocoes, setPromocoes] = useState<Game[]>([])
  const [EmBreve, setEmBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/promocoes`)
      .then((res) => res.json())
      .then((res) => setPromocoes(res))

    fetch(`https://fake-api-tau.vercel.app/api/eplay/em-breve`)
      .then((res) => res.json())
      .then((res) => setEmBreve(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList games={Promocoes} title="Destaques" background="gray" />
      <ProductsList games={EmBreve} title="Em breve" background="black" />
    </>
  )
}

export default Home
