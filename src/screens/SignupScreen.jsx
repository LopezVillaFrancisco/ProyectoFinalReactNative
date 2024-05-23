import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import InputForm from '../components/InputForm'; 
import SubmitButton from '../components/SubmitButton';
import { useDispatch } from 'react-redux';
import { useSignUpMutation } from '../services/authService';
import { setUser } from '../Features/User/userSlice';
import { signUpSchema } from '../validations/authSchema';

const SignupScreen =  () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState("");
  const [ errorMail, setErrorMail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [triggerSignUp, result ] = useSignUpMutation();

  useEffect(() => {
    if(result.isSuccess){ 
      dispatch(
        setUser({
          email: result.data.email,
          idToken:result.data.idToken, 
          localId: result.data.localId
        })
      )
    }
  },[result])

  const onSubmit = () => {  
    try{ 
      setErrorConfirmPassword('')
      setErrorMail('') 
      setErrorPassword('')
      const validation = signUpSchema.validateSync({ email, password, confirmPassword})  
      triggerSignUp({ email, password });
    }catch(err) {
      switch(err.path) {
        case 'email': 
        setErrorMail(err.message);
        break;
        case 'password': 
        setErrorPassword(err.message);
        break;
        case 'confirmPassword': 
        setErrorConfirmPassword(err.message);
        break;
        default:
          break;
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
      <InputForm 
        placeholder="you@example.com"
        onChange={setEmail}
        error={errorMail} 
        label={'Email'}
      />
      <InputForm
        placeholder="********"
        onChange={setPassword}
        label={'Contraseña'} 
        error={errorPassword}
      />
      <InputForm
        placeholder="********"
        onChange={setConfirmPassword}
        secureTextEntry={true}
        label={'Confirmar contraseña'} 
        error={errorConfirmPassword}
      />
      <SubmitButton
        onPress={onSubmit}
        title="Sign up"
      />
      <Text style={styles.signupText}>¿Ya tienes una cuenta?</Text>
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signupLink}>Log In</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20,
    backgroundColor: 'white', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  signupText: {
    textAlign: 'center',
    marginTop: 10,
  },
  signupLink: {
    textAlign: 'center',
    color: 'blue',
    marginTop: 5,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default SignupScreen;
