export interface Task {
    id: string;
    title: string;
    description: string;
    dateTime: string;
    deadline: string;
    priority: 'low' | 'medium' | 'high';
    completed: boolean;
    deleted?: boolean;  // Optional, if you handle deletion like this
  }
  