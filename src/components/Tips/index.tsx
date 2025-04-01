import React from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { CycleType } from '../../types';

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType: CycleType = getNextCycleType(nextCycle);

  const tipsForWhenActiveTask: Record<CycleType, JSX.Element> = {
    workTime: <span>Foque por: {state.config.workTime}min</span>,
    shortBreakTime: <span>Descanse por: {state.config.shortBreakTime}min</span>,
    longBreakTime: (
      <span>Descanso longo de: {state.config.longBreakTime}min</span>
    ),
  };

  const tipsForNoActiveTask: Record<CycleType, JSX.Element> = {
    workTime: <span>Iniciar Task de {state.config.workTime}min</span>,
    shortBreakTime: (
      <span>Próximo ciclo é de: {state.config.shortBreakTime}min</span>
    ),
    longBreakTime: (
      <span>Descanso longo será de: {state.config.longBreakTime}min</span>
    ),
  };

  return (
    <>
      {state.activeTask
        ? tipsForWhenActiveTask[state.activeTask.type as CycleType]
        : tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
