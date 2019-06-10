import React from "react";

import styled from "styled-components/native";
import { ImageBackground, Text } from "react-native";
import { globalPadding } from "../Components/constants";

const backgroundImage = require("../assets/640-Scenic-l.jpg");

const LoginView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${globalPadding}px;
  height: 100%;
`;

const LoginPanel = styled.View`
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: lightblue;
  margin-top: ${-globalPadding}px;
`;

const LoginField = styled.View`
  display: flex;
  width: 75%;
`;

const LoginHeader = styled.Text`
  text-align: center;
`;

const LoginLogo = styled.Text`
  width: 100%;
  height: 20px;
  border: 1px solid purple;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  color: navy;
  margin-right: 15px;
`;

const ButtonRow = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 15px;
`;

const EmailInput = styled.TextInput`
  border: 1px solid lightblue;
  padding: 4px;
  border-radius: 4px;
`;

const PasswordInput = styled.TextInput`
  border: 1px solid lightblue;
  padding: 4px;
  border-radius: 4px;
`;

interface IProps {}

interface IState {
  email: string;
  password: string;
}
export default class LoginPage extends React.PureComponent<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  emailChange = input => {
    this.setState({ email: input });
  };

  passwordChange = input => {
    this.setState({ password: input });
  };

  onLoginPress = () => {
    console.log("I just fired the login pew pew");
  };

  onRegisterPress = () => {
    console.log("To the registration page AWAAAAAAAY");
  };
  render() {
    return (
      <ImageBackground
        source={backgroundImage}
        style={{ width: "100%", height: "100%" }}
      >
        <LoginView>
          <LoginPanel>
            <LoginLogo>[ --- --- --- A LOGO --- --- --- ]</LoginLogo>
            <LoginHeader>Welcome. Please log-in.</LoginHeader>
            <LoginField>
              <Text>email</Text>
              <EmailInput
                onChangeText={this.emailChange}
                value={this.state.email}
                placeholder="email"
              />
            </LoginField>
            <LoginField>
              <Text>password</Text>
              <PasswordInput
                onChangeText={this.passwordChange}
                value={this.state.password}
                placeholder="password"
              />
            </LoginField>
            <ButtonRow>
              <ButtonText onPress={this.onLoginPress}>Login</ButtonText>
              <ButtonText onPress={this.onRegisterPress}>Register</ButtonText>
            </ButtonRow>
          </LoginPanel>
        </LoginView>
      </ImageBackground>
    );
  }
}
