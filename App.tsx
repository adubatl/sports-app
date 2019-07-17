import React from "react";

import { StyleSheet }                               from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Pages
import LoginPage     from "./Pages/Login";
import HomeDashboard from "./Pages/HomeDashboard";

const styles = StyleSheet.create({
    appContainer : {
        display        : "flex",
        justifyContent : "center",
        alignItems     : "center"
    },
});

const AppNavigator = createStackNavigator(
    {
        Login         : LoginPage,
        HomeDashboard : HomeDashboard,
    },
    {
        initialRouteName : 'Login',
        defaultNavigationOptions : {
            header      : null,
            headerStyle : {
                backgroundColor : '#D88'
            },
        }
    }
);

const AppContainer = createAppContainer( AppNavigator );

// Better to have more control over the component at the root of the app
// than you would get from exporting the result of `createAppContainer`.
export default class App extends React.Component {
    render() {

        return <AppContainer />
        }
}
