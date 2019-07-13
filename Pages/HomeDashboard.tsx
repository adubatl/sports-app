import React from "react";

import styled        from "styled-components/native";
import { View }      from "react-native";
import { ListItem }  from "react-native-elements";

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
  padding          : 30px;
  justify-content  : center;
  align-items      : center;
  border-radius    : 8px;
  background-color : lightblue;
  width            : 50%;
  height           : 30%;
`;

const LoginField = styled.View`
  display : flex;
  width   : 75%;
`;

const LoginHeader = styled.Text`
  font-size     : 18;
  text-align    : center;
  margin-bottom : 30px;
`;

const LoginLogo = styled.Text`
  width  : 100%;
  height : 20px;
  border : 1px solid purple;
`;

interface IProps {}

interface IState {}

export default class LoginPage extends React.PureComponent<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      teams : [ "Team 1", "Team 2", "Team 3" ]
    };

    this.state.teams.forEach( (teamName, index ) => {
      console.log( teamName + " " + index );
    });
  }

  render() {
    return (
      <View>
        {
          this.state.teams.map( ( teamName, index ) => (
            <ListItem
              key   = { index }
              title = { teamName }
            />
          ))
        }
      </View>
    );
  }
}
