// DummyScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DummyScreen = () => {
    return (
        <View style={styles.container}>
            <Text>You are already logged in!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DummyScreen;
