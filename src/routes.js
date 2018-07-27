import React from 'react';
import {createStackNavigator} from 'react-navigation'
import Airway from './screens/Airway';
import DisabilityEnvironment from './screens/DisabilityEnvironment';
import Musculoskeletal from './screens/Musculoskeletal';
import BleedingShock from './screens/BleedingShock';
import FaintingSeizures from './screens/FaintingSeizures';
import PartnerSync from './screens/PartnerSync';
import BodySubstanceIsolation from './screens/BodySubstanceIsolation';
import Gear from './screens/Gear';
import SceneAssessment from './screens/SceneAssessment';
import Breathing from './screens/Breathing';
import HeadInjuries from './screens/HeadInjuries';
import SecondaryAssessment from './screens/SecondaryAssessment';
import Circulation from './screens/Circulation';
import HotWeather from './screens/HotWeather';
import SoftTissueInjury from './screens/SoftTissueInjury';
import ColdWeather from './screens/ColdWeather';
import InitialAssessment from './screens/InitialAssessment';
import StreetMedicOrganizing from './screens/StreetMedicOrganizing';
import Consent from './screens/Consent';
import TableOfContents from './screens/TableOfContents';
import CSpine from './screens/CSpine';
import MechanismOfInjuty from './screens/MechanismOfInjury';
import TearGas from './screens/TearGas';
import Diabetic from './screens/Diabetic';
import MentalStatus from './screens/MentalStatus';
import Triage from './screens/Triage';


export default createStackNavigator({
  Airway: Airway,
  DisabilityEnvironment: DisabilityEnvironment,
  Musculoskeletal: Musculoskeletal,
  BleedingShock: BleedingShock,
  FaintingSeizures: FaintingSeizures,
  PartnerSync: PartnerSync,
  BodySubstanceIsolation: BodySubstanceIsolation,
  Gear: Gear,
  SceneAssessment: SceneAssessment,
  Breathing: Breathing,
  HeadInjuries: HeadInjuries,
  SecondaryAssessment: SecondaryAssessment,
  Circulation: Circulation,
  HotWeather: HotWeather,
  SoftTissueInjury: SoftTissueInjury,
  ColdWeather: ColdWeather,
  InitialAssessment: InitialAssessment,
  StreetMedicOrganizing: StreetMedicOrganizing,
  Consent: Consent,
  TableOfContents: TableOfContents,
  CSpine: CSpine,
  MechanismOfInjuty: MechanismOfInjuty,
  TearGas: TearGas,
  Diabetic: Diabetic,
  MentalStatus: MentalStatus,
  Triage: Triage,
}, {
  initialRouteName : 'TableOfContents'
});

