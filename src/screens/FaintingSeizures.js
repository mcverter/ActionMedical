import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class FaintingSeizures extends Component {
static navigationOptions = {title: 'FaintingSeizures'};
    render() {
         return (
            <View style={styles.Container}>
              <Text>
              Fainting
              Cause: Dehydration, Head injury, Psychic Shock
              Falls twice their height or more is dangerous; they should have a C-Spine check
              People with fainting disorders would know their own care; if this is their first faint for no reason, they should be checked out; Call 911 if out for longer than 2 minutes
              DO NOT give unresponsive people water
              Seizures
              Causes: people march without medication; they will immediately drop to the ground hard on their back and convulse rapidly; people with disorders have an aura and would usually lie down if they recognize they are about to have one
              Unknown signs: Confusion, slurred speech; can be soiled themselves; can be embarrassing; people can be angry; shaking, shaking head, trembling, grinding of teeth, being spaced out
              Results: They could vomit, release bowels, swallow spit and bite tongue
              TREATMENT DURING SEIZURE: Padding under their head making sure they do not hit their head; privacy circle
              Talk reassuringl y; monitor breathing for Airway and Breathing
              Do NOT put things in people's mouth
              Do NOT restrain the person
              If Airway is blocked, you can try to put in Recovery Position to protect tongue-biting
              CALL 911: Seizing longer than 5 MINUTES is great concern; most last 30-seconds to a minute
              Also good note to time seizures for frequency for FYI
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

export default FaintingSeizures;
