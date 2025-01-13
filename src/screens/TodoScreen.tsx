import React, { useState, useEffect } from 'react';
import { FlatList, Button, View } from 'react-native';
import { getTasks, saveTask, updateTask, deleteTask } from '../services/taskService';
import { Task } from '../types/Task';
import TaskItem from '../components/TaskItem';

const TodoScreen = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // Fetch tasks from the service and set the state
    setTasks(getTasks());
  }, []);

  // Function to handle updating a task
  const handleUpdateTask = (updatedTask: Task) => {
    // Update the task in the state
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );

    // Optionally, update the task in your persistent storage
    // updateTask(updatedTask);
  };

  const handleAddTask = () => {
    // Logic for adding a task (e.g., open a form or navigate to a new screen)
  };

  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem task={item} onUpdate={handleUpdateTask} />
        )}
        keyExtractor={(item) => item.id}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

export default TodoScreen;
