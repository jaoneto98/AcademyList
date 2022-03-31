import { Formik } from 'formik';
import * as React from 'react';
import { ActivityIndicator, DrawerLayoutAndroidBase, Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup'

interface LoginProps {
}

const Login: React.FC<LoginProps> = (props) => {

    const nav=useNavigation<any>()
    const [ erro, setErro ] = React.useState('')

    const schema = Yup.object().shape({
        email: Yup.string().required('e-mail obrigatorio'),
        password: Yup.string().required('senha obrigatorio').min(6, 'o')
    })

    
    const Logar = async (dados: { email: string; senha: string; }) => {
        await new Promise(resolve => setTimeout(resolve, 5000))
        if (dados.email == 'teste@teste.com' && dados.senha == '123456')
            nav.navigate('Home')
        else
            console.log('E-mail ou Senha incorreta!!!')
    }

    return (<ImageBackground source={require('./../assets/background.png')}
                style={styles.background}>

        <Formik
            initialValues={{ email:'', senha:'' }}
            validationSchema={Yup.object().shape({
                email: Yup.string().required('Informe o E-mail').email('E-mail não válido'),
                senha: Yup.string().required('Informe o Senha').min(6, 'A senha preciso ter no minimo 6 caracteres'),
            })}
            onSubmit={Logar}>

            {({ values, touched, errors, handleSubmit, handleChange, handleBlur, isSubmitting }) => (
                <View style={styles.container}>
                    {touched.email && errors.email && <Text style={{ color: 'red' }}>erro</Text>}    
                    <View>
                        {/*EMAIL*/}
                        <Text style={styles.text}>
                            Email
                        </Text>
                        <TextInput style={styles.textInputContainer} placeholder='Email' />
                        {/*SENHA*/}
                        <Text style={styles.text}>
                            Senha
                        </Text>
                        <TextInput style={styles.textInputContainer} placeholder='Senha' onChangeText={handleChange('password')} />
                        {isSubmitting ? <ActivityIndicator size={20} color="#000" /> : (
                            <Button buttonStyle={[styles.button, { backgroundColor: '#01C38E'}]} title={'Entrar'} 
                                onPress={() => {nav.navigate('home')}}
                            />
                        )}
                        <Button buttonStyle={[styles.button,  { backgroundColor: 'red'}]} title={'Cadastre-se'} 
                            onPress={() => {nav.navigate('cadastrar')}}
                        />
                    </View>
                </View>
            )}
        </Formik>
    </ImageBackground>    
    );
};

const styles = StyleSheet.create({
    background: { 
        width: '100%' , 
        height: '100%' },
    container: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 30,
        flex: 1,
    },
    text: {
        marginTop: 10,
        margin: 'auto',
        color: 'white',
    },
    textInputContainer: {
        textAlign: 'center',
        margin: 'auto',
        position: 'relative',
        width: 229,
        height: 36,
        backgroundColor: 'white',
        borderRadius: 30,
    },
    button:{
        marginTop: 10,
    }
})
export default Login