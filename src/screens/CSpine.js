import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class CSpine extends Component {
cspineMOI = [{
    title: 'Positive MOI for C-spine injury',
    content: [
        'fall from twice one\'s height',
        'severe motor vehicle accident',
        'motor vehicle to pedestrian',
        'direct trauma to the neck D',
        'If you suspect a C-spine injury, you must immediately initiate C-spine stabilization.',
        '',
    ]
}]
  cspineIntervention = [{
      title: 'Intervention: C-spine stabilization',
      content: [
          ' Principal: Prevent further injury to the cervical vertebrae and spinal cord by restricting movement.',
          'Approach from the front',
          'Tell the injured person to keep their head still. D',
          'More important than keeping the patient still is keeping the neck stable and in line.',
          '',
      ]
  }]
  cspineStabilization = [{
      title: 'Intervention: C-spine Stabilization',
      content: [
          'Gently bring the neck into alignment.',
          '0 STOP! if:',
          'the patient feels pain',
          'there is grinding ("crepitus")',
          '',
          '14',
          'Firmly hold both sides of the patient\'s head.',
          'Someone must hold this position until advanced help arrives.',
          '',
      ]
  }]
  static navigationOptions = {title: 'Cervical spinal injuries'};

    render() {
         return (
            <View style={styles.Container}>
                <Text>Injuries to the vertebrae in the neck can cause paralysis, including fatal paralysis.</Text>
            </View>
        );
    }
 }
const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
});

export default CSpine;
