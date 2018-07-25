import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class MechanismOfInjuty extends Component {
static navigationOptions = {title: 'MechanismOfInjuty'};
    render() {
         return (
            <View style={styles.MechanismOfInjutyContainer}>

              <Text>
              Mechanism of Injury (MOI)
              The immediate cause of an injury or sudden illness.
              Do not think like a radical at this stage!
              It's not the root cause, but the direct cause.
              MOI determines
              Whether the danger persists
              0 potential harm to you, e.g.
              ·cops
              traffic
              0 continuing to harm the patient, e.g.
              bums
              ongoing brutality
              vehicle

              Persistent MOI
              The other potential red flag for the MOI stage is a persistent mechanism of injury.
              1. What is the MOI for a burn?
              0  Heat -so that's what we try to address.
              2. How about MOI for an impaled object?
              0 The object -we don't remove these, so we're going need further care.
              Persistent MOI calls for intervention. Ifyou cannot intervene safely or successfully, get help!
              </Text>
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
