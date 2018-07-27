import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import CollapsibleUnorderedList from "../components/CollapsibleUnorderedList";

class MechanismOfInjuty extends Component {
  moiDefinition = [{
      title: 'MOI definition',
      content: [
          'The immediate cause of an injury or sudden illness.',
          'Do not think like a radical at this stage!',
          'It\'s not the root cause, but the direct cause.',
      ]
  }]
  moiPurpose = [{
      title: 'MOI purpose',
      content: [
          'Whether the danger persists',
          '0 potential harm to you, e.g.',
          '·cops',
          'traffic',
          '0 continuing to harm the patient, e.g.',
          'bums',
          'ongoing brutality',
          'vehicle',
      ]
  }]

  moiPersistent = [{
      title: 'Persistent MOI',
      content: [
                    'The other potential red flag for the MOI stage is a persistent mechanism of injury.',
          '1. What is the MOI for a burn?',
          '0  Heat -so that\'s what we try to address.',
          '2. How about MOI for an impaled object?',
          '0 The object -we don\'t remove these, so we\'re going need further care.',
          'Persistent MOI calls for intervention. Ifyou cannot intervene safely or successfully, get help!',
      ]
  }]

static navigationOptions = {title: 'Mechanism of Injury (MOI)'};
    render() {
         return (
            <View style={styles.MechanismOfInjutyContainer}>

              <Text>
              </Text>
              <CollapsibleUnorderedList sections={this.moiDefinition} />
              <CollapsibleUnorderedList sections={this.moiPurpose} />
              <CollapsibleUnorderedList sections={this.moiPersistent} />
            </View>
        );
    }
 }
const styles = StyleSheet.create({
    MechanismOfInjutyContainer: {
        flex: 1,
    },
});

export default MechanismOfInjuty;
