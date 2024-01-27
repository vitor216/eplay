import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link to="/categories#action">Ação</Link>
          </li>
        </Links>
        <Links>
          <li>
            <Link to="/categories#fight">Lutas</Link>
          </li>
        </Links>
        <Links>
          <li>
            <Link to="/categories#fight2">Lutas2</Link>
          </li>
        </Links>
        <Links>
          <li>
            <Link to="/categories#rpg">RPG</Link>
          </li>
        </Links>
        <Links>
          <li>
            <Link to="/categories#sports">Esportes</Link>
          </li>
        </Links>
        <Links>
          <li>
            <Link to="/categories#simulation">Simulação</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link to="#">Novidades</Link>
          </li>
        </Links>
        <Links>
          <li>
            <Link to="/#on-sale">Promoções</Link>
          </li>
        </Links>
        <Links>
          <li>
            <Link to="/#coming-soon">Em brve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; EPLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
