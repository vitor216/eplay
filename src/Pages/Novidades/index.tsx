import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import diablo from '../../assets/images/diablo.png'
import ghostrunner from '../../assets/images/Ghostrunner.png'
import spider1 from '../../assets/images/spiderman-males-morales.png'
import spider2 from '../../assets/images/Spider-Man-2.png'
import gta6 from '../../assets/images/GTAVI.png'
import injustice from '../../assets/images/injustice.png'
import madmax from '../../assets/images/mad_max.png.jpg'
import metro from '../../assets/images/Metro.png'

const novidade1: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Diablo é um jogo de computador estilo Action RPG, passado em época medieval fictícia. Produzido pela Blizzard North e distribuído pela Blizzard ...',
    title: 'Diablo® IV - Edição Padrão',
    system: 'PS5',
    infos: ['10%', 'R$ 349,90'],
    image: diablo
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'é um jogo hardcore do estilo "hack and slash" em primeira pessoa, com ação frenética, ambientado em uma megaestrutura cyberpunk sombria. Escale a Torre Dharma, o último abrigo da humanidade, após uma catástrofe que acabou com o mundo.',
    title: 'Ghostrunner - Ps5 Mídia Digital',
    system: 'PS4, PS5',
    infos: ['10%', 'R$ 39,90'],
    image: ghostrunner
  },
  {
    id: 3,
    category: 'Aventura',
    description:
      'Miles Morales descobre poderes incríveis e explosivos que o diferenciam de seu mentor, Peter Parker. Domine seus ataques Venom bioelétricos, poder de camuflagem, truques espetaculares com teia, além de dispositivos e habilidades.',
    title: 'Spider-Man: Miles Morales',
    system: 'PS4, PS5, Windows',
    infos: ['10%', 'R$ 285,63'],
    image: spider1
  },
  {
    id: 4,
    category: 'Aventura',
    description:
      'Os Spiders Peter Parker e Miles Morales vão testar a força que têm, com e sem a máscara, enquanto lutam para salvar a cidade, um ao outro e as pessoas que amam do monstruoso Venom e de uma perigosa e nova ameaça: os simbiontes.',
    title: 'Spider-Man 2',
    system: 'PS5, X-box, Windows',
    infos: ['10%', 'R$ 349,90'],
    image: spider2
  }
]

const novidade2: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'é um dos jogos mais aguardados da nova geração, mas até agora nenhuma informação oficial foi divulgada pela produtora Rockstar.',
    title: ' Grand Theft Auto VI',
    system: 'PS5',
    infos: ['10%', 'R$ 750,00'],
    image: gta6
  },
  {
    id: 6,
    category: 'Arcade',
    description:
      'apresenta uma nova série de jogos de luta da NetherRealm Studios, dos criadores de Mortal Kombat. Com ícones DC Comics como o Batman, Coringa, Lanterna Verde, Flash, Superman e Mulher-maravilha, o mais novo jogo desse estúdio premiado conta com uma história profunda e original.',
    title: 'Injustice: Gods Among Us Ultimate Edition',
    system: 'PS5, X-box, Windows',
    infos: ['10%', 'R$ 83,90'],
    image: injustice
  },
  {
    id: 7,
    category: 'Ação',
    description:
      'de volta ao mundo o Guerreiro das Estradas. Atormentado por seu passado turbulento, Max Rockatansky (Tom Hardy) acredita que a melhor forma de sobreviver é permanecer sozinho.',
    title: 'Mad Max',
    system: 'PS5',
    infos: ['10%', 'R$ 69,90'],
    image: madmax
  },
  {
    id: 8,
    category: 'Ação',
    description:
      'é um jogo eletrônico de tiro em primeira pessoa com elementos de survival horror e stealth. Situado no terreno baldio pós-apocalíptico da antiga Federação Russa, o jogador deve lidar com os novos perigos e se envolver em combate contra criaturas mutantes, assim como contra humanos hostis.',
    title: 'Metro Exodus',
    system: 'PS5',
    infos: ['10%', 'R$ 328,90'],
    image: metro
  }
]

const Novidades = () => (
  <>
    <ProductsList games={novidade1} title="Novidades" background="gray" />
    <ProductsList games={novidade2} title="Novidades" background="black" />
  </>
)

export default Novidades
