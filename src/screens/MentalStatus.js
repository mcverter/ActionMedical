import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class MentalStatus extends Component {
static navigationOptions = {title: 'MentalStatus'};
    render() {
         return (
            <View style={styles.Container}>
              <Text>
              Mental  Status
              Is the patient alert and oriented?
              Has the patient lost consciousness?
              Do they respond readily and as expected? D
              Any prior loss of consciousness or current altered mental status is a red flag. Altered mental status  - A V P U scale
              A - alert and oriented
              V- responds to verbal stimuli P- responds to painful stimuli U - unresponsive
              Procedure
              1. If the patient is alert, assess their orientation:
              0 What's your name?
              0 What happened to you?
              0 What month is it?
              0  Where are we right now?
              0  Did you lose consciousness at any point?
              2. If the patient is not alert, try addressing them loudly.
              3. Ifverbal stimulus doesn't work, apply some acute pain.
              4. Ifthis does not work, the patient is unresponsive.
              Reasoning
              We assess mental status for multiple reasons:
              The patient's critical medical needs.
              Our own safety in cases where an injured patient may be frightened or agitated.
              lf we miss altered mental status or prior unconsciousness, we may be missi ng much more.
              Notes on mental status assessment
              Stay aware of changes in mental status throughout treatment.
              Relay the patient's status history when handing off to advanced care.
              Don't ask closed-ended questions, such as, "Do you know where we are right now?" Questions with existentialist interpretations are preferred, such as, ''Where are we?" and "Who is in charge of the United States?"
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

export default MentalStatus;
