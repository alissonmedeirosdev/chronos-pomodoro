import { SaveAllIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templetes/MainTemplate';
import { useRef } from 'react';

/*

  Para pegar um valor enviado de um formulário para um userRef, vocẽ coloca
  no input o ref={}

*/

export function Settings() {
  const workTimeInput = useRef<HTMLInputElement | null>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement | null>(null);
  const longBreakTimeInput = useRef<HTMLInputElement | null>(null);

  function handleSaveSattings(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const worktime = workTimeInput.current?.value;
    const shortBreakTime = shortBreakTimeInput.current?.value;
    const longBreakTime = longBreakTimeInput.current?.value;

    console.log(worktime, shortBreakTime, longBreakTime);
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
            <DefaultInput id='worktime' labelText='Foco' ref={workTimeInput} />
          </div>

          <div className='formRow'>
            <DefaultInput
              id='shortBreakTime'
              labelText='Descanso curto'
              ref={shortBreakTimeInput}
            />
          </div>

          <div className='formRow'>
            <DefaultInput
              id='longBreakTime'
              labelText='Descanso longo'
              ref={longBreakTimeInput}
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
