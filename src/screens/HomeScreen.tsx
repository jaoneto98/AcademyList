import { setStatusBarBackgroundColor } from 'expo-status-bar';
import * as React from 'react';
import { ImageBackground } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

export interface HomeProps {
}

export function Home (props: HomeProps) {
    return (<ImageBackground source={require('./../assets/background.png')}
            style={styles.background}>
        <View style={styles.body}>
            <View style={styles.containerTop}>
                <Text style={styles.txtBemVindo}>Seja bem-vindo,</Text>
                <Text style={styles.txtName}>Aluno(a)</Text>
            </View>
            <View style={styles.containerMeuTreino}>
                <Text>container Meu Treino</Text>
            </View>
            <View style={styles.containerProxTreino}>
                <Text>container Proximo Treino</Text>
            </View>
            <View style={styles.ContainerButtonNav}>
                <Text>container Botões</Text>
            </View>
        </View>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: { 
        width: '100%' , 
        height: '100%', 
    },
    body: {
        width: '100%' , 
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    containerTop: {
        backgroundColor: 'white',
        height: '15%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    txtBemVindo:{
        fontSize: 30,
        marginStart: 10,
    },
    txtName:{
        fontSize: 35,
        color: 'green',
        marginStart: 20,
    },
    containerMeuTreino: {
        backgroundColor: 'yellow',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerProxTreino: {
        backgroundColor: 'red',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ContainerButtonNav: {
        backgroundColor: 'blue',
        height: '7%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home