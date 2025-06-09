import { Container } from '../../components/Container';
import { MainTemplete } from '../../templetes/MainTemplete';

export function NotFound() {
  return (
    <MainTemplete>
      <Container>
        <p>Página não encontrada</p>
      </Container>
    </MainTemplete>
  );
}
