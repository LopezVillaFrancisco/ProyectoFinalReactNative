import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import InputForm from '../components/InputForm';
import SubmitButton from '../components/SubmitButton';
import { useLoginMutation } from '../services/authService';
import { setUser } from '../Features/User/userSlice';
import { useDispatch } from 'react-redux';
import { logInSchema } from '../validations/authSchema';

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [errorMail, setErrorMail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const navigation = useNavigation();   
  const dispatch = useDispatch();

  const [triggerLogIn,result] = useLoginMutation() 
  
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
      setErrorMail('') 
      setErrorPassword('')
      const validation = logInSchema.validateSync({ email, password})  
      triggerLogIn({email,password}); 
      }catch(err) {
        switch(err.path) {
          case 'email': 
          setErrorMail(err.message);
          break;
          case 'password': 
          setErrorPassword(err.message);
          break;
          default:
            break;
        }
      }
    };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
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
      <SubmitButton
        onPress={onSubmit}
        title="Log In"
      />
      <Text style={styles.signupText}>Todavía no tienes una cuenta?</Text>
      <Pressable onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupLink}>Sign Up</Text>
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
});

export default LoginScreen;
