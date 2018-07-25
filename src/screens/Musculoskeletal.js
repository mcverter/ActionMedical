import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class Musculoskeletal extends Component { 
static navigationOptions = {title: 'Musculoskeletal'};
    render() {
         return (
            <View style={styles.MusculoskeletalContainer}>
              <Text>
              Musculoskeletal Injuries
              Injuries to bones, muscles, and the stuff holding it all together, most especially:

              breaks (bone fractures)
              sprains (injury to the ligaments between bones)
              strains (injury to muscles and/or tendons)
              dislocations (dislodgment of long bone from joint)
              Differentiating between breaks and sprains
              Except in cases of obvious factures (deformity/exposed bone), don't bother diagnosing -we treat them all the same.
              Only an X-ray can rule out fracture, and it's never worth risking. Always refer what you think are sprains for immediate follow-up care.
              Treatment is the same for all
              1. Examine the site.
              2. Check pulses/perfusion  (compare to opposite side).
              3. Treat any wounds at the site.
              4. Treat with RICE.
              R I C E
              R - rest
              I- ice
              C - compression
              E - elevation
              RICE treats pain, prevents exacerbation, and restricts swelling.
              Rest includes immobilization and protection of the injury site.
              Ice = 20 minutes on, 20 minutes off.
              Principles for immobilizing musculoskeletal injuries
              For long bones, immobilize at least the joints "above and below" the injured bone.
              For joints, immobilize the long bones connected to the joint.
              Protect the injury site.
              Check perfusion before wrapping/splinting.
              Dislocations in the field
              If you have not been specifically trained to treat a specific type of dislocation, do not

              32



              •

              attempt to relocate a dislocated bone.
              Treat with RICE and refer to ED or urgent care.
              Practical: Basic Splinting

              Space for notes
              </Text>
            </View>
        );
    }
 }
const styles = StyleSheet.create({
    MusculoskeletalContainer: {
        flex: 1,
    },
});

export default Musculoskeletal;
