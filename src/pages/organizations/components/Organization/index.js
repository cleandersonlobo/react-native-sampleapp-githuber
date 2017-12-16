import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Text, View, Image } from 'react-native';
import styles from './styles';

export default class Organization extends Component {
  static propTypes = {
    organization: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }).isRequired,
  };

  static defaultProps = {};
  render() {
    const { organization } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: organization.avatar_url }}
        />
        <Text style={styles.title}>{organization.login}</Text>
      </View>
    );
  }
}
