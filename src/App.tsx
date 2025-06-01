import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  console.log('Olá Mundo!');

  return (
    <>
      <Heading />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        explicabo consectetur blanditiis minima deleniti quis doloribus. Cumque
        ipsam obcaecati commodi necessitatibus cupiditate, reiciendis, dolor
        minima esse quae, excepturi quisquam. Consequatur?
      </p>
    </>
  );
}

export default App;
