import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import CollapsibleUnorderedList from "../components/CollapsibleUnorderedList";

class SoftTissueInjury extends Component { 
     definitions = [{
         title: 'Some injuries we treat in the field',
         content: [
             'minor lacerations',
             'scrapes',
             'minor bruises',
             'When no complications are associated with a superficial injury, street medics may provide complete primary care.',
         ]
     }]
     openWounds = [{
         title: 'Open wounds (general treatment)',
         content: [
             'Once bleeding is controlled ...',
             '1. Irrigate the wound with water, saline, or diluted providone-iodine diluted in water (1: 10).',
             '2. Securely apply clean bandaging to keep wound covered, clean, and dry and maintain gentle direct pressure.',
             'Never use peroxide or alcohol, which damage tissue and slow healing.',
         ]
     }]
     lacerations = [{
         title: 'Refer lacerations for suturing under these conditions',
         content: [
             'animal bite',
             'over a joint',
             'cosmetic concerns',
             'jagged  edges I won\'t close easily',
             'half-inch or more depth',
         ]
     }]
     punctureWounds = [{
         title: 'Puncture wounds',
         content: [
             '1. Do your best to irrigate.',
             '2. Refer for care and warn of signs of infection.',
             '0 high risk of infection (no self-irrigation)',
             '0  difficult/painful to properly irrigate',
         ]
     }]
     avulsions = [{
         title: 'Avulsions',
         content: [
             'Replace the \'\'flap" and bandage in place.',
             'Associated with increased risk of infection.',
             'Refer to ED or urgent care.',
         ]
     }]
     impaled = [{
         title: 'Impaled object ',
         content: [
             'Never remove an impaled object larger than a splinter.',
             'I. Loosel y apply sterile dressing.',
             '2. Bandage around object for stability.',
             '3. Apply direct pressure near impalement without moving the object.',
             '4. Refer to ED or emergency transport for large/deep objects',
         ]
     }]
     teeth = [{
         title: 'Missing teeth',
         content: [
             '1. Replace lost tooth into socket or store in container with patient\'s own saliva.',
             '2. Have patient bite gently on wad of gauze.',
             '0  Do not touch the root of the tooth.',
             '0  Patient needs to see a dentist ASAP.',
         ]
     }]
     eye = [{
         title: 'Eye injuries',
         content: [
             ' 1. Cover the injured eye completely.',
             '2. In stable environment, bandaging uninjured eye with a pinhole to decrease likelihood of injured eye movement.',
                      ]
     }]
     contusions = [{
         title: 'Contusions',
         content: [
             'Minor bruisi ng is treated with rest and ice.',
             'Major bruising gets referred to ED or urgent care.',
         ]
     }]
static navigationOptions = {title: 'Soft Tissue Injury'};
    render() {
         return (
            <View style={styles.SoftTissueInjuryContainer}>
                <Text>Impaled Object: Donut bandage</Text>
              <CollapsibleUnorderedList sections={this.definitions} />
              <CollapsibleUnorderedList sections={this.openWounds} />
              <CollapsibleUnorderedList sections={this.lacerations} />
              <CollapsibleUnorderedList sections={this.punctureWounds} />
              <CollapsibleUnorderedList sections={this.avulsions} />
              <CollapsibleUnorderedList sections={this.impaled} />
              <CollapsibleUnorderedList sections={this.teeth} />
              <CollapsibleUnorderedList sections={this.eye} />
              <CollapsibleUnorderedList sections={this.contusions} />
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
