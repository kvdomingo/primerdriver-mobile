import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import SequenceTextArea from './Form/SequenceTextArea';


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 20,
    },
});

export default class Characterize extends React.Component {
    state = {
        sequence: '',
        sequenceLength: 0,
    }

    setSequence = rawSequence => {
        let filteredSequence = [],
            sequence = rawSequence.toUpperCase().split('');
        sequence.forEach((char) => {
            if (['A', 'T', 'C', 'G'].includes(char)) filteredSequence.push(char);
        });
        this.setState({
            sequence: filteredSequence.join(''),
            sequenceLength: filteredSequence.length,
        });
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <SequenceTextArea
                    sequence={this.state.sequence}
                    sequenceLength={this.state.sequenceLength}
                    setSequence={this.setSequence}
                    />
            </ScrollView>
        );
    }
}
