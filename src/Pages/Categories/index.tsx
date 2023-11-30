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
import mortal from '../../assets/images/Mortal.png'
import mario02 from '../../assets/images/Mario02.png'
import mario03 from '../../assets/images/Mario03.png'
import avengers from '../../assets/images/Avengers.png'
import avengers2 from '../../assets/images/Avengers2.png'
import batman01 from '../../assets/images/batman01.png'
import gotham from '../../assets/images/gotham_knights.png'
import need from '../../assets/images/Need.png'
import bomba from '../../assets/images/SuperBombaPatch2024.png'
import NBA from '../../assets/images/NBA.png'
import MXGP from '../../assets/images/MXGP.png'
import shadow from '../../assets/images/shadow.png'
import Frostpunk from '../../assets/images/Frostpunk.png'
import Civilization from '../../assets/images/Civilization.png'
import Desperados from '../../assets/images/Desperados.png'
import outriders from '../../assets/images/Outriders.png'

const Acao: Game[] = [
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
    category: 'Ação',
    description:
      'em battlefield hardline, os jogadores assumem o papel de nick mendoza, um detetive de miami que está determinado a acabar com a corrupção policial e o tráfico de drogas.',
    title: 'Battlefield™ Hardline Edição Standard',
    system: 'windows, PS4, PS5, X-Box',
    infos: ['10%', 'R$ 79,90'],
    image: battlefield
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Em Street Fighter 6, jogadores poderão testar suas habilidades no mundo inteiro em busca de sua força pessoal.',
    title: 'Mortal Kombat 1',
    system: 'PS5',
    infos: ['10%', 'R$ 285,63'],
    image: mortal
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Outriders vai contar a história de um futuro alternativo no qual a sociedade esgota os recursos da Terra e se vê obrigada a emigrar para outro planeta habitável. Uma guerra sangrenta marca a despedida da humanidade do nosso planeta, e os traumas ainda estão vivos quando os colonizadores chegaram em sua nova casa, Enoch.',
    title: 'Outriders',
    system: 'PS5, X-box, Windows',
    infos: ['10%', 'R$ 107,45'],
    image: outriders
  }
]

const Arcade: Game[] = [
  {
    id: 5,
    category: 'Arcade',
    description:
      'Em Street Fighter 6, jogadores poderão testar suas habilidades no mundo inteiro em busca de sua força pessoal.',
    title: 'Street Fighter™ 6',
    system: 'PS4, PS5',
    infos: ['10%', 'R$ 279,50'],
    image: streetfighter
  },
  {
    id: 6,
    category: 'Arcade',
    description:
      'é um jogo de ação e aventura desenvolvido pela Next Level Games e publicado pela Nintendo para o Nintendo Switch. É a sequencia de Luigi Mansion: Dark Moon e a terceira parcela da série Luigi´s Mansion, e foi lançado mundialmente em 31 de outubro de 2019.',
    title: 'Luigi Mansion 3 - Nintendo Switch',
    system: 'Nintendo',
    infos: ['10%', 'R$ 289,89'],
    image: mario03
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
    category: 'Arcade',
    description:
      ' estrelado pelo encanador italiano mais conhecido em todo o mundo, e novamente parte em busca de uma grande aventura almejando salvar a Princesa Peach do temível Bowser.',
    title: 'Super Mario Odyssey - Nintendo Switch',
    system: 'Nintendo',
    infos: ['10%', 'R$ 350,00'],
    image: mario02
  }
]

