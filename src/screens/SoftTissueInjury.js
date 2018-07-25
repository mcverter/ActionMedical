import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class SoftTissueInjury extends Component { 
static navigationOptions = {title: 'SoftTissueInjury'};
    render() {
         return (
            <View style={styles.SoftTissueInjuryContainer}>
              <Text>
              Some injuries we treat in the field
              minor lacerations
              scrapes
              minor bruises
              When no complications are associated with a superficial injury, street medics may provide complete primary care.
              Open wounds (general treatment)
              Once bleeding is controlled ...
              1. Irrigate the wound with water, saline, or diluted providone-iodine diluted in water (1: 10).
              2. Securely apply clean bandaging to keep wound covered, clean, and dry and maintain gentle direct pressure.
              Never use peroxide or alcohol, which damage tissue and slow healing.
              Refer lacerations for suturing under these conditions
              animal bite
              over a joint
              cosmetic concerns
              jagged  edges I won't close easily
              half-inch or more depth
              Puncture wounds
              1. Do your best to irrigate.
              2. Refer for care and warn of signs of infection.
              0 high risk of infection (no self-irrigation)
              0  difficult/painful to properly irrigate
              Avulsions
              Replace the ''flap" and bandage in place.
              Associated with increased risk of infection.
              Refer to ED or urgent care.
              Impaled object Never remove an impaled object larger than a splinter.
              I. Loosel y apply sterile dressing.
              2. Bandage around object for stability.

              26






              3. Apply direct pressure near impalement without moving the object.
              4. Refer to ED or emergency transport for large/deep objects
              Impaled Object: Donut bandage Missing teeth
              1. Replace lost tooth into socket or store in container with patient's own saliva.
              2. Have patient bite gently on wad of gauze.
              0  Do not touch the root of the tooth.
              0  Patient needs to see a dentist ASAP.
              Eye injuries
              1. Cover the injured eye completely.
              2. In stable environment, bandaging uninjured eye with a pinhole to decrease likelihood of injured eye movement.
              Contusions
              Minor bruisi ng is treated with rest and ice.
              Major bruising gets referred to ED or urgent care.
              </Text>
            </View>
        );
    }
 }
const styles = StyleSheet.create({
    SoftTissueInjuryContainer: {
        flex: 1,
    },
});

export default SoftTissueInjury;
