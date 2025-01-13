import React, { useState, useEffect } from 'react';
import { FlatList, Button, View } from 'react-native';
import { getTasks } from '../services/taskService';
import { Task } from '../types/Task'
import TaskItem from '../components/TaskItem'
import TaskForm from '../components/TaskForm';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const handleAddTask = () => {
    setIsFormVisible(true);
  };

  const handleSaveTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
    setIsFormVisible(false);
  };

  const handleUpdateTask = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };
  

  return (
    <View>
      {isFormVisible ? (
        <TaskForm onSave={handleSaveTask} />
      ) : (
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <TaskItem task={item} onUpdate={handleUpdateTask} />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

export default TaskList;
