import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import { useEffect, useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../components/adapters/showMessage';
import { TaskActionsTypes } from '../../contexts/TaskContext/taskActions';

export function Settings() {
  useEffect(() => {
    document.title = 'Configurações - Chronos';
  }, []);

  const { state, dispatch } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortTimeInput = useRef<HTMLInputElement>(null);
  const longTimeInput = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();

    const formErrors: string[] = [];

    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortTimeInput.current?.value);
    const longBreakTime = Number(longTimeInput.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime))
      formErrors.push('Informe apenas números válidos.');

    if (workTime < 1 || workTime > 99)
      formErrors.push('O tempo de foco deve ser entre 1 e 99 minutos.');

    if (shortBreakTime < 1 || shortBreakTime > 30)
      formErrors.push('O descanso curto deve ser entre 1 e 30 minutos.');

    if (longBreakTime < 1 || longBreakTime > 60)
      formErrors.push('O descanso longo deve ser entre 1 e 60 minutos.');

    if (formErrors.length > 0) {
      formErrors.forEach(error => showMessage.error(error));
      return;
    }

    dispatch({
      type: TaskActionsTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });
    showMessage.succes('Configurações salvas.');
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p>Modifique suas tarefas!</p>
      </Container>

      <Container>
        <form
          onSubmit={handleSaveSettings}
          style={{ width: '100%', alignItems: 'center', textAlign: 'center' }}
          action=''
          className='form'
        >
          <div style={{ minWidth: '24rem' }} className='formRow'>
            <DefaultInput
              id='workTime'
              labelText='Foco'
              ref={workTimeInput}
              defaultValue={state.config.workTime}
              type='number'
              min='1'
              max='99'
            />
          </div>
          <div style={{ minWidth: '24rem' }} className='formRow'>
            <DefaultInput
              id='shortBreakTime'
              labelText='Descanso Curto'
              ref={shortTimeInput}
              defaultValue={state.config.shortBreakTime}
              type='number'
              min='1'
              max='30'
            />
          </div>
          <div style={{ minWidth: '24rem' }} className='formRow'>
            <DefaultInput
              id='longBreakTime'
              labelText='Descanso Longo'
              ref={longTimeInput}
              defaultValue={state.config.longBreakTime}
              type='number'
              min='1'
              max='99'
            />
          </div>
          <div style={{ minWidth: '24rem' }} className='formRow'>
            <DefaultButton
              icon={<SaveIcon />}
              aria-label='Salvar Configurações'
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
