// DashboardScreen.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/auth.context';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const DashboardScreen = () => {
    const navigation = useNavigation();
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout(); // Call logout from AuthContext
        navigation.navigate('Login');
    };

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Text>Welcome to the Dashboard!</Text>
                <Button title="Logout" onPress={handleLogout} />
            </View>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DashboardScreen;
