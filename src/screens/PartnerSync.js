import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import CollapsibleUnorderedList from "../components/CollapsibleUnorderedList";

class PartnerSync extends Component { 
static navigationOptions = {title: 'Partner Sync'};
PEARL = [{
    title: 'Syncing up with P E A R L',
    content: [
        'P - physical needs',
        'E - emotional/psychological  needs ',
        'A - arrestability',
        'R - roles you might play (roles include tactical lead, medical lead, communications)',
        'L - loose ends',
    ]
}]
  render() {
    return (
      <View style={styles.PartnerSyncContainer}>
        <Text>
PEARL
        </Text>
        <CollapsibleUnorderedList sections={this.PEARL} />

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
