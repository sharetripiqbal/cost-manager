import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [snackbarVisible, setSnackbarVisible] = useState(false);

    const handleLogin = () => {
        if (email === 'k@k.com' && password === 'password') {
            console.log('Logged in successfully!');
            navigation.navigate('Dashboard');
        } else {
            setSnackbarVisible(true);
        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // Check if the user is already logged in
            // This is a simple check for demonstration purposes
            // In a real app, you would check the user's authentication status
            const isLoggedIn = true;

            if (isLoggedIn) {
                navigation.navigate('Dashboard');
            }
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <TextInput label="Email" value={email} onChangeText={setEmail} style={styles.input} />
                <TextInput label="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
                <Button mode="contained" onPress={handleLogin} style={styles.button}>
                    Login
                </Button>
                <Snackbar visible={snackbarVisible} onDismiss={() => setSnackbarVisible(false)} duration={3000} theme={{ colors: { surface: 'red' } }}>
                    Invalid email or password.
                </Snackbar>
            </View>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        marginBottom: 10,
    },
    button: {
        width: '100%',
        marginTop: 10,
    },
    snackbar: {
        backgroundColor: 'red',
    },
});

export default LoginScreen;
