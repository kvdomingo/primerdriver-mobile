import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        alignItems: 'center',
        borderColor: '#ddd',
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        marginVertical: 10,
        paddingVertical: 20,
        width: '75%',
    },
    image: {
        marginBottom: '-65%',
        marginTop: '-75%',
        width: '30%',
    },
});

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.card} onPress={() => navigation.navigate('Home')}>
                <Image
                    style={styles.image}
                    source={require('../assets/characterize.png')}
                    resizeMethod='auto'
                    resizeMode='contain'
                    />
                    <Button
                        onPress={() => navigation.navigate('Characterize')}
                        color='#ff4444'
                        title='Primer Characterization'
                        />
            </View>

            <View style={styles.card}>
                <Image
                    style={styles.image}
                    source={require('../assets/dna.png')}
                    resizeMethod='auto'
                    resizeMode='contain'
                    />
                <Button
                    onPress={() => navigation.navigate('DNA')}
                    color='#4285f4'
                    title='DNA-based Primer Design'
                    />
            </View>

            <View style={styles.card}>
                <Image
                    style={styles.image}
                    source={require('../assets/protein.png')}
                    resizeMethod='auto'
                    resizeMode='contain'
                    />
                    <Button
                        onPress={() => navigation.navigate('Protein')}
                        color='#00c851'
                        title='Protein-based Primer Design'
                        />
            </View>
        </View>
    );
}
