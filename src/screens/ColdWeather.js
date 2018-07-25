import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class ColdWeather  extends Component {
  static navigationOptions = {title: 'Cold Weather'};
  ailments = [{
      title: 'Cold Weather Ailments',
      content: [
          ' Hypothermia -body-heat loss that threatens organ failure',
          'Frostnip -minor tissue damage due to cold',
          'Frostbite (rare) -severe tissue damage, usually to extremities',
          '',
      ]
  }]
  hypothermiaSigns = [{
      title: 'Signs/Symptoms of hypothermia',
      content: [
          'severe shivering',
          'pale/bluish where should be pinkish',
          'slurred speech I mumbling',
          'slow I shallow breathing',
          'clumsiness I drowsiness I fatigue',
          'disorientation I memory loss I loss of consciousness',
          'Factor in wind and rain, and you may see hypothermia at temperatures as high as 50°F ( 10°C) or higher or in water up to 70°F (21°C).',
      ]
  }]
  hypothermiaTreatment = [{
      title: 'Treatment of hypothermia',
      content: [
          'Get the patient out of the cold.',
          'Remove dry clothes and dry the patient.',
          'Warm liquids by mouth are okay if patient is alert -no alcohol or stimulants (such as cigarettes/coffee).',
          'Use active warming with heat packs to the armpits I thighs.',
          'This may be a good time to bust out that space blanket.',
          'Always activate emergency response for hypothermia. A hypothermic patient is best warmed under advanced medical supervision.',
      ]
  }]
  frostnipSigns = [{
      title: 'Signs/symptoms of frostnip',
      content: [
          'reddened/lightened  skin where exposed or in extremities (fingers/toes)',
          'itching I tingling I numbness',
      ]
  }]
frostnipTreatment = [{
    title: 'Treatment for frostnip',
    content: [
        '1. Get to a warm place.',
        '2. Warm the area with moderate heat, such as warm hands or insulated heat pack.',
        '0  Do NOT re-expose to cold.',
        '0 Do NOT rewarm with friction.',
    ]
}]
  frostbiteSigns = [{
      title: 'Signs/symptoms of frostbite',
      content: [
          'Following the signs/symptoms of fristnip...',
          'white/yellow/waxy  skin',
          'blotchiness',
          'blistering/swelling',
          'clumsiness due to joint/muscle  stiffness',
      ]
  }]
  frostbiteTreatment = [{
      title: 'Treatment for frostbite',
      content: [
          '',
          '1. Get the patient somewhere warm...',
          '2. but do not warm and then allow refreezing.',
          '3. Do not actively warm the site.',
          'D Activate emergency response or rush to emergency department; minutes count because tissue is at stake.',
      ]
  }]
  prevention = [{
      title: 'Counsel prevention',
      content: [
          'Properly dressed, fed, and hydrated activists rarely get hypothermia or frostbite.',
          'Extremities -including ears and noses -need coverage in cold weather.',
          'Water resistant clothing even in merely chilly weather.',
          'Layers, layers, layers, including a wicking layer on the inside.',
          'Send people indoors if they appear at risk; encourage them to rotate.',
      ]
  }]

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

export default ColdWeather;
