import React, { useState } from 'react'
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Quote() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const submit = () => {
        if (!name || !email || !message) {
            setError(true);
        } else {
            setError(false);
            setSubmitted(true);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {!error ?
                    <Text style={styles.status}>Fill the information</Text> :
                    <Text style={styles.status}>You did not enter the info</Text>}
                {submitted ? <Text>Name: {name} - Email: {email}</Text> : <Text style={styles.req}>* required</Text>}
                <Text style={styles.label}>Name *</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={name => setName(name)} value={name} />

                <Text style={styles.label}>Email *</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={email => setEmail(email)} value={email} />

                <Text style={styles.label}>Phone number</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={phone => setPhone(phone)} value={phone} />

                <Text style={styles.label}>Message *</Text>
                <TextInput
                    style={styles.multi}
                    onChangeText={message => setMessage(message)} value={message} multiline numberOfLines={6} />

                <TouchableOpacity style={styles.button} onPress={() => submit()}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        fontFamily: 'OpenSans',
        fontSize: 26,
        height: 40,
        width: 250
    },
    label: {
        fontSize: 18,
        fontFamily: 'OpenSans',
        paddingTop: 20
    },
    req: {
        fontSize: 10,
        fontFamily: 'OpenSans',
        fontStyle: 'italic'
    },
    multi: {
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 16,
        fontFamily: 'OpenSans',
        width: 300
    },
    button: {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 10
    },
    status: {
        paddingTop: 10,
        paddingBottom: 15
    }
})