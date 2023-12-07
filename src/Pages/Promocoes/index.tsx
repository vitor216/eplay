import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import godofwar from '../../assets/images/god-of-war-ragnarok.png'
import red from '../../assets/images/Red.png'
import zelda from '../../assets/images/zelda.png'
import hogwarts from '../../assets/images/Hogwarts.png'
import CallofDuty from '../../assets/images/CallofDuty.png'
import Tekken from '../../assets/images/Tekken.png'
import final from '../../assets/images/final.png'
import NHL from '../../assets/images/NHL.npg.jpg'

const Promocoes1: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'O Fimbulwinter já começou. Kratos e Atreus devem viajar pelos Nove Reinos em busca de respostas enquanto as forças asgardianas se preparam para uma batalha profetizada que causará o fim do mundo. Nessa jornada, eles explorarão paisagens míticas impressionantes e enfrentarão inimigos aterradores: deuses nórdicos e monstros.',
    title: 'God of War Ragnarök',
    system: 'PS4, PS5',
    infos: ['10%', 'R$ 250,00'],
    image: godofwar
  },
  {
    id: 2,
    category: 'Aventura',
    description:
      'Nesta continuação de The Legend of Zelda: Breath of the Wild, você decidirá seu próprio caminho pelas extensas paisagens de Hyrule e pelas misteriosas ilhas flutuantes nos vastos céus. Será que você conseguirá aproveitar o poder das novas habilidades de Link para lutar contra as forças malévolas que ameaçam o reino?',
    title: 'The Legend of Zelda',
    system: 'PS5, X-Box',
    infos: ['10%', 'R$ 350,00'],
    image: zelda
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'a icônica história de terror que transforma o mundo de Red Dead Redemption em uma guerra apocalíptica por sobrevivência contra uma horda de zumbis. Red Dead Redemption é um clássico do gênero faroeste que oferece uma experiência de jogo única e envolvente.',
    title: 'Red Dead Redemption',
    system: 'PS4, PS5,',
    infos: ['10%', 'R$ 279,50'],
    image: red
  },
  {
    id: 4,
    category: 'RPG',
    description:
      'Hogwarts Legacy é um RPG de ação e mundo aberto ambientado no mundo apresentado nos livros de Harry Potter. Agora você pode assumir o controle da ação e criar sua própria aventura.',
    title: 'Hogwarts Legacy Deluxe Edition',
    system: 'PS5',
    infos: ['10%', 'R$ 479,90'],
    image: hogwarts
  }
]

const Promocoes2: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'Call of Duty volta com uma campanha inédita, versões modernizadas dos mapas clássicos do modo multijogador e uma experiência JxA com zumbis em mundo aberto.',
    title: 'Call of Duty: Modern Warfare III',
    system: 'PS5',
    infos: ['10%', 'R$ 690,90'],
    image: CallofDuty
  },
  {
    id: 6,
    category: 'Aventura',
    description:
      'Usando o poder e realismo da Unreal Engine 5, Tekken 8 leva os jogos de luta a um novo nível, aproveitando toda a potência da nova geração de consoles.',
    title: 'Tekken 8',
    system: 'PS4,PS5',
    infos: ['10%', 'R$ 3499,99'],
    image: Tekken
  },
  {
    id: 7,
    category: 'Arcade',
    description:
      'Final Fantasy VII Rebirth é o segundo lançamento do projeto de remake de Final Fantasy VII, que reconta em três jogos distintos a história do RPG que redefiniu o gênero.',
    title: 'Final Fantasy VII Rebirth',
    system: 'PS5',
    infos: ['10%', 'R$ 349,90'],
    image: final
  },
  {
    id: 8,
    category: 'Esporte',
    description:
      'Os novos recursos de jogabilidade do EA SPORTS™ NHL 24 dão vida a uma ação autêntica no gelo. Sinta a emoção e a fadiga de um jogo de alta pressão com o mecanismo de exaustão. A pressão constante na zona de ataque leva a novos efeitos que mudam o jogo, como a fadiga de goleiros, que retarda o tempo de reação do defensor da rede de acordo com a ação ofensiva adversária.',
    title: 'NHL 24',
    system: 'PS5',
    infos: ['10%', 'R$ 323,00'],
    image: NHL
  }
]

const Promocoes = () => (
  <>
    <ProductsList games={Promocoes1} title="Promocoes" background="gray" />
    <ProductsList games={Promocoes2} title="Promocoes" background="black" />
  </>
)

export default Promocoes
