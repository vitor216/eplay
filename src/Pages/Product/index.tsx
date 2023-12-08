import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import { useEffect, useState } from 'react'
import { Game } from '../Home'
const Product = () => {
  const { id } = useParams()

  const [Game, setGame] = useState<Game>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [id])

  if (!Game) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero game={Game} />
      <Section title="Sobre o Jogo" background="black">
        <p>{Game.description}</p>
      </Section>
      <Section title="Mais Detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {Game.details.system}
          <br />
          <b>Desenvolvedor:</b> {Game.details.developer}
          <br />
          <b>Editora:</b> {Game.details.publisher} <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {Game.details.languages.join(', ')}
          <br />
          As opções de áudio e legendas podem ser ajustadas nas configurações do
          jogo.
        </p>
      </Section>
      <Gallery
        name={Game.name}
        defaultCover={Game.media.cover}
        items={Game.media.gallery}
      />
    </>
  )
}

export default Product
