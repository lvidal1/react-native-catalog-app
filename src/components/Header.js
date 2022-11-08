import React from 'react'
import { Platform, StyleSheet, View, Image, Text } from "react-native";

import logo from '../../assets/logo.png'


export default function Header({ headerDisplay }) {
    return (
        <View style={{ paddingTop: Platform.OS === 'android' ? 35 : 0 }}>
            <View style={styles.header}>
                <Image source={logo} style={{ width: 35, height: 35 }} />
                <View>
                    <Text style={styles.text}>{headerDisplay}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'OpenSans'
    }
})