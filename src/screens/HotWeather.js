import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class HotWeather extends Component {
static navigationOptions = {title: 'HotWeather'};
    render() {
         return (
            <View style={styles.Container}>
              <Text>
              Hot Weather Ailments
              What do we see when it's hot and/or sunny out?
              1. sunburn
              2. heat exhaustion
              3. heat stroke
              Treatment for sunburn: cover up or get out of the sun!
              Signs/symptoms of heat exhaustion
              fatigue
              cool/pale/ashen skin with profuse sweating
              headache I dizziness I nausea I vomiting CJ Children and elderly folks are especially at risk. Intervention  for  heat  exhaustion
              Get the patient to shade.
              Fan the patient.
              Remove excess clothing.
              Have them drink water no hardcore sports drinks or powders unless heavily diluted.
              Signs/symptoms of heat stroke
              Skin may be moist or dry, as in no longer sweating
              Disorientation I deliriousness
              Loss of consciousness
              Treatment for heat stroke
              Get the patient somewhere cool right away.
              Remove clothing
              Apply cold packs to neck, armpits, inner thighs
              Fan and mist but do not soak skin or clothes
              Always activate emergency response for heat stroke. An air-conditioned taxi to the nearest ED might be the best option.
              Counsel prevention
              To avoid these awful eventualities, on hot days encourage activists to:
              Cover as much of their body with light clothing as they can stand, slather the rest in sun block.
              Stay hydrated and within their physical limits -- overdoing it costs medical resources

              29
              </Text>
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
