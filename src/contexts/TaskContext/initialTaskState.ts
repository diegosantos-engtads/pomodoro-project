import { TaskStateModel } from '../../modules/TaskStateModel';

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondRemaining: 0,
  formatSecondRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 1,
    shortBreakTime: 1,
    longBreakTime: 1,
  },
};
