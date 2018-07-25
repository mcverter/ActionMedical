import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class InitialAssessment extends Component {
static navigationOptions = {title: 'InitialAssessment'};
    render() {
         return (
            <View style={styles.InitialAssessmentContainer}>
             <Text>
              Initial Assessment Intro
              Purpose of initial assessment
              To identify life-threatening or potential life-threatening conditions.
              Initial assessment is a protocol
              We perform it in a specific order.
              We do not skip steps.
              We only interrupt it to perform life-saving interventions.

              Red flags
              The initial assessment is a search for red flags: indicators of potential life-threatening conditions.
              As soon as you find a red flag, you'll need to call for backup.
              There are lots of gray areas in first aid. Street medics tend not to rule conditions out.
              If it could be a red flag, it's a red flag.
              DEMO: IA Run-through
              Tips for learning initial assessments
              Initial assessment is probably the hardest skill medics perform.
              You will screw up more than you get right at first.
              It can be harder in trainings than IRL.
              Ask your partner for help if you get stuck.
              Make your mistakes in settings like this.
              Tips for performing initial assessments
              If s unintuitive, but go slow.
              Vocalize steps as you go.
              Only stop for l(fe-saving  interventions.
              Initial Assessment Overview
              M - Mechanism of Injury
              M - Mental Status A - Airway
              B - Breathing C- Circulation D- Disability
              E- Environment
             </Text>
            </View>
        );
    }
 }
const styles = StyleSheet.create({
    InitialAssessmentContainer: {
        flex: 1,
    },
});

export default InitialAssessment;
