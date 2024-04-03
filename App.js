// App.js
import React from 'react';
import AppNavigator from './src/navigation/app.navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/contexts/auth.context';

export default function App() {
    return (
        <SafeAreaProvider>
            <AuthProvider>
                <AppNavigator />
            </AuthProvider>
        </SafeAreaProvider>
    );
}
