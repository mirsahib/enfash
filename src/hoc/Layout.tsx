import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from 'react-native-paper'

type WithWrapper = <P extends JSX.IntrinsicAttributes>(WrappedComponent: React.ComponentType<P>) => React.FC<P>;

const Layout: WithWrapper = WrappedComponent => props => {
    const theme = useTheme()
    return(
    <SafeAreaView style={{ 
        flex: 1,
        justifyContent: 'center',
        backgroundColor: theme.colors.primaryContainer
        }}>
        <WrappedComponent {...props}/>
    </SafeAreaView>)
};

export default Layout


