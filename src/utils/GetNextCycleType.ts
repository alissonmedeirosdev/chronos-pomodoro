import type { TaskModel } from '../models/TaskModel';

export function getNextCycleType(currentCycle: number): TaskModel['type'] {
  if (currentCycle % 8 === 0) return 'longBreackTime';
  if (currentCycle % 2 === 0) return 'shotBreakTime';
  return 'workTime';
}
