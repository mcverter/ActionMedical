import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class Breathing extends Component {
  respiratoryMOI = [{
      title: 'MOI for respiratory distress',
      content: [
          'exertion',
          'aerosolized chemicals',
          'chronic condition, e.g.',
          '0 asthma',
          '° COPD',
      ]
  }];
  distressSigns = [{
      title: 'Signs of respiratory distress',
      content: [
          'shallow breathing',
          'rapid breathing',
          'slow breathing',
          'unsteady breathing',
          'strained breathing',
          'wheezing/ gasping',
      ]
  }]
  interventionDistress = [{
      title: 'Intervention: Respiratory distress',
      content: [
          'If chronic, do they have medicine?',
          'Tripod position.',
          'Breathe along with them.',
          'Be calming and reassuring.',
          'Severe or prolonged respiratory distress are red flags! Ifthe patient does not recover after 3-5 minutes, or if the distress is extraordinary, call for backup!',
      ]
  }];
  interventionArrest = [{
      title: 'Intervention: Respiratory arrest',
      content: [
          'Rescue breathing.',
          'Learn it in CPR course.',
          'If you don\'t know CPR, somebody nearby does.',
          'Get them to do it.',
      ]
  }]
static navigationOptions = {title: 'Breathing'};
    render() {
         return (
            <View style={styles.BreathingContainer}>
            </View>
        );
    }
 }
const styles = StyleSheet.create({
    BreathingContainer: {
        flex: 1,
    },
});

export default Breathing;
