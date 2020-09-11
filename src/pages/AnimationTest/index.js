//https://github.com/react-native-community/lottie-react-native/blob/master/docs/api.md

import React from 'react'
import { View, StyleSheet } from 'react-native'

import LottieView from 'lottie-react-native';


import love from '../../assets/animation/love.json';
import love2 from '../../assets/animation/love2.json';



export default function AnimationTest() {

    return (
        <View style={styles.container}>
            <View style={styles.animationCard}>
                <LottieView
                    autoPlay
                    speed={-1} //speed negativo inverte a ordem da animação
                    loop
                    style={{
                        width: 200,
                        height: 200,
                        backgroundColor: '#e8e8e8',
                    }}
                    source={love2}
                    resizeMode='cover'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#e8e8e8'
    },
    animationCard: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 600,
        height: 600,
        backgroundColor: '#fff',
        borderRadius: 25
    }
});
