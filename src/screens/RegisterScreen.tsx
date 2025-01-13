import React, { useState } from 'react';
import { TextInput, Button, View } from 'react-native';
import { registerUser } from '../services/authService';

const RegisterScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const user = await registerUser(email, password);
    if (user) {
      navigation.navigate('LoginScreen');
    } else {
    //   alert('Registration failed')
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
