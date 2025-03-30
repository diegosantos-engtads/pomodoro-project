import { TaskStateModel } from '../../modules/TaskStateModel';

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondRemaining: 0,
  formatSecondRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};
