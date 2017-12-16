import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { Text, View, TextInput, TouchableOpacity, AsyncStorage, ActivityIndicator } from 'react-native';
import api from 'services/api';
import styles from './styles';

export default class Welcome extends Component {
  static navigationOptions = {
    header: null,
  };
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }
  state = {
    username: '',
    error: false,
    loading: false,
  }
  checkAndSaveUser = async () => {
    const response = await api.get(`/users/${this.state.username}`);
    if (!response.ok) throw Error();

    await AsyncStorage.setItem('@Githuber:username', this.state.username);
  }
  navigationToUser = () => {
    // check if user exists.
    // save user in storage
    if (this.state.username.length === 0) return;
    this.setState({ loading: true });
    this.checkAndSaveUser()
      .then(() => {
        const { dispatch } = this.props.navigation;
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'User' }),
          ],
        });
        dispatch(resetAction);
      })
      .catch(() => {
        this.setState({ error: true, loading: false });
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeTitle}>Bem Vindo</Text>
        <Text style={styles.welcomeDescription}>
          Para Continuar, precisamos que você infrome seu usário do Github
        </Text>

        { this.state.error && <Text style={styles.error}> Esse usuário não existe</Text>}

        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={username => this.setState({ username })}
          placeholder="Digite seu usuário"
          underlineColorAndroid="transparent"
        />

        <TouchableOpacity style={styles.button} onPress={this.navigationToUser}>
          {this.state.loading
          ? <ActivityIndicator size="small" color="#FFFFFF" />
          : <Text style={styles.buttonText} > Prosseguir </Text>
          }
        </TouchableOpacity>
      </View>
    );
  }
}
