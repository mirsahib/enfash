import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'react-native-paper';

interface WithDataProps<T> {
    data?: T;
}

const Layout =
    <T, P extends WithDataProps<T>>(WrappedComponent: React.ComponentType<P>) =>
    (props: P) => {
        const theme = useTheme();
        return (
            <SafeAreaView
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    backgroundColor: theme.colors.primaryContainer
                }}
            >
                <WrappedComponent {...props} />
            </SafeAreaView>
        );
    };

export default Layout;
