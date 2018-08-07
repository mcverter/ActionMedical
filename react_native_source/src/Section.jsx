import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const Section = (props) => {
  return (
    <View style={styles.allComponentContainer}> {
      /*
      - if attr? 'canvas-image'
  %section{:id=>@id, :class=>['slide', 'canvas-image', role], :style=>"background-image: url(#{attr 'canvas-image'})"}
    =content.chomp
- else
  %section.slide{:id=>@id, :class=>role}
    - if has_role? 'title'
      %h1=title
    - else
      %h2=title
    =content.chomp

       */
    }
    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default Section;


/*
    <section className="slide" id="_street_medic_gear">
        <h2>Street Medic Gear</h2>
        <div className="dlist">
            <dl>
                <dt className="hdlist1">Basic first aid supplies</dt>
                <dd>
                    <div className="ulist checklist">
                        <ul className="checklist">
                            <li><i className="icon-check-empty"></i> water (and extra containers)</li>
                            <li><i className="icon-check-empty"></i> roller gauze</li>
                            <li><i className="icon-check-empty"></i> gauze pads (assorted)</li>
                            <li><i className="icon-check-empty"></i> bandaids (assorted)</li>
                            <li><i className="icon-check-empty"></i> Tagaderm strips</li>
                            <li><i className="icon-check-empty"></i> SAM splint / wire splint</li>
                            <li><i className="icon-check-empty"></i> wrapping supplies like Ace bandages</li>
                            <li><i className="icon-check-empty"></i> burn treatment pads/gel</li>
                            <li><i className="icon-check-empty"></i> instant ice packs</li>
                        </ul>
                    </div>
                </dd>
            </dl>
        </div>
        <div style="page-break-after: always"></div>
        <div className="dlist">
            <dl>
                <dt className="hdlist1">Basic street medic gear</dt>
                <dd>
                    <div className="ulist checklist">
                        <ul className="checklist">
                            <li><i className="icon-check-empty"></i> cell phone</li>
                            <li><i className="icon-check-empty"></i> red duct tape</li>
                            <li><i className="icon-check-empty"></i> nitrile exam gloves</li>
                            <li><i className="icon-check-empty"></i> trauma sheers</li>
                            <li><i className="icon-check-empty"></i> medical tape</li>
                            <li><i className="icon-check-empty"></i> street medic designation insignia</li>
                            <li><i className="icon-check-empty"></i> more gloves</li>
                            <li><i className="icon-check-empty"></i> energy bars / gel</li>
                        </ul>
                    </div>
                </dd>
            </dl>
        </div>
        <div style="page-break-after: always"></div>
        <div className="dlist">
            <dl>
                <dt className="hdlist1">Advanced first aid supplies</dt>
                <dd>
                    <div className="ulist checklist">
                        <ul className="checklist">
                            <li><i className="icon-check-empty"></i> CPR face mask/shield</li>
                            <li><i className="icon-check-empty"></i> airway adjuncts</li>
                            <li><i className="icon-check-empty"></i> pen light</li>
                            <li><i className="icon-check-empty"></i> tourniquet</li>
                            <li><i className="icon-check-empty"></i> valved/occlusive dressing</li>
                            <li><i className="icon-check-empty"></i> epipen</li>
                            <li><i className="icon-check-empty"></i> skin adhesive</li>
                            <li>
                                <i className="icon-check-empty"></i> LAW<div className="ulist">
                                <ul>
                                    <li>small bottle for drops, swabs, mouthwash</li>
                                </ul>
                            </div></li>
                        </ul>
                    </div>
                </dd>
            </dl>
        </div>
        <div style="page-break-after: always"></div>
        <div className="dlist">
            <dl>
                <dt className="hdlist1">Personal protective equipment (PPE)</dt>
                <dd>
                    <div className="ulist checklist">
                        <ul className="checklist">
                            <li>
                                <i className="icon-check-empty"></i> gas mask<div className="ulist">
                                <ul>
                                    <li>must be military grade</li>
                                </ul>
                            </div></li>
                            <li>
                                <i className="icon-check-empty"></i> respirator<div className="ulist">
                                <ul>
                                    <li>must filter particulate and organic irritants</li>
                                </ul>
                            </div></li>
                            <li>
                                <i className="icon-check-empty"></i> swim-goggles<div className="ulist">
                                <ul>
                                    <li>good seal, silocone not foam</li>
                                </ul>
                            </div></li>
                            <li>
                                <i className="icon-check-empty"></i> bandana<div className="ulist">
                                <ul>
                                    <li>soaking with apple cider vinegar filters tear gas</li>
                                    <li>dust mask underneath recommended</li>
                                </ul>
                            </div></li>
                            <li>
                                <i className="icon-check-empty"></i> helmet<div className="ulist">
                                <ul>
                                    <li>military or construction grade</li>
                                </ul>
                            </div></li>
                        </ul>
                    </div>
                </dd>
            </dl>
        </div>
        <div style="page-break-after: always"></div>
        <div className="dlist">
            <dl>
                <dt className="hdlist1">Street medic attire</dt>
                <dd>
                    <div className="ulist">
                        <ul>
                            <li>Dress for patient trust.</li>
                            <li>Dress for “authority drag”.</li>
                        </ul>
                    </div>
                </dd>
            </dl>
        </div>
        <div className="admonitionblock tip mini">
            <table>
                <tr>
                    <td className="icon">
                        <i className="icon-tip"></i>
                    </td>
                    <td className="content">
                        There is no uniform or hard/fast rule to attire other than exhibiting best practices in coverage, preferred fabric, and reliable footwear.
                        But balance not looking like a cop with not looking like you don&#8217;t bathe.
                    </td>
                </tr>
            </table>
        </div>
        <div className="admonitionblock tip mini">
            <table>
                <tr>
                    <td className="icon">
                        <i className="icon-tip"></i>
                    </td>
                    <td className="content">
                        Military gas masks look pretty intimidating.
                    </td>
                </tr>
            </table>
        </div>
    </section>

 */