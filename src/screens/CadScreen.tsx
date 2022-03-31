import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as React from 'react';
import { ActivityIndicator, Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import * as Yup from 'yup'

interface CadastrarProps {
}

const Cadastrar: React.FC<CadastrarProps> = (props) => {
    const nav=useNavigation<any>()
    function Cadastrar(){
        nav.navigate('main')
    }

    const schema = Yup.object().shape({
        email: Yup.string().required('email obrgatrio'),
        password: Yup.string().required('senha obrgitario').min(6, 'o')
    })

    const handleCadastrar = async (values: any) => {
        await new Promise(resolve => setTimeout(resolve, 5000))

        console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
    }

    return (<ImageBackground source={require('./../assets/background.png')}
                style={styles.background}>

        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={schema}
            onSubmit={handleCadastrar}
        >
            {({ values, touched, errors, handleSubmit, handleChange, handleBlur, isSubmitting }) => (
                <View style={styles.container}>
                {touched.email && errors.email && <Text style={{ color: 'red' }}>erro</Text>}    
                <View>
                    <Text style={styles.text}>
                        Email
                    </Text>
                    <TextInput style={styles.textInput} placeholder='Email' onChangeText={handleChange('password')} />
                    <Text style={styles.text}>
                        Senha
                    </Text>
                    <TextInput style={styles.textInput} placeholder='Senha' onChangeText={handleChange('password')} />
                    <Text style={styles.text}>
                        Confirmar Senha
                    </Text>
                    <TextInput style={styles.textInput} placeholder='Senha' onChangeText={handleChange('password')} />
                    {isSubmitting ? <ActivityIndicator size={20} color="#000" /> : (
                        <Button buttonStyle={[styles.button, { backgroundColor: '#01C38E'}]} title={'Entrar'} 
                            onPress={() => {nav.navigate('home')}}
                        />
                    )}
                    
                    <Button buttonStyle={[styles.button,  { backgroundColor: 'red'}]} title={'Login'} 
                        onPress={() => nav.goBack()}    
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
        color: 'white'
    },
    textInput: {
        textAlign: 'center',
        margin: 'auto',
        position: 'relative',
        width: 229,
        height: 36,
        backgroundColor: 'white',
        borderRadius: 4
    },
    button:{
        marginTop: 7
    }
})
export default Cadastrar