const RPG: Game[] = [
  {
    id: 9,
    category: 'RPG',
    description:
      'Jedi: Survivor expande as histórias, os mundos e os personagens icônicos de STAR WARS enquanto traz o combate eletrizante visto pela primeira vez em Jedi: Fallen Order.',
    title: 'Star Wars Jedi: Survivor',
    system: 'PS5, X-box, Windows',
    infos: ['10%', 'R$ 323,00'],
    image: starwars
  },
  {
    id: 10,
    category: 'RPG',
    description:
      'Treinado desde criança e com habilidades, força e reflexos a um nível sobrehumano, os witchers são a única defesa da humanidade contra um mundo infestado por monstros. Destrói criaturas horríveis na pele de um caçador de monstros armado com várias armas melhoráveis, poções de mutações e magia de combate.',
    title: 'The Witcher 3: Wild Hunt',
    system: 'PS5, X-box, Windows',
    infos: ['10%', 'R$ 207,90'],
    image: thewitcher
  },
  {
    id: 11,
    category: 'RPG',
    description:
      'Monte sua equipe com os heróis mais poderosos da Terra, incorpore seus poderes e viva seus sonhos de super-herói. Marvel Avengers é um jogo épico de ação e aventura em terceira pessoa que combina uma história original cinematográfica com jogabilidade individual e cooperativa.',
    title: 'Marvel Avengers',
    system: 'PS4, PS5',
    infos: ['10%', 'R$ 104,90'],
    image: avengers
  },
  {
    id: 12,
    category: 'RPG',
    description:
      'Viva um enredo original e eletrizante inspirado em mais de 50 anos de história dos Guardiões da Galáxia. As opções de diálogo entre o Quill e os Guardiões ajudam a fortalecer os lanços nesta família desestruturada.',
    title: 'Marvel Guardians Of The Galaxy',
    system: 'PS5',
    infos: ['10%', 'R$ 259,89'],
    image: avengers2
  }
]

const Aventura: Game[] = [
  {
    id: 13,
    category: 'Aventura',
    description:
      'Descobre as maravilhas épicas da Fronteira Ocidental, um continente de Pandora nunca antes visto. Viaja através das suas regiões belas e imprevisíveis em mundo aberto onde baixar as defesas pode ser um erro fatal.',
    title: 'Avatar: Frontiers of Pandora',
    system: 'PS5, X-Box',
    infos: ['10%', 'R$ 350,00'],
    image: avatar
  },
  {
    id: 14,
    category: 'Aventura',
    description:
      'Descobre as maravilhas épicas da Fronteira Ocidental, um continente de Pandora nunca antes visto. Viaja através das suas regiões belas e imprevisíveis em mundo aberto onde baixar as defesas pode ser um erro fatal.',
    title: 'Saint Seiya: Soldiers',
    system: 'PS4,PS5, X-Box',
    infos: ['10%', 'R$ 159,99'],
    image: cavalheiros
  },
  {
    id: 15,
    category: 'Aventura',
    description:
      'traz as versões definitivas da trilogia Arkham da Rocksteady em uma edição completa, incluindo todos os conteúdos pós-lançamento. Jogue dois dos títulos mais aclamados da última geração - Batman: Arkham Asylum e Batman: Arkham City, com visuais totalmente remasterizados e atualizados.',
    title: 'Batman: Arkham Collection',
    system: 'PS5',
    infos: ['10%', 'R$ 145,90'],
    image: batman01
  },
  {
    id: 16,
    category: 'Aventura',
    description:
      'ambientado na Gotham City mais dinâmica e interativa de todos os tempos. Tanto no jogo solo quanto com outro herói, patrulhe os cinco distritos de Gotham e vigie atividades criminosas onde quer que as encontre.',
    title: 'Gotham Knights BR - Standard Edition',
    system: 'PS5',
    infos: ['10%', 'R$ 273,30'],
    image: gotham
  }
]

