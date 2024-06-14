import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link
              title="clique aqui para acessar jogos de ação"
              to="/categories#action"
            >
              Ação
            </Link>
          </li>
        </Links>
        <Links>
          <li>
            <Link
              title="clique aqui para acessar jogos de lutas"
              to="/categories#fight"
            >
              Lutas
            </Link>
          </li>
        </Links>
        <Links>
          <li>
            <Link
              title="clique aqui para acessar jogos de lutas2"
              to="/categories#fight2"
            >
              Lutas2
            </Link>
          </li>
        </Links>
        <Links>
          <li>
            <Link
              title="clique aqui para acessar jogos de Rpg"
              to="/categories#rpg"
            >
              RPG
            </Link>
          </li>
        </Links>
        <Links>
          <li>
            <Link
              title="clique aqui para acessar jogos de esportes"
              to="/categories#sports"
            >
              Esportes
            </Link>
          </li>
        </Links>
        <Links>
          <li>
            <Link
              title="clique aqui para acessar jogos de simulação"
              to="/categories#simulation"
            >
              Simulação
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link title="clique aqui para acessar a seção de novidades" to="#">
              Novidades
            </Link>
          </li>
        </Links>
        <Links>
          <li>
            <Link
              title="clique aqui para acessar a seção de Promoções"
              to="/#on-sale"
            >
              Promoções
            </Link>
          </li>
        </Links>
        <Links>
          <li>
            <Link
              title="clique aqui para acessar a seção de em breve"
              to="/#coming-soon"
            >
              Em brve
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; EPLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
