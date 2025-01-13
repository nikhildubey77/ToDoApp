import React, { useState } from 'react';
import { TextInput, Button, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Task } from '../types/Task';
import { saveTask } from '../services/taskService';

interface TaskFormProps {
  onSave: (task: Task) => void;
  existingTask?: Task;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSave, existingTask }) => {
  const [title, setTitle] = useState(existingTask?.title || '');
  const [description, setDescription] = useState(existingTask?.description || '');
  const [dateTime, setDateTime] = useState(existingTask?.dateTime || '');
  const [deadline, setDeadline] = useState(existingTask?.deadline || '');
  const [priority, setPriority] = useState(existingTask?.priority || 'low');

  const handleSave = () => {
    const newTask: Task = {
      id: existingTask?.id || Date.now().toString(),
      title,
      description,
      dateTime,
      deadline,
      priority,
      completed: false,
    };
    saveTask(newTask);
    onSave(newTask);  // Notify parent component about the saved task
  };

  return (
    <View>
      <TextInput
        placeholder="Task Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Task Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        placeholder="Date and Time"
        value={dateTime}
        onChangeText={setDateTime}
      />
      <TextInput
        placeholder="Deadline"
        value={deadline}
        onChangeText={setDeadline}
      />
      <Picker
        selectedValue={priority}
        onValueChange={(itemValue) => setPriority(itemValue)}
      >
        <Picker.Item label="Low" value="low" />
        <Picker.Item label="Medium" value="medium" />
        <Picker.Item label="High" value="high" />
      </Picker>
      <Button title="Save Task" onPress={handleSave} />
    </View>
  );
};

export default TaskForm;
