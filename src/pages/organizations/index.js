import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View, AsyncStorage, ActivityIndicator, ScrollView } from 'react-native';
import api from 'services/api';
import styles from './styles';
import Organization from './components/Organization';

export default class Organizations extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (<Icon name="building" size={20} color={tintColor} />),
  }

  state = {
    organizations: [],
    loading: false,
  }
  componentWillMount() {
    this.setState({ loading: true });
    this.loadOraganizations()
      .then(() => this.setState({ loading: false }));
  }

  loadOraganizations = async () => {
    const username = await AsyncStorage.getItem('@Githuber:username');
    const response = await api.get(`/users/${username}/orgs`);

    this.setState({ organizations: response.data, username });
  }
  renderOrganizations = () => (
    this.state.organizations.map(organization =>
      <Organization key={organization.id} organization={organization} />)
  )
  renderList = () => (
    this.state.organizations.length
      ? this.renderOrganizations()
      : <Text style={styles.emptyOrg}> Nenhuma organização encontrada</Text>
  )
  render() {
    return (
      <View style={styles.container}>
        {!this.state.loading &&
        <View style={styles.usernameContainer}>
          <Icon name="github" size={20} color="#424242" style={styles.iconGithub} />
          <Text style={styles.titleUsername}>{this.state.username}</Text>
        </View>
        }
        <ScrollView
          contentContainerStyle={styles.contentContainer}
        >
          {this.state.loading
          ? <ActivityIndicator size="small" color="#999999" style={styles.loading} />
          : this.renderList()}
        </ScrollView>
      </View>
    );
  }
}
