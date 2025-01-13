import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Task } from '../types/Task';

interface TaskItemProps {
  task: Task;
  onUpdate: (updatedTask: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onUpdate }) => {
  const handleToggleCompleted = () => {
    const updatedTask = { ...task, completed: !task.completed };
    onUpdate(updatedTask);
  };

  const handleDelete = () => {
    onUpdate({ ...task, deleted: true }); // Mark task as deleted
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, task.completed && styles.completed]}>
        {task.title}
      </Text>
      <Text>{task.description}</Text>
      <Text>Due: {task.deadline}</Text>
      <Text>Priority: {task.priority}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title={task.completed ? 'Undo' : 'Complete'}
          onPress={handleToggleCompleted}
        />
        <Button title="Delete" color="red" onPress={handleDelete} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default TaskItem;
