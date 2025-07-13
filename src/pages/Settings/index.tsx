import { SaveAllIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templetes/MainTemplate';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../adapters/showMessage';

/*

  Para pegar um valor enviado de um formulário para um userRef, vocẽ coloca
  no input o ref={}

  E para inputs que o valor não é controlado não é value e sim defaultValue

*/

export function Settings() {
  const { state } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement | null>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement | null>(null);
  const longBreakTimeInput = useRef<HTMLInputElement | null>(null);

  function handleSaveSattings(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    showMessage.dismiss();

    const formErrors: string[] = [];
    const worktime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    if (isNaN(worktime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push('Digite apenas números para TODOS os campos');
    }

    if (worktime < 1 || worktime > 99) {
      formErrors.push('Digite valores entre 1 a 99 para foco');
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push('Digite valores entre 1 a 30 para descanso curto');
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push('Digite valores entre 1 a 60 para descanso longo');
    }

    if (formErrors.length > 0) {
      formErrors.forEach(error => {
        showMessage.error(error);
      });
      return;
    }
    console.log('SALVAR');
  }

  return (
    <MainTemplate>
      <Heading>Configurações</Heading>

      <Container>
        <p style={{ textAlign: 'center' }}>
          Modifique as Configurações para tempo de foco, descanso curto e
          descanso longo.
        </p>
      </Container>

      <Container>
        <form onSubmit={handleSaveSattings} action='' className='form'>
          <div className='formRow'>
            <DefaultInput
              id='worktime'
              labelText='Foco'
              ref={workTimeInput}
              defaultValue={state.config.workTime}
              type='number'
            />
          </div>

          <div className='formRow'>
            <DefaultInput
              id='shortBreakTime'
              labelText='Descanso curto'
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreakTime}
              type='number'
            />
          </div>

          <div className='formRow'>
            <DefaultInput
              id='longBreakTime'
              labelText='Descanso longo'
              ref={longBreakTimeInput}
              defaultValue={state.config.longBreakTime}
              type='number'
            />
          </div>

          <div className='formRow'>
            <DefaultButton
              icon={<SaveAllIcon />}
              aria-label='Salvar configurações'
              title='Salvar configurações'
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
