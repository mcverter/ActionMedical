import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class Diabetic extends Component {
static navigationOptions = {title: 'Diabetic Emergencies'};
diabeticSigns = [{
    title: 'Signs/symptoms of diabetic emergency',
    content: [
        ' missed meals',
        'recent high activity',
        'bracelet/necklace  labeled DIABETES',
        'fatigue',
        'hunger I severe thirst',
        'pale I sweaty I clammy skin',
        'may seem and even smell intoxicated',
        'sudden loss of consciousness',
        '',
    ]
}]
  diabeticTreatment = [{
      title: 'Treatment',
      content: [
          'If patient is alert, administer glucose (sugar) in the form of fruit juice,  energy bar, or similar beverage/snack.',
          'Diet soft drinks do not count.',
          'If effective, patient should know what to do next.',
          'If ineffective:  If patient is not alert, place in recovery position and activate emergency response.',
      ]
  }]
    render() {
         return (
            <View style={styles.Container}>
<Text>Complications of diabetes occur in conditions of high and low blood sugar.</Text>
            </View>
        );
    }
 }
const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
});

export default Diabetic;
