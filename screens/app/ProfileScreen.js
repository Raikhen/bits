import React                        from 'react';
import { StyleSheet }               from 'react-native';

import Constants                    from '../../utilities/Constants';
import Screen                       from '../../components/Screen';
import Button                       from '../../components/Button';
import BitsText                     from '../../components/BitsText';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile'
  };

  render() {
    return (
      <Screen style={styles.screen}>
        <BitsText>Hello, World!</BitsText>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
