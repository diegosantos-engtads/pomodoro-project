import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { Tips } from '../Tips';
import { TaskModel } from '../../modules/TaskModel';
import { TaskActionsTypes } from '../../contexts/TaskContext/taskActions';
import { showMessage } from '../adapters/showMessage';

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || '';

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showMessage.dismiss();

    if (!taskNameInput.current) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      showMessage.warn('Digite uma tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionsTypes.START_TASK, payload: newTask });
    showMessage.info('Tarefa Iniciada');
  }

  function handleInterruptedTask() {
    showMessage.dismiss();
    showMessage.error('Tarefa Interrompida');
    dispatch({ type: TaskActionsTypes.INTERRUPT_TASK });
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form container'>
      <div className='formRow'>
        <DefaultInput
          labelText='Task'
          id='input'
          type='text'
          placeholder='Digite sua tarefa...'
          ref={taskNameInput}
          disabled={Boolean(state.activeTask)}
          defaultValue={lastTaskName}
        />
      </div>

      <div className='formRow'>
        <p>
          <Tips />
        </p>
      </div>

      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}

      <div className='formRow'>
        {!state.activeTask ? (
          <DefaultButton
            aria-label='Iniciar nova tarefa'
            title='Iniciar nova tarefa'
            type='submit'
            icon={<PlayCircleIcon />}
            key='btn-play'
          />
        ) : (
          <DefaultButton
            aria-label='Parar tarefa atual'
            title='Parar tarefa atual'
            type='button'
            color='red'
            icon={<StopCircleIcon />}
            onClick={handleInterruptedTask}
            key='btn-stop'
          />
        )}
      </div>
    </form>
  );
}
