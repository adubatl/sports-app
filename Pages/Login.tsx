import React from "react";

import styled              from "styled-components/native";
import { ImageBackground } from "react-native";
import { globalPadding }   from "../Components/constants";

const backgroundImage = require("../assets/fullscreenBG.jpg");
const logoImage = require("../assets/tempLogo.png");

const LoginView = styled.View`
  display         : flex;
  flex-direction  : column;
  align-items     : center;
  justify-content : center;
  width           : 100%;
  height          : 100%;
`;

const LoginPanel = styled.View`
  display          : flex;
  flex-direction   : column;
  padding          : 15px;
  justify-content  : center;
  align-items      : center;
  border-radius    : 5px;
  background-color : rgb(255, 254, 252);
  width            : 70%;
  height           : 30%;
`;

const LoginField = styled.View`
  display : flex;
  width   : 100%;
  padding : 5px;
`;

const LoginHeader = styled.Text`
  font-size   : 22px;
  text-align  : center;
  fontWeight  : bold;
`;

const LoginLogo = styled.Image`
  width    : 100px;
  height   : 100px;
`;

const LoginButtonText = styled.Text`
  font-size : 16px;
  color     : #d88;
`;

const RegisterField = styled.View`
  display         : flex;
  flex-direction  : row;
  width           : 70%;
  justify-content : center;
  padding         : 5px;
`;

const RegisterButtonText = styled.Text`
  font-size             : 12px;
  color                 : navy;
  text-decoration       : underline;
  text-decoration-color : navy;
`;

const NewUserText = styled.Text`
  font-size : 12px;
  color     : rgba(55, 53, 47, 0.6);
`;

const LoginButtonField = styled.View`
  display          : flex;
  flex-direction   : row;
  padding          : 4px 0px;
  border-radius    : 3px;
  font-weight      : 500;
  background       : rgba(242, 241, 238, 0.6);
  border           : 1.5px solid #d88;
  box-shadow       : rgba(0, 0, 0, 0.1) 0px 2px 3px;
  margin-top       : 5px;
  margin-bottom    : 5px;
  justify-content  : center;
  width            : 100%;
`;

const FieldText = styled.Text`
  color      : rgba(55, 53, 47, 0.6);
  font-size  : 14px;
`;

const UserInput = styled.TextInput`
  border         : 1px solid rgba(55, 53, 47, 0.6);
  background     : rgba(242, 241, 238, 0.6);
  padding        : 4px 10px;
  border-radius  : 3px;
  font-size      : 14px;
`;

interface IProps {}

interface IState {
  email    : string;
  password : string;
}

export default class LoginPage extends React.PureComponent<IProps, IState> {

  constructor(props) {
    super(props);
    this.state = {
      email    : "",
      password : ""
    };
  }

  emailChange = input => {
    this.setState( { email : input } );
  };

  passwordChange = input => {
    this.setState( { password : input } );
  };

  onLoginPress = () => {
    console.log( "I just fired the login pew pew" );

    // Navigate to the HomeDashboard.
    this.props.navigation.navigate( 'HomeDashboard' );
  };

  onRegisterPress = () => {
    console.log( "AAAAAAAAAAAAnnnnddddd your're registered" );
    // Navigate to the HomeDashboard.
    this.props.navigation.navigate( 'HomeDashboard' );
  };

  render() {
    return (
      <ImageBackground
        source = {backgroundImage}
        style  = {{ width : "100%", height : "100%" }}
      >
        <LoginView>
          <LoginLogo
            source = {logoImage}
          />
          <LoginPanel>
            <LoginField>
              <LoginHeader>Log In</LoginHeader>
            </LoginField>
            <LoginField>
              <FieldText>EMAIL</FieldText>
              <UserInput
                keyboardType  = {"email-address"}
                returnKeyType = {"next"}
                onChangeText  = {this.emailChange}
                value         = {this.state.email}
                placeholder   = "Enter your email address..."
              />
            </LoginField>
            <LoginField>
              <FieldText>PASSWORD</FieldText>
              <UserInput
                secureTextEntry = {true}
                returnKeyType   = {"done"}
                onChangeText    = {this.passwordChange}
                value           = {this.state.password}
                placeholder     = "Enter your password..."
              />
            </LoginField>
            <LoginField>
              <LoginButtonField>
                <LoginButtonText onPress = {this.onLoginPress}>Continue</LoginButtonText>
              </LoginButtonField>
            </LoginField>
            <RegisterField>
              <NewUserText>New user? </NewUserText>
              <RegisterButtonText onPress = {this.onRegisterPress}>Register</RegisterButtonText>
            </RegisterField>
          </LoginPanel>
        </LoginView>
    </ImageBackground>
    );
  }
}
