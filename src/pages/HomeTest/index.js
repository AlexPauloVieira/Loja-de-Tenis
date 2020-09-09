import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';


export default function HomeTest({ navigation }) {
    const [shoes, setShoes] = useState([
        {
            title: 'Nike Epic React',
            cost: 220.00,
            photo: require('../../assets/1.png'),
            key: '1'
        },
        {
            title: 'Nike Epic React Flyknit 2',
            cost: 230.00,
            photo: require('../../assets/2.png'),
            key: '2'
        },
        {
            title: 'Nike Epic React Flyknit 3',
            cost: 260.00,
            photo: require('../../assets/3.png'),
            key: '3'
        },
        {
            title: 'Nike Epic React Flyknit 300',
            cost: 260.00,
            photo: require('../../assets/4.png'),
            key: '4'
        },
        {
            title: 'Nike Shox Epic React Flyknit 3',
            cost: 560.00,
            photo: require('../../assets/5.png'),
            key: '5'
        },
        {
            title: 'Nike React Flyknit 300',
            cost: 360.00,
            photo: require('../../assets/6.png'),
            key: '6'
        }
    ]);

    return (
        <View style={styles.container}>
            <FlatList
                data={shoes}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('DetailTest', item)}
                        style={styles.item}
                    >
                        <Text style={styles.title}>{item.title}</Text>
                        <Image source={item.photo} style={styles.image} />
                        <Text style={styles.title}>{item.cost}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 150,
    },
    title: {
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '2%',
        color: '#203e5f',
    },
    item: {
        alignItems: "center",
        justifyContent: 'space-evenly',
        flexGrow: 1,
        margin: 4,
        padding: 20,
        flexBasis: 0
    }

});
