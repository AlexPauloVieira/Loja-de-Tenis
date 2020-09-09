import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function DetailTest({ route }) {
    const { title, photo, cost } = route.params;

    return (
        <>
            <View style={styles.container}>
                <Image source={photo} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.title}>{cost}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffcc00',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 400,
        height: 350,
    },
    title: {
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '2%',
        color: '#203e5f',
    },

});
