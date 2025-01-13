import { Task } from '../types/Task';

export const getTasks = (): Task[] => {
  return JSON.parse(localStorage.getItem('tasks') || '[]');
};

export const saveTask = (task: Task) => {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const updateTask = (taskId: string, updatedTask: Task) => {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex] = updatedTask;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};

export const deleteTask = (taskId: string) => {
  const tasks = getTasks().filter((task) => task.id !== taskId);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
