import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


const styles = StyleSheet.create({
    form: {
        borderColor: '#ddd',
        borderStyle: 'solid',
        borderWidth: 1,
        marginTop: 10,
    },
    counter: {
        color: 'gray',
        marginBottom: 10,
        textAlign: 'right',
    },
});

export default function SequenceTextArea(props) {
    return (
        <View>
            <Text>Enter DNA sequence:</Text>
            <TextInput
                autoCompleteType='off'
                autoCorrect={false}
                autoFocus
                style={styles.form}
                multiline
                textAlignVertical='top'
                numberOfLines={4}
                onChangeText={text => props.setSequence(text)}
                value={props.sequence}
                />
            <Text style={styles.counter}>Sequence length: {props.sequenceLength}</Text>
        </View>
    );
}
