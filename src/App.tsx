import './styles/theme.css';
import './styles/global.css';
import { Home } from './pages/Home';
import type { TaskStateModel } from './models/TaskStateModel';
import { useState } from 'react';

const inicialState: TaskStateModel = {
  task: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shotBreakTime: 5,
    longBreackTime: 15,
  },
};

export function App() {
  const [state, setState] = useState(inicialState);

  return <Home state={state} setState={setState} />;
}
