import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

class Triage extends Component {
  static navigationOptions = {title: 'Triage'};
  render() {
    return (
      <View >
        <Text >Triage</Text>
        <Text >
          Prioritization of care when patients outnumber available medics.</Text>
        <Text >Purpose of triage</Text>
        <Text >
          Quickly perform initial assessment on all patients.{"\n"}
          Organize medic resources, prioritizing the most critical cases.{"\n"}
          Triage should be performed by the highest trained/most capable medic on scene.</Text>
        <ScrollView >
          {[
            'Have anyone who can walk on their own and is not actively providing care move to a "green" area.',
            'Perform rapid ABCDE assessment on all remaining patients.',
            'Assign available medics to perform life-saving interventions in critical cases as you go.',
            'After checking all patients, assign medical resources according to severity.'
          ].map((item, index)=>(
            <View >
              <Text >
                {`${index}. ${item}`} </Text>
            </View>
          ))}
          ))
        </ScrollView>
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
