import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import CollapsibleUnorderedList from "../components/CollapsibleUnorderedList";

class HotWeather extends Component {
  hotWhat = [{
      title: 'What do we see when it\'s hot and/or sunny out?',
      content: [
          '1. sunburn',
          '2. heat exhaustion',
          '3. heat stroke',
          'Treatment for sunburn: cover up or get out of the sun!',
      ]
  }]
  heatExhaustion = [{
      title: 'Signs/symptoms of heat exhaustion',
      content: [
          'fatigue',
          'cool/pale/ashen skin with profuse sweating',
          'headache I dizziness I nausea I vomiting CJ Children and elderly folks are especially at risk. n',
      ]
  }]
  exhaustionTreatment = [{
      title: 'Intervention  for  heat  exhaustion',
      content: [
          'Get the patient to shade.',
          'Fan the patient.',
          'Remove excess clothing.',
          'Have them drink water no hardcore sports drinks or powders unless heavily diluted.',
      ]
  }]
  strokeSigns = [{
      title: ' Signs/symptoms of heat stroke',
      content: [
          'Skin may be moist or dry, as in no longer sweating',
          'Disorientation I deliriousness',
          'Loss of consciousness',
      ]
  }]
  strokeTreatment = [{
      title: 'Treatment for heat stroke',
      content: [
          'Get the patient somewhere cool right away.',
          'Remove clothing',
          'Apply cold packs to neck, armpits, inner thighs',
          'Fan and mist but do not soak skin or clothes',
          'Always activate emergency response for heat stroke. An air-conditioned taxi to the nearest ED might be the best option.',
      ]
  }]
  counselPrevention = [{
      title: 'Counsel prevention',
      content: [
          'To avoid these awful eventualities, on hot days encourage activists to:',
          'Cover as much of their body with light clothing as they can stand, slather the rest in sun block.',
          'Stay hydrated and within their physical limits -- overdoing it costs medical resources',
                ]
  }]
static navigationOptions = {title: 'Hot Weather Ailments\nr'};
    render() {
         return (
            <View style={styles.Container}>
              <Text>
\              </Text>
              <CollapsibleUnorderedList sections={this.hotWhat} />
              <CollapsibleUnorderedList sections={this.heatExhaustion} />
              <CollapsibleUnorderedList sections={this.exhaustionTreatment} />
              <CollapsibleUnorderedList sections={this.strokeSigns} />
              <CollapsibleUnorderedList sections={this.strokeTreatment} />
              <CollapsibleUnorderedList sections={this.counselPrevention} />
            </View>
        );
    }
 }
const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
});

export default HotWeather;
