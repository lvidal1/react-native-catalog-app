import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Image, TouchableWithoutFeedback } from "react-native";
import { getCatalog } from "../services/catalog";

export default function Catalog({ navigation }) {

    const [catalogList, setCatalogList] = useState([]);

    useEffect(() => {
        setCatalogList(getCatalog())
    }, []);

    const catalogItem = ({ item }) => {
        return (
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('CatalogDetail', { id: item.modelNumber })}
            >
                <View style={styles.products}>
                    <View style={styles.productImage}>
                        <Image style={styles.thumbnail} source={item.image} />
                    </View>
                    <View style={styles.productText}>
                        <Text style={styles.title}>{item.model}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={catalogList}
                renderItem={catalogItem}
                keyExtractor={(item) => item.modelNumber}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 25
    },
    products: {
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 20,
        justifyContent: 'center'
    },
    productImage: {
        flex: 1
    },
    thumbnail: {
        height: 260,
        width: '100%'
    },
    productText: {
        alignItems: 'flex-start',
        paddingLeft: 15,
        flex: 1
    },
    title: {
        paddingBottom: 10,
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
    },
    description: {
        fontFamily: 'OpenSans',
        fontSize: 12,
        textAlign: 'left'
    }
});