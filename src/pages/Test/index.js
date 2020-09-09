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
                            <FontAwesome5 name='question' color='#ffcc00' size={64} />
                            <Text style={styles.flipText}>
                                Complete o desafio
                            </Text>
                        </Animated.View>
                        <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle, { opacity: this.backOpacity }]}>
                            <Text style={styles.flipTextBack}>
                                Parabéns vc é demais!
                            </Text>
                            <FontAwesome5 name='trophy' color='#203e5f' size={64} />
                        </Animated.View>
                    </TouchableOpacity>
                </View>
                {/* 2 card */}
                <View>
                    <TouchableOpacity onPress={() => this.flipCard()}>

                        <Animated.View style={[styles.flipCard, frontAnimatedStyle, { opacity: this.frontOpacity }]}>
                            <FontAwesome5 name='question' color='#ffcc00' size={64} />
                            <Text style={styles.flipText}>
                                Complete o desafio
                            </Text>
                        </Animated.View>
                        <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle, { opacity: this.backOpacity }]}>
                            <Text style={styles.flipTextBack}>
                                Parabéns vc é demais!
                            </Text>
                            <FontAwesome5 name='trophy' color='#203e5f' size={64} />
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
        flexDirection: 'row',
        alignItems: "flex-start",
        justifyContent: "space-evenly",
    },
    flipCard: {
        width: 160,
        height: 200,
        marginTop: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#203e5f',
        backfaceVisibility: 'hidden',
        borderRadius: 20
    },
    flipCardBack: {
        backgroundColor: "#ffcc00",
        position: "absolute",
        top: 0,
    },
    flipText: {
        fontSize: 16,
        color: '#ffcc00',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    flipTextBack: {
        width: 120,
        fontSize: 14,
        color: '#203e5f',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        borderRadius: 40
    }
});

AppRegistry.registerComponent('animatedbasic', () => animatedbasic);