import { TaskModel } from '../../modules/TaskModel';
import { TaskStateModel } from '../../modules/TaskStateModel';

export enum TaskActionsTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
  COUNT_DOWN = 'COUNT_DOWN',
  COMPLETE_TASK = 'COMPLETE_TASK',
  CHANGE_SETTINGS = 'COMPLETE_SETTINGS',
}

export type TaskActionsWithPayload =
  | {
      type: TaskActionsTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionsTypes.COUNT_DOWN;
      payload: { secondRemaining: number };
    }
  | {
      type: TaskActionsTypes.CHANGE_SETTINGS;
      payload: TaskStateModel['config'];
    }
  | {
      type: TaskActionsTypes.INTERRUPT_TASK;
    };

export type TaskActionsWithoutPayload =
  | {
      type: TaskActionsTypes.RESET_STATE;
    }
  | {
      type: TaskActionsTypes.COMPLETE_TASK;
    };

export type TaskActionModel =
  | TaskActionsWithPayload
  | TaskActionsWithoutPayload;
