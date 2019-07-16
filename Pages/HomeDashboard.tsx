import React from "react";

import styled                     from "styled-components/native";
import { View, Text, StyleSheet } from "react-native";
import { ListItem }               from "react-native-elements";

const styles = StyleSheet.create({
  listContainer : {
    borderRadius: 4,
    borderWidth: 5,
    borderColor: "#000",
  },

  title : {
    backgroundColor : "#AAA",
  }
});

class ListSection extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return(
      <View>
        <View>
          <Text style = { styles.title }>{ this.props.title }</Text>
        </View>
        { this.props.items.length > 0 ?
          (
              this.props.items.map( ( item, index ) => (
                <ListItem
                  key   = { index }
                  title = { item }
                />
              ))
          ) :
          (
            <ListItem
              title = { 'No ' + this.props.title }
            />
          )
        }
      </View>
    );
  }
}

interface IProps {}

interface IState {}

export default class LoginPage extends React.PureComponent<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      teams  : [ "Team 1", "Team 2", "Team 3" ],
      events : []
    };
  }

  render() {
    return (
        <View>
          <View>
            <ListSection items={this.state.teams} title="Teams">
            </ListSection>
            <ListSection items={this.state.events} title="Events">
            </ListSection>
          </View>
        </View>
    );
  }
}
