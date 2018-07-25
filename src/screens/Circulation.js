import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class Circulation extends Component {
  pulse = [{
      title: 'Pulse',
      content: [
          '1. Does the patient have a pulse?',
          '0  Ifthey\'re breathing:',
          'They have a pulse!',
          '0  If someone is breathing for them, check for a pulse. Lack of pulse.',
      ]
  }];
  bleeding = [{
      title: '1. Is the patient bleeding severely?',
      content: [
          '0  This is also usually obvious.',
          '0  Sweep unconscious patients.',
          '2. Has the patient lost a lot of blood?',
          'a. Check their pulse.',
          'b. Check their perfusion.',
          'c. Check their clothing, surroundings. ' +
          'Severe bleeding or recent severe blood loss.',
      ]
  }]
  interventionBleedingControl = [{
      title: 'Intervention: Severe bleeding control',
      content: [
          'Apply direct pressure to wound site.',
          'Conditions for tourniquet:',
          '0  ann/leg amputations',
          '0 massive arterial bleeding in a limb',
      ]
  }]
  hypoSigns = [{
      title: 'Signs/symptoms of hypovolemic shock',
      content: [
          'Skin: pale, cold, ""clammy"',
          'Pulse: rapid, weak',
          'Breathing: rapid, shallow',
          'Dizziness, weakness',
          'Confusion, changing consciousness',
      ]
  }]
  intervensionBloodLoss = [{
      title: 'Intervention: Severe blood loss (shock)',
      content: [
          'Call 911 !',
          'Lay the patient down.',
          'Make them comfortable.',
          '° Fluids are good. 0  Warmth is good.',
          'Shock kills! Any patient in shock must receive hospital care.',
      ]
  }]
static navigationOptions = {title: 'Circulation'};
    render() {
         return (
            <View style={styles.Container}>
            </View>
        );
    }
 }
const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
});

export default Circulation;
