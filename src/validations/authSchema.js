import { object,string,ref } from "yup"; 

export const signUpSchema = object().shape({
    email: string().required("El email es un campo obligatorio").email('El email no es valido'), 
    password: string().required("La contraseña es un campo obligatorio").min(6, 'La contraseña debe tener al menos 6 caracteres'),
    confirmPassword: string().oneOf([ref ("password"), null], 'Las contraseñas deben ser las mismas').required("El confirmar contraseña es un campo obligatorio")
})
export const logInSchema = object().shape({
    email: string().required("El email es un campo obligatorio").email('El email no es valido'), 
    password: string().required("La contraseña es un campo obligatorio").min(6, 'La contraseña debe tener al menos 6 caracteres'),
})