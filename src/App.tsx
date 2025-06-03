import { Container } from './components/Container';
import { Logo } from './components/Logo';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <div className='container-fluid'>
        <Container>
          <Logo />
        </Container>
      </div>
    </>
  );
}

export default App;
