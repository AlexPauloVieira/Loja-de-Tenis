import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';
import Footer from '../../component/Footer';
import ModalComponent from '../../component/Modal';

export default function Detail({ navigation }) {

    navigation.setOptions({
        headerTitle: 'Nike Shifter 10'
    })

    return (
        <>
            <ScrollView style={styles.container}>
                <Image
                    source={require('../../assets/detail.png')}
                    style={styles.image}
                    resizeMode='cover'
                />


                <View>
                    <View>
                        <Text style={[styles.title, { fontSize: 24 }]}>R$289,90</Text>
                    </View>
                    <View opacity={0.4}>
                        <Text style={[styles.title, { fontSize: 30 }]}>Nike Shifter 10</Text>
                    </View>

                    <View style={styles.dotContainer}>
                        <Dot color='#2379f4' />
                        <Dot color='#fb6e53' />
                        <Dot color='#ddd' />
                        <Dot color='#000' />
                    </View>

                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <SizeButton bgColor="#17181a" color="#fff">40</SizeButton>
                            <SizeButton>37</SizeButton>
                            <SizeButton>39</SizeButton>
                            <SizeButton>44</SizeButton>
                        </ScrollView>
                    </View>

                    <View style={styles.textContent}>
                        <Text style={styles.textTitle}>
                            Nike Shifter 10
                        </Text>
                        <Text style={styles.textContent}>
                            O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável. Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético
                        </Text>
                        <Text style={styles.textList}>
                            - Categoria: Amortecimento
                        </Text>
                        <Text style={styles.textList}>
                            - Material: Mash
                        </Text>
                    </View>

                    <Button />

                    <View style={styles.line} />

                    <Footer />

                    <ModalComponent />
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '2%'
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '7%'
    },
    textContent: {
        fontSize: 16,
        marginVertical: '2%',
        paddingHorizontal: '2%'
    },
    textTitle: {
        fontSize: 22,
        marginVertical: '2%'
    },
    textList: {
        fontSize: 16,
        lineHeight: 25
    },
    line: {
        borderWidth: 1,
        borderBottomColor: '#ddd',
        marginVertical: '2%'
    }
})
