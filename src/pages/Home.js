import React, { useEffect, useState } from 'react'
import {
    ActivityIndicator,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from "react-native";

const API_KEY = '&apikey='

export default function Home({ navigation }) {
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState([]);

    useEffect(() => {

        fetch(`http://newsapi.org/v2/everything?q=twitter${API_KEY}`)
            .then((response) => response.json())
            .then((json) => setNews(json.articles))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, []);

    const storyItem = ({ item }) => {
        return (
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('NewsDetail', { url: item.url })}
            >
                <View style={styles.listings}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Image
                        style={styles.thumbnail}
                        source={{ uri: item.urlToImage }}
                    />
                    <Text style={styles.blurb}>{item.description}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    return (
        <View style={styles.container}>
            {loading ? <ActivityIndicator /> : (<FlatList
                data={news}
                renderItem={storyItem}
                keyExtractor={(item) => item.url} />)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20
    },
    thumbnail: {
        height: 100,
        width: '98%'
    },
    listings: {
        paddingTop: 15,
        paddingBottom: 25,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1
    },
    title: {
        paddingBottom: 10,
        fontFamily: 'OpenSans'
    },
    blurb: {
        fontFamily: 'OpenSans',
        fontStyle: 'italic'
    }

})