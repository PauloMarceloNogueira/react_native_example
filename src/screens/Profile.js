/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import { setToken } from "../services/api";

class Profile extends Component {
  login = async () => {
    setToken({ username: "23346753859", password: "pm211090" });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Voceê precisa se logar!</Text>
        <Button title="Ir para Home" onPress={this.login} />
      </View>
    );
  }
}

Profile.navigationOptions = {
  title: "Profile",
};

export default Profile;
