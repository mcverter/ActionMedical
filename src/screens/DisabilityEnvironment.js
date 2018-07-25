import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class DisabilityEnvironment extends Component {
  disability = [{
      title: 'Disability',
      content: [
          'Is there life-threatening danger the patient unable to perceive or avoid?',
          'Most commonly caused by recent injury.',
          'Also consider loss of mobility/perception  aids.',
          'Disability in a life-threatening situation calls for intervention, which may require backup.',
      ]
  }]
  disabilityInterventions = [{
      title: 'Interventions: Disability',
      content: [
          'Chemically induced blindness:',
          '0  Perform an eye flush (taught later).',
          'Note on lost glasses: Take their arm, guide them out.',
          'Only intervene if the life-threatening danger is not a danger to you.',
          '',
      ]
  }]
  environment = [{
      title: 'Environment',
      content: [
          'Are the immediate surroundings a danger to your patient?',
          'Any threat that prevents or disrupts lifesaving care.',
          '0  severe weather',
          '0 hostiles I chaotic crowds',
          'Think ahead: changing environments mean continually reassessing the threat.',
      ]
  }]
static navigationOptions = {title: 'Disability & Environment'};
    render() {
         return (
            <View style={styles.DisabilityEnvironmentContainer}>
            </View>
        );
    }
 }
const styles = StyleSheet.create({
    DisabilityEnvironmentContainer: {
        flex: 1,
    },
});

export default DisabilityEnvironment;
