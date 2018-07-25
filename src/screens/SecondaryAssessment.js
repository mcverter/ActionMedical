import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class SecondaryAssessment extends Component {
static navigationOptions = {title: 'SecondaryAssessment'};
    render() {
         return (
            <View style={styles.SecondaryAssessmentContainer}>
              <Text>
              Secondary Assessment
              After initial assessment is complete and life-saving interventions administered, it's time for a secondary assessment.
              Purpose
              Help catch factors that may inform your assessment or care.
              Gather information that may be helpful to further providers should conditions change, such as patient loses consciousness.
              If your patient is alert, gather a focused medical history.
              S A M P L E history
              S - signs/symptoms
              A - allergies
              M - medications
              P - past medi cal history
              L - last food and drink
              E - events leading up to illness/incident
              Focused trauma assessment
              Head-to-toe exams are administered whenever the mechanism of injury (MOI) suggests there may be injuries or signs you have missed.
              Check for consent for focused assessments, even if the patient already consented to initial assessment.
              "Can I ask you some more questions about your medical history and what's going on?" "Is it okay if I examine you some more to make sure there's nothing we're missing?" Explain what you 're doing as you go!
              Your unresponsive trauma patient ...
              is already in C-spine stabilization, right?
              needs a head to toe blood sweep to see if undetected blood loss is collected in clothing or the ground.
              </Text>
            </View>
        );
    }
 }
const styles = StyleSheet.create({
    SecondaryAssessmentContainer: {
        flex: 1,
    },
});

export default SecondaryAssessment;
