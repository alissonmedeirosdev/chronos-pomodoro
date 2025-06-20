import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import { MainTemplete } from '../../templetes/MainTemplate';

export function Home() {
  return (
    <MainTemplete>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplete>
  );
}
