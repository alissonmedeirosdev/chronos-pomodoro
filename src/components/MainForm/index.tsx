import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function MainForm() {
  const { state } = useTaskContext();

  return (
    <form className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          id='meuInput'
          type='text'
          labelText='task:'
          placeholder='Digite algo'
        />
      </div>

      <div className='formRow'>
        <p>Nesse ciclo descance por {state.config.longBreackTime} min.</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
