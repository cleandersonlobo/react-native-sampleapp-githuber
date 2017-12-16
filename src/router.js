import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Repositories from 'pages/repositories';
import Welcome from 'pages/welcome';
import Organizations from 'pages/organizations';
import Header from 'components/Header';
import { colors, fonts } from 'styles';

const createRootNavigator = (userExists = false) =>
  StackNavigator({
    Welcome: { screen: Welcome },
    User: {
      screen: TabNavigator({
        Repositories: { screen: Repositories },
        Organizations: { screen: Organizations },
      }, {
        swipeEnabled: true,
        animationEnabled: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
          showIcon: true,
          showLabel: false,
          activeTintColor: colors.white,
          inactiveTintColor: colors.inactive,
          labelStyle: {
            fontSize: fonts.small,
          },
          tabStyle: {
            height: 50,
          },
          style: {
            backgroundColor: colors.primary,
          },
        },
      }),
    },
  }, {
    initialRouteName: userExists ? 'User' : 'Welcome',
    navigationOptions: {
      header: props => <Header {...props} />,
    },
  });

export default createRootNavigator;
