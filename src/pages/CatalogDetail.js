import React, { useEffect, useState } from 'react'
import {
    ActivityIndicator,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { getCatalog } from '../services/catalog';

export default function CatalogDetail({ route, navigation }) {

    const [loading, setLoading] = useState(true);
    const [catalogList, setCatalogList] = useState([]);
    const { id } = route.params;

    const selectedProduct = catalogList.find(product => product.modelNumber === id);

    useEffect(() => {
        setCatalogList(getCatalog())
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            {loading ? <ActivityIndicator /> : (<ScrollView>
                <Text style={styles.model}>{selectedProduct.model}</Text>
                <Image style={styles.productImage} source={{ uri: selectedProduct.image }} />
                <Text style={styles.description}>{selectedProduct.description}</Text>
            </ScrollView>)}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Quote', {
                    model: selectedProduct.model,
                    modelNumber: selectedProduct.modelNumber
                })}
            >
                <Text style={styles.buttonText}>Submit Quote</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        marginBottom: 100,
    },
    button: {
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'OpenSans',
        fontWeight: 'bold'
    },
    productImage: {
        height: 250,
        width: '100%'
    },
    listings: {
        paddingTop: 15,
        paddingBottom: 25,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1
    },
    model: {
        fontSize: 20,
        padding: 20,
        fontFamily: 'OpenSans',
        fontWeight: 'bold'
    },
    description: {
        flex: 1,
        fontFamily: 'OpenSans',
        fontSize: 16,
        padding: 20,
        paddingTop: 30,
        paddingBottom: 100,
    }

})
