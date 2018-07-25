import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class PartnerSync extends Component { 
static navigationOptions = {title: 'PartnerSync'};
  render() {
    return (
      <View style={styles.PartnerSyncContainer}>
        <Text>
          Syncing up with P E A R L
          P - physical needs
          E - emotional/psychological  needs A - arrestability
          R - roles you might play (roles include tactical lead, medical lead, communications)
          L - loose ends

        </Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
    PartnerSyncContainer: {
        flex: 1,
    },
});

export default PartnerSync;
