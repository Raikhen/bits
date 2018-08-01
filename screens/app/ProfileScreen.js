import React                        from 'react';
import { StyleSheet }               from 'react-native';
import { MaterialCommunityIcons }   from '@expo/vector-icons';

import Constants                    from '../../utilities/Constants';
import Screen                       from '../../components/Screen';
import Button                       from '../../components/Button';
import BitsText                     from '../../components/BitsText';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: (
      <MaterialCommunityIcons
        name="emoticon-cool"
        style={{ marginBottom: -2 }}
        size={27}
        color={Constants.styling.colors.primary} />
    )
  };

  render() {
    return (
      <Screen>
        <BitsText>ProfileScreen</BitsText>
      </Screen>
    );
  }
}
