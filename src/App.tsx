import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';

export function App() {
  return (
    <>
      <div className='container-fluid'>
        <Container>
          <section>LOGO</section>
        </Container>
      </div>
    </>
  );
}

export default App;
