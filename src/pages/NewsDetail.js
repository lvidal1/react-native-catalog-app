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
import { getNews } from '../services/news';

export default function NewsDetail({ route, navigation }) {

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const { url } = route.params;

    const selectedPost = posts.find(post => post.url === url);

    useEffect(() => {

        getNews("metaverse").then(({ articles }) => {
            setPosts(articles)
            setLoading(false)
        })

    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            {loading ? <ActivityIndicator /> : (<ScrollView>
                <Text style={styles.title}>{selectedPost.title}</Text>
                <Image style={styles.storyImage} source={{ uri: selectedPost.urlToImage }} />
                <Text style={styles.blurb}>{selectedPost.description}</Text>
                <Text style={styles.content}>{selectedPost.content}</Text>
            </ScrollView>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
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
    storyImage: {
        height: 300,
        width: '100%'
    },
    listings: {
        paddingTop: 15,
        paddingBottom: 25,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1
    },
    title: {
        fontSize: 20,
        padding: 20,
        fontFamily: 'OpenSans',
        fontWeight: 'bold'
    },
    blurb: {
        fontFamily: 'OpenSans',
        fontStyle: 'italic',
        fontSize: 14,
        padding: 20,
    },
    content: {
        flex: 1,
        fontFamily: 'OpenSans',
        fontSize: 16,
        padding: 20,
        paddingTop: 30,
        paddingBottom: 100,
    }

})
