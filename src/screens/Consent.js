import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class Consent extends Component {
static navigationOptions = {title: 'Consent'};
consentHow = [{
    title: 'How we get consent',
    content: [
        'Approach calmly and cautiously.',
        'Introduce yourself confidently and swiftly, e.g.',
        'Example: "Hello, my name is Inigo Montoya and I know first aid. I can help you. Would that be okay?"',
        '',
    ]
}]
  refusingConsent = [{
      title: 'Common reasons for refusing care',
      content: [
          'caregiver\'s perceived  gender',
          'worried medics are cops',
          'financial concerns',
          'modesty I fear of exposure',
          'fear of attracting attention',
          'doubts injury is "that bad"',
          'someone else must be worse -help them',
          'fear of contagion (you or them)',
          '',
      ]
  }]
  consentWhat = [{
      title: 'What\'s a street medic to do?',
      content: [
          'Be persistent but not pushy.',
          'Validate and address the patient\'s concerns, e.g.',
          '0 ""I can understand how this might be scary."',
          '0  "Would you prefer if my partner takes care of you and I mostly keep watch?"',
          '0  Establish privacy barriers.',
          'Innovate!',
          'Always take ""No" for an answer.',
          '',
      ]
  }]
    render() {
         return (
            <View style={styles.ConsentContainer}>
              <Text>Street medics get consent for everything.</Text>
            </View>
        );
    }
 }
const styles = StyleSheet.create({
    ConsentContainer: {
        flex: 1,
    },
});

export default Consent;
