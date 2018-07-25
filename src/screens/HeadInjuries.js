import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class HeadInjuries extends Component {
static navigationOptions = {title: 'HeadInjuries'};
    render() {
         return (
            <View style={styles.Container}>
              <Text>
              Head Injuries
              Head injuries are caused by the brain bouncing back and forth during trauma; Brain can swell; bleeding can be seen as fluid is forced out
              Concussion: if they sustain a concussi on (ex. football injuries), a repeat injury is a danger for pennanent damage
              Signs of Distress: Bleeding from ears, nose
              Black eyes (raccoon eyes)
              Bruising or fluid collected behind the ear (battle sign)
              Disoriented, in-itable, combative, comatose/unresponsive, seizures ( DICCS)
              In these cases, they CANNOT give informed consent: in these cases, keep an eye, until consent is given or person becomes unresponsive
              Pulse slowing down (working harder)
              lfthere is a head wound on the skull: DO NOT APPLY direct pressure to stop bleeding; make a donut bandage to surround the wound but exert pressure around the wound
              How to make a donut bandage
              1. Used to make sure the wou nd is treated without direct pressure
              2. Use  roller bandage; looping the bandage around in a finger-width and curve around into a circle wrap bandage around head; hook bandage wrap around the knob at the base of skull
              Aftercare
              1. Wake person up for every few hours (depending on Doctor's rec) for 48 hours to check their vitals; if there is double vision, dizziness, condition worsens,  ·seeing stars'', or flashes oflight, they must go to hospjtal
              2. For those who don't exhibit these signs, they should still be watched
              3. Cannot drink alcohol or take drugs for 48 hours
              4. Should have buddy to monitor them in case they develop these symptoms
              5. Continue to monitor A&O
              6. People with untreated head injury  is susceptible to another injury with worse damage
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

export default HeadInjuries;
