import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import CollapsibleUnorderedList from "../components/CollapsibleUnorderedList";

class Triage extends Component {
  purpose = [{
      title: 'Purpose of triage',
      content: [
          ' Prioritization of care when patients outnumber available medics.',
          'Quickly perform initial assessment on all patients.',
          'Organize medic resources, prioritizing the most critical cases.',
                ]
  }]
  performing = [{
      title: 'Performing Triage',
      content: [
          'Triage should be performed by the highest trained/most capable medic on scene.',
          '1. Have anyone who can walk on their own and is not actively providing care move to a "green" area.',
          '2. Perform rapid ABCDE assessment on all remaining patients.',
          '3. Assign available medics to perform life-saving interventions in critical cases as you go.',
          '4. After checking all patients, assign medical resources according to severity.',
      ]
  }]
  static navigationOptions = {title: 'Triage'};
  render() {
    return (
      <View>
        <Text>
          Prioritization of care when patients outnumber available medics.</Text>
        <CollapsibleUnorderedList sections={this.purpose} />
        <CollapsibleUnorderedList sections={this.performing} />

      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default Triage;
