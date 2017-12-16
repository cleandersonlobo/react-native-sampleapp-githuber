import React from 'react';
import createRootNavigator from 'router';
import { AsyncStorage } from 'react-native';
import './config/reactotron';

export default class App extends React.Component {
  state = {
    userExists: false,
    userChecked: false,
  }
  componentWillMount() {
    this.checkUser().then((response) => {
      this.setState({ userExists: response, userChecked: true });
    });
  }
  checkUser = async () => {
    const user = await AsyncStorage.getItem('@Githuber:username');
    return user !== null;
  }
  render() {
    const { userChecked, userExists } = this.state;
    if (!userChecked) return null;

    const Layout = createRootNavigator(userExists);
    return (
      <Layout />
    );
  }
}

