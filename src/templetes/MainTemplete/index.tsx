import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';

type MainTempleteProps = {
  children: React.ReactNode;
};

export function MainTemplete({ children }: MainTempleteProps) {
  return (
    <>
      <div className='container-fluid'>
        <Container>
          <Logo />
        </Container>

        <Container>
          <Menu />
        </Container>

        {children}

        <Container>
          <Footer />
        </Container>
      </div>
    </>
  );
}
