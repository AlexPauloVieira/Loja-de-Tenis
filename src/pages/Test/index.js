import React, { Component } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Animated,
    Image
} from 'react-native';

export default class animatedbasic extends Component {
    //esse código(componentWillMount) está ficando obsoleto, pode haver mudanças que faça com que ele para de funcionar
    UNSAFE_componentWillMount() {
        this.animatedValue = new Animated.Value(0);
        this.value = 0;
        this.animatedValue.addListener(({ value }) => {
            this.value = value;
        })
        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg'],
        })
        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
        })
        this.frontOpacity = this.animatedValue.interpolate({
            inputRange: [89, 90],
            outputRange: [1, 0]
        })
        this.backOpacity = this.animatedValue.interpolate({
            inputRange: [89, 90],
            outputRange: [0, 1]
        })
    }

    flipCard() {
        if (this.value >= 90) {
            Animated.spring(this.animatedValue, {
                toValue: 0,
                friction: 8,
                tension: 10,
                useNativeDriver: true
            }).start();
        } else {
            Animated.spring(this.animatedValue, {
                toValue: 180,
                friction: 8,
                tension: 10,
                useNativeDriver: true
            }).start();
        }

    }

    render() {
        const frontAnimatedStyle = {
            transform: [
                { rotateY: this.frontInterpolate }
            ]
        }
        const backAnimatedStyle = {
            transform: [
                { rotateY: this.backInterpolate }
            ]
        }

        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity onPress={() => this.flipCard()}>

                        <Animated.View style={[styles.flipCard, frontAnimatedStyle, { opacity: this.frontOpacity }]}>
                            <Text style={styles.flipText}>
                                This text is flipping on the front.
                            </Text>
                            <FontAwesome5 name='user' color='#000' size={66} />
                        </Animated.View>
                        <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle, { opacity: this.backOpacity }]}>
                            <Text style={styles.flipText}>
                                This text is flipping on the back.
                            </Text>
                            <Image
                                source={require('../../assets/1.png')}
                                style={styles.image}
                            />
                        </Animated.View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    flipCard: {
        width: 300,
        height: 400,
        paddingVertical: 30,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'blue',
        backfaceVisibility: 'hidden',
    },
    flipCardBack: {
        backgroundColor: "red",
        position: "absolute",
        top: 0,
    },
    flipText: {
        width: 90,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
});

AppRegistry.registerComponent('animatedbasic', () => animatedbasic);