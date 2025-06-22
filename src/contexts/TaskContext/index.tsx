import { createContext, useContext, useState } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

type TaskContextProviderProps = {
  children: React.ReactNode;
};

const inicialState: TaskStateModel = {
  task: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '25:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shotBreakTime: 5,
    longBreackTime: 15,
  },
};

const initialContextValue = {
  state: inicialState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(inicialState);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
