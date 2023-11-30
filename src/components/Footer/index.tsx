import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link>Ação</Link>
          </li>
        </Links>
        <Links>
          <li>
            <Link>Aventuta</Link>
          </li>
        </Links>
        <Links>
          <li>
            <Link>Arcade</Link>
          </li>
        </Links>
        <Links>
          <li>
            <Link>RPG</Link>
          </li>
        </Links>
        <Links>
          <li>
            <Link>Esportes</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link>Novidades</Link>
          </li>
        </Links>
        <Links>
          <li>
            <Link>Promoções</Link>
          </li>
        </Links>
        <Links>
          <li>
            <Link>Em brve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; EPLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
