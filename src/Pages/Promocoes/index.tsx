import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'

import { Game } from '../Home'

const Promocoes = () => {
  const [GamesAcao, setGamesAcao] = useState<Game[]>([])
  const [GamesRPG, setGamesRPG] = useState<Game[]>([])
  const [Gamessimulacao, setGamessimulacao] = useState<Game[]>([])
  const [GamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [Gamesluta, setGamesluta] = useState<Game[]>([])
  const [Gamesluta2, setGamesluta2] = useState<Game[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/acao`)
      .then((res) => res.json())
      .then((res) => setGamesAcao(res))

    fetch(`https://fake-api-tau.vercel.app/api/eplay/rpg`)
      .then((res) => res.json())
      .then((res) => setGamesRPG(res))

    fetch(`https://fake-api-tau.vercel.app/api/eplay/simulacao`)
      .then((res) => res.json())
      .then((res) => setGamessimulacao(res))

    fetch(`https://fake-api-tau.vercel.app/api/eplay/esportes`)
      .then((res) => res.json())
      .then((res) => setGamesEsportes(res))

    fetch(`https://fake-api-tau.vercel.app/api/eplay/luta`)
      .then((res) => res.json())
      .then((res) => setGamesluta(res))

    fetch(`https://fake-api-tau.vercel.app/api/eplay/luta`)
      .then((res) => res.json())
      .then((res) => setGamesluta2(res))
  }, [])
  return (
    <>
      <ProductsList games={GamesAcao} title="Ação" background="gray" />
      <ProductsList games={GamesRPG} title="RPG" background="black" />
      <ProductsList
        games={Gamessimulacao}
        title="Simulaççao"
        background="gray"
      />
      <ProductsList games={GamesEsportes} title="Esportes" background="black" />
      <ProductsList games={Gamesluta} title="Lutas" background="gray" />
      <ProductsList games={Gamesluta2} title="Lutas2" background="black" />
    </>
  )
}

export default Promocoes
