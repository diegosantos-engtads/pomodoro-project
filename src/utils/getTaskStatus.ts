import { TaskModel } from '../modules/TaskModel';

export function getTaskStatus(task: TaskModel, activeTask: TaskModel | null) {
  if (task.completeDate) return 'Completa';
  if (task.interruptDate) return 'Imperrompida';
  if (task.id === activeTask?.id) return 'Em progresso';
  return 'Abandonada';
}