const Esportes: Game[] = [
  {
    id: 17,
    category: 'Esportes',
    description:
      'é um jogo de corrida arcade que possui vários modos de jogo, como o Sprint, que tem como objetivo chegar em primeiro no final do circuito, ou o Time trial, que tem como objetivo chegar a determinados pontos antes que o tempo acabe.',
    title: 'Need For Speed',
    system: 'PS4, PS5',
    infos: ['10%', 'R$ 88,90'],
    image: need
  },
  {
    id: 18,
    category: 'Esportes',
    description:
      'Jogue as melhores ligas e campeonatos de futebol de todos os paises, com os melhores jogadores.',
    title: 'super bomba patch 2024',
    system: 'PS4,PS5, X-Box',
    infos: ['10%', 'R$ 59,99'],
    image: bomba
  },
  {
    id: 19,
    category: 'Esportes',
    description:
      'No NBA 2K24, os jogadores podem desfrutar de uma ação pura e autêntica, com opções de personalização ilimitadas para o seu MyPLAYER em MyCAREER. Além disso, a jogabilidade é mais responsiva e os visuais são mais polidos, permitindo que você jogue com suas equipes favoritas da NBA e WNBA em PLAY NOW.',
    title: 'NBA 2K24 - PlayStation 5',
    system: 'PS5',
    infos: ['10%', 'R$ 263,99'],
    image: NBA
  },
  {
    id: 20,
    category: 'Esportes',
    description:
      'Toda a potência do Motocross em suas mãos: o novo MXGP 2021 finalmente chegou! O jogo oficial da MXGP está pronto para mostrar do que é capaz: aqueça seus motores e prepare-se para a experiência em duas rodas mais realista e empolgante que há!',
    title: 'MXGP 2021 - The Official Motocross',
    system: 'PS4, PS5',
    infos: ['10%', 'R$ 73,30'],
    image: MXGP
  }
]

const Estrategia: Game[] = [
  {
    id: 21,
    category: 'Estrategia',
    description:
      'A furtividade é a arma mais mortal de um ninja, e para avançar no mundo do Japão feudal você precisará de habilidades afiadas para derrotar um lorde guerreiro impiedoso.',
    title: 'Shadow Tactics: Blades of the Shogun',
    system: 'PS5',
    infos: ['10%', 'R$ 195,90'],
    image: shadow
  },
  {
    id: 22,
    category: 'Estrategia',
    description:
      'Um complexo desafio estratégico e um enredo opulento que te levam até à revolução industrial do século XIX virada do avesso: Frostpunk conta a história do misterioso congelamento do planeta Terra, que levou ao fim da civilização que conhecemos e forçou a humanidade a adaptar-se a condições extremas. Enquanto líder do que pode ser a última sociedade civilizada na Terra, terás de construir a cidade onde moram os sobreviventes, descobrir novas tecnologias, explorar desertos de gelo e, principalmente, gerir e governar a sociedade, preparando-a para a vida num mundo impiedoso.',
    title: 'Frostpunk: Console Edition',
    system: 'PS5, X-Box',
    infos: ['10%', 'R$ 159,99'],
    image: Frostpunk
  },
  {
    id: 23,
    category: 'Estrategia',
    description:
      'uma das mais aclamadas e influentes séries na história dos jogos de estratégia. Escolhe um de vários líderes e segue agendas inspiradas pelas suas personalidades reais. Explora novos territórios, desenvolve tecnologia e enfrenta líderes históricos enquanto lideras a tua civilização ao longo das eras. As cidades expandem-se fisicamente pelo mapa, criando novas possibilidades estratégicas no jogo enquanto tentas alcançar uma das várias condições de vitória e construir um império que resista ao passar do tempo.',
    title: 'Sid Meier Civilization® VI Platinum Edition',
    system: 'PS5',
    infos: ['10%', 'R$ 264,99'],
    image: Civilization
  },
  {
    id: 24,
    category: 'Estrategia',
    description:
      'Nesta aguardada pré-sequência do adorado clássico Desperados: Wanted Dead or Alive, John Cooper une forças com a noiva fugitiva Kate, o matador misterioso Doc McCoy, o caçador gigante Hector e Isabelle, uma dama enigmática de Nova Orleans. Em sua jornada por redenção, as aventuras de Cooper e seu grupo os levarão a cidades rurais, pântanos, margens de rios e, finalmente, a um confronto dramático digno de lendas do faroeste.',
    title: 'Desperados III',
    system: 'PS5, X-box',
    infos: ['10%', 'R$ 184,30'],
    image: Desperados
  }
]

const Categories = () => (
  <>
    <ProductsList games={Acao} title="Ações" background="gray" />
    <ProductsList games={Arcade} title="Arcade" background="black" />
    <ProductsList games={RPG} title="RPG" background="gray" />
    <ProductsList games={Aventura} title="Aventura" background="black" />
    <ProductsList games={Esportes} title="Esportes" background="gray" />
    <ProductsList games={Estrategia} title="Estratégia" background="black" />
  </>
)

export default Categories
