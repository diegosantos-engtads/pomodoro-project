import { TaskModel } from '../modules/TaskModel';

export function getNextCycleType(currentCycle: number): TaskModel['type'] {
  if (currentCycle % 8 === 0) return 'longBreakTime';
  else if (currentCycle % 2 === 0) return 'shortBreakTime';
  return 'workTime';
}
