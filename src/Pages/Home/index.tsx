import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import avatar from '../../assets/images/Avatar.png'
import battlefield from '../../assets/images/Battlefield.png'
import cavalheiros from '../../assets/images/Cavalheiros.png'
import starwars from '../../assets/images/star_wars.png'
import streetfighter from '../../assets/images/Street_Fighter_6.png'
import thewitcher from '../../assets/images/the-witcher-3.png'
import mario01 from '../../assets/images/Mario01.png'

const Promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 - Remake',
    system: 'windows, PS4, PS5, X-Box',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Aventura',
    description:
      'Descobre as maravilhas épicas da Fronteira Ocidental, um continente de Pandora nunca antes visto. Viaja através das suas regiões belas e imprevisíveis em mundo aberto onde baixar as defesas pode ser um erro fatal.',
    title: 'Avatar: Frontiers of Pandora',
    system: 'PS5, X-Box',
    infos: ['10%', 'R$ 350,00'],
    image: avatar
  },
  {
    id: 3,
    category: 'Arcade',
    description:
      'Em Street Fighter 6, jogadores poderão testar suas habilidades no mundo inteiro em busca de sua força pessoal.',
    title: 'Street Fighter™ 6',
    system: 'PS4, PS5,',
    infos: ['10%', 'R$ 279,50'],
    image: streetfighter
  },
  {
    id: 4,
    category: 'RPG',
    description:
      'Treinado desde criança e com habilidades, força e reflexos a um nível sobrehumano, os witchers são a única defesa da humanidade contra um mundo infestado por monstros. Destrói criaturas horríveis na pele de um caçador de monstros armado com várias armas melhoráveis, poções de mutações e magia de combate.',
    title: 'The Witcher 3: Wild Hunt',
    system: 'PS5, X-box, Windows',
    infos: ['10%', 'R$ 207,90'],
    image: thewitcher
  }
]

const EmBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'em battlefield hardline, os jogadores assumem o papel de nick mendoza, um detetive de miami que está determinado a acabar com a corrupção policial e o tráfico de drogas.',
    title: 'Battlefield™ Hardline Edição Standard',
    system: 'windows, PS4, PS5, X-Box',
    infos: ['10%', 'R$ 79,90'],
    image: battlefield
  },
  {
    id: 6,
    category: 'Aventura',
    description:
      'Descobre as maravilhas épicas da Fronteira Ocidental, um continente de Pandora nunca antes visto. Viaja através das suas regiões belas e imprevisíveis em mundo aberto onde baixar as defesas pode ser um erro fatal.',
    title: 'Saint Seiya: Soldiers',
    system: ',PS4,PS5, X-Box',
    infos: ['10%', 'R$ 159,99'],
    image: cavalheiros
  },
  {
    id: 7,
    category: 'Arcade',
    description:
      'Super Mario Bros.™ Wonder: Encante-se com a evolução fenomenal da diversão com o Mario A jogabilidade clássica de deslocamento lateral dos jogos do Mario virou de cabeça para baixo com a chegada das flores fenomenais.',
    title: 'Super Mario Bros. Wonder - Nintendo Switch',
    system: 'Nintendo',
    infos: ['10%', 'R$ 348,89'],
    image: mario01
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Jedi: Survivor expande as histórias, os mundos e os personagens icônicos de STAR WARS enquanto traz o combate eletrizante visto pela primeira vez em Jedi: Fallen Order.',
    title: 'Star Wars Jedi: Survivor',
    system: 'PS5, X-box, Windows',
    infos: ['10%', 'R$ 323,00'],
    image: starwars
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={Promocoes} title="Promoções" background="gray" />
    <ProductsList games={EmBreve} title="Em breve" background="black" />
  </>
)

export default Home
