//https://github.com/react-native-community/lottie-react-native/blob/master/docs/api.md

import React from 'react'
import { View, StyleSheet } from 'react-native'

import LottieView from 'lottie-react-native';


import love from '../../assets/animation/love.json';
import love2 from '../../assets/animation/love2.json';
import hearts from '../../assets/animation/hearts.json';
import load from '../../assets/animation/load.json';
import trophy from '../../assets/animation/trophy.json';
import idea from '../../assets/animation/idea.json';
import swap from '../../assets/animation/swap.json';
import drag from '../../assets/animation/drag.json';
import champion from '../../assets/animation/champion.json';
import medal from '../../assets/animation/medal.json';
import nice from '../../assets/animation/nice.json';
import check from '../../assets/animation/check.json';
import man from '../../assets/animation/man.json';



export default function AnimationTest() {

    return (
        <View style={styles.container}>
            <View style={styles.animationCard}>
                <LottieView
                    autoPlay
                    speed={1} //speed negativo inverte a ordem da animação
                    loop
                    style={{
                        width: 200,
                        height: 200,
                        backgroundColor: '#e8e8e8',
                    }}
                    source={man}
                    resizeMode='cover'
                />
            </View>
            <View style={styles.animationCard}>
                <LottieView
                    autoPlay
                    speed={0.4} //speed negativo inverte a ordem da animação
                    loop
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor: '#e8e8e8',
                    }}
                    source={nice}
                    resizeMode='cover'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#e8e8e8'
    },
    animationCard: {
        backgroundColor: '#fff',
        borderRadius: 25,
        marginTop: 10
    }
});
