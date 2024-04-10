import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Contact() {
  const [firstname, setName] = useState("");
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const contact_id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";

  useEffect(() => {
    if (contact_id) {
      getUser();
    }
  }, []);
  const getUser = async () => {
    const url = "http://localhost:3000/gurukulalumni/contact_us/" + contact_id;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    setEmail(res.data.email);
    setDescription(res.data.description);
  };

  return (
    <div>
      <main>
        <button
          ng-show="info.show.aboutDesc || info.show.messages"
          className="mdl-button mdl-js-button mdl-button--fab mdl-js-rippleeffect mdl-button--colored navigation-button mdl-cell--hide-tablet mdl-cell--hide-phone animated fadeInUpBig"
          style={{ height: "40px", width: "40px", minWidth: "20px" }}
          ng-click="getElements()"
          fdprocessedid="4t4r37"
          data-upgraded=",MaterialButton"
        >
          <i
            className="icon-keyboard_arrow_down ng-hide"
            ng-show="!changeArrow"
          />
          <i className="icon-keyboard_arrow_up" ng-show="changeArrow" />
        </button>

        <div
          className="about-strip-change autoscroll-class mdl-color--primary-dark"
          id="contactcd"
          ng-show="info.show.contact"
        >
          <div className="mdl-grid about-size">
            <h2 className="about-title about-size mdl-typography--font-light mdl-color-text--white ng-binding">
              Contact Us
            </h2>
          </div>
        </div>
        <div
          className="mdl-grid change-size contact-div"
          style={{ marginBottom: "10px" }}
          ng-show="info.show.contact"
        >
          <div className="mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet">
            <div className="mdl-card contact-card mdl-shadow--2dp">
              <div className="mdl-card--border card-detail">
                <div className="mdl-card__title-text m-b-20 ng-binding">
                  Contact Info
                </div>
                <div
                  ng-show="!contact_details.address && $root.featureEnabled('homepage_cms') && $root.app_data.isAdmin"
                  className="ng-hide"
                >
                  {/* <div className="mdl-color-text--red-800 margin-bottom-16 ng-binding">
                    Address not available! <br />
                    Please add your institute address.
                  </div> */}
                  <a
                    ui-sref="inapp.admin({'category': 'about_institute', 'tab': 'about_institute'})"
                    className="link-detail mdl-color-text--primary ng-binding"
                    href="/admin?category=about_institute&tab=about_institute&cbt=_"
                  >
                    <i className="icon-add" />
                    Add Address
                  </a>
                </div>
                <div
                  className="mdl-typography--font-light font-16 mdl-color-text--grey-600 ng-binding"
                  style={{ lineHeight: "28px", marginBottom: "20px" }}
                  ng-bind-html="contact_details.address | asNewLines"
                  ng-show="contact_details.address != '' && contact_details.address != ' ' && contact_details.address!=0"
                >
                  Shree Swaminarayan College of Computer Science Gurukul Campus
                  , Sardarnagar , Bhavnagar
                </div>
                <div
                  style={{ marginBottom: "6px" }}
                  ng-show="contact_details.phone && contact_details.phone!=0"
                  className="flexbox"
                >
                  <div className="margin-right-8">
                    <i className="icon-phone font-16 mdl-color-text--grey-600" />
                  </div>
                  <div>
                    <a
                      className="font-16 mdl-typography--font-light mdl-color-text--grey-600 link-detail ng-binding ng-scope"
                      ng-repeat="phone in contact_details.phone.split(',')"
                    >
                      +91 9999999999
                    </a>
                  </div>
                </div>
                <div
                  style={{ marginBottom: "6px" }}
                  ng-show="contact_details.email && contact_details.email!=0"
                  className="flexbox"
                >
                  <div className="margin-right-8">
                    <i className="icon-email font-16 mdl-color-text--grey-600" />
                  </div>
                  <div>
                    <a
                      className="font-16 mdl-typography--font-light mdl-color-text--grey-600 link-detail ng-binding ng-scope"
                      ng-href="mailto:admin@gyanmanjarividyapith.edu.in"
                      ng-repeat="email in contact_details.email.split(',')"
                      href="mailto:admin@gyanmanjarividyapith.edu.in"
                    >
                      admin@gurukulalumni.edu.in
                    </a>
                  </div>
                </div>
                <div
                  style={{ marginBottom: "20px", wordWrap: "break-word" }}
                  ng-show="contact_details.website != '' && contact_details.website != ' ' && contact_details.website!=0"
                  className
                >
                  <i className="icon-link font-16 adjust-icon margin-right-8 mdl-color-text--grey-600" />
                  <a
                    className="font-16 mdl-typography--font-light mdl-color-text--grey-600 link-detail ng-binding"
                    href="https://www.swamigurukul.com/"
                    target="_blank"
                  />
                  https://www.swamigurukul.com/
                </div>
                <div>
                  <a
                    ng-if="contact_details.facebook && contact_details.facebook!=0"
                    href="https://www.facebook.com/Gyanmajari-Vidyapith-109904388452507"
                    target="_blank"
                    className="mdl-button mdl-js-button mdl-button--fab facebook-bg-color mdl-color-text--white font-16 share-social new-icon ng-scope"
                    data-upgraded=",MaterialButton"
                  >
                    <i className="icon-facebook social-buttons-icons" />
                  </a>
                  <a
                    ng-if="contact_details.linkedin && contact_details.linkedin!=0"
                    href="https://www.linkedin.com/company/gyanmanjari-vidyapith/"
                    target="_blank"
                    className="mdl-button mdl-js-button mdl-button--fab mdl-color--blue-700 mdl-color-text--white font-16 share-social new-icon ng-scope"
                    data-upgraded=",MaterialButton"
                  >
                    <i className="icon-linkedin social-buttons-icons" />
                  </a>
                  <a
                    ng-if="contact_details.twitter && contact_details.twitter!=0"
                    href="https://twitter.com/Gyanmanjaribhav"
                    target="_blank"
                    className="mdl-button mdl-js-button mdl-button--fab twitter-color mdl-color-text--white font-16 share-social new-icon ng-scope"
                    data-upgraded=",MaterialButton"
                  >
                    <i className="icon-x social-buttons-icons" />
                  </a>

                  <a
                    ng-if="contact_details.youtube && contact_details.youtube!=0"
                    href="https://www.youtube.com/channel/UCPYdAnPygpfnQcbP6Yx24wg"
                    target="_blank"
                    className="mdl-button mdl-js-button mdl-button--fab mdl-color--red-500 mdl-color-text--white font-16 share-social new-icon ng-scope"
                    data-upgraded=",MaterialButton"
                  >
                    <i className="icon-User_Profile_Play social-buttons-icons font-14" />
                  </a>
                  <a
                    ng-if="contact_details.instagram && contact_details.instagram!=0"
                    href="https://www.instagram.com/gca2018bvn/"
                    target="_blank"
                    className="mdl-button mdl-js-button mdl-button--fab mdl-color--pink-A700 mdl-color-text--white font-16 share-social new-icon ng-scope"
                    data-upgraded=",MaterialButton"
                  >
                    <i className="icon-instagram social-buttons-icons font-14" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="mdl-shadow--2dp mdl-color--white margin-top-20 ng-scope"
              ng-if="$root.featureEnabled('contactus_form') && $root.appmeta.forms.contactus_form && $root.featureEnabled('contactus_map',true)"
            >
              <div
                ng-if="!$root.featuresFactory.getFeature('contactus_form.custom_reachout_form',null)"
                className="ng-scope"
              >
                <as-forms
                  formid="$root.appmeta.forms.contactus_form"
                  lazy-load="true"
                  className="ng-isolate-scope"
                >
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n\t\t/* The starting CSS styles for the enter animation */\n\t.fade.ng-enter {\n\t  transition:0.5s linear all;\n\t  opacity:0;\n\t}\n\n\t/* The finishing CSS styles for the enter animation */\n\t.fade.ng-enter.ng-enter-active {\n\t  opacity:1;\n\t}\n\t.asformfield_description p{\n\t\tmargin:0;\n\t\tcolor:rgb(97,97,97) !important;\n\t\tfont-weight: unset;\n\t\tfont-size: 14px;\n\t}\n\n\t.social-share-margin{\n\t\tmargin-left: 4px;\n\t}\n\n\t@media screen and (max-width: 480px) {\n\t\t.social-share-margin{\n\t\t\tmargin-left: -18px;\n\t\t}\n\t}\n",
                    }}
                  />
                  <div id="oberve_form">
                    <div
                      ng-if="formid>0 || formfields.length>0"
                      style={{ marginTop: "0px" }}
                      className="ng-scope"
                    >
                      <div className="padding-bottom-10 padding-top-24 padding-lr-40 padding-lr-xs-16 ng-hide">
                        <h1 className="mdl-card__title-text">
                          <span className="ng-binding">Reach Out</span>
                        </h1>
                      </div>

                      <div
                        ng-show="formDetails.metadata.small_image && formDetails.description"
                        className="mdl-color-text--grey-600 mdl-typography--font-regular margin-top-12 margin-bottom-24 padding-lr-40 padding-lr-xs-16 ng-binding ng-hide"
                        ng-bind-html="formDetails.description"
                      />

                      <div ng-if="!loading" className="ng-scope">
                        <div
                          ng-show="(formDetails.status==undefined || formDetails.status==0) && !showUniqueRespMsg"
                          className="mdl-card__actions mdl-card--border main-family mdl-grid center-section-padding"
                          ng-attr-style="{{options.styles.div2 ? options.styles.div2: 'padding:15px;'}}"
                          style={{ padding: "15px" }}
                        >
                          <div
                            className="mdl-cell mdl-cell--12-col mdl-typography--font-light job-details-padding "
                            ng-attr-style="{{options.styles.div3 ? options.styles.div3: ''}}"
                          >
                            <div
                              ng-if="!showSuccessMsg"
                              ng-repeat="field in formfields | orderObjectBy:'order'"
                              className="m-b-20"
                              ng-show="!(field.disabled && field.disabled==='hidden') && isFieldVisible(field,true)"
                              ng-attr-style="{{field.metadata.styles.div1 ? field.metadata.styles.div1: ''}}"
                            >
                              <div
                                ng-if="!field.metadata.remove_title && field.type!=13 && !(field.disabled && field.disabled==='hidden')"
                                className="ng-scope"
                              >
                                <div
                                  ng-if="field.type!=6 || field.metadata.link_type"
                                  ng-class="pref.designpref.signupInputElement && 'font-12 mdl-typography--font-light mdl-color-text--primary'"
                                  className="ng-scope"
                                >
                                  <span
                                    ng-class="pref.designpref.titleClasses || 'mdl-color-text--primary'"
                                    className="ng-binding mdl-color-text--primary"
                                  >
                                    Your Name
                                  </span>
                                  <span
                                    ng-if="field.is_required==1 && !field.hideCompulsory && !options.hideStarForCompulsory"
                                    className="ng-scope"
                                  >
                                    *
                                  </span>
                                </div>
                                <div
                                  ng-if="field.type!=6"
                                  className="font-14 mdl-color-text--grey-700 asformfield_description ng-scope"
                                  bind-html-compile="field.description"
                                />
                              </div>
                              <div
                                ng-if="field.disabled && field.disabled!=='hidden'"
                                className="ng-scope"
                              >
                                <div className="margin-top-8">
                                  <span
                                    ng-if="field.type!=8"
                                    className="ng-scope"
                                  >
                                    <span className="ng-binding ng-scope">
                                      Karmarajsinh Gohil
                                    </span>
                                  </span>
                                  <div
                                    className="mdl-tooltip ng-binding"
                                    data-mdl-for="field_dsbl_112"
                                    data-upgraded=",MaterialTooltip"
                                  >
                                    You are not allowed to edit this field.
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="m-b-20">
                              <div className="ng-scope">
                                <div className="ng-scope">
                                  <span className="ng-binding mdl-color-text--primary">
                                    Your Email
                                  </span>
                                  <span
                                    ng-if="field.is_required==1 && !field.hideCompulsory && !options.hideStarForCompulsory"
                                    className="ng-scope"
                                  >
                                    *
                                  </span>
                                </div>
                                <div
                                  ng-if="field.type!=6"
                                  className="font-14 mdl-color-text--grey-700 asformfield_description ng-scope"
                                  bind-html-compile="field.description"
                                />
                              </div>

                              <div ng-if="!field.disabled" className="ng-scope">
                                <div
                                  ng-if="field.type==1"
                                  className="mdl-textfield mdl-js-textfield maximize-width is-upgraded"
                                  style={{ marginTop: "-15px" }}
                                  data-upgraded=",MaterialTextfield"
                                >
                                  <input
                                    className="mdl-textfield__input ng-pristine ng-untouched ng-valid ng-empty"
                                    type="textbox"
                                    name="field_113"
                                    ng-disabled="field.disabled || (field.metadata.otp.enabled && field.metadata.otp.sent>0)"
                                    ng-model="formData[field.id]"
                                    ng-change="fieldValidation(field)"
                                    fdprocessedid="qu11mq"
                                  />
                                  <label
                                    className="mdl-textfield__label ng-binding"
                                    htmlFor="field_113"
                                    ng-class="pref.designpref.signupInputElement && 'font-14 mdl-color-text--grey-700'"
                                  >
                                    Your Email
                                  </label>
                                  <span
                                    ng-show="field.error"
                                    className="mdl-textfield__error font-12 mdl-color-text--red-600 ng-binding ng-hide"
                                    style={{ visibility: "visible" }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              ng-if="!showSuccessMsg"
                              ng-repeat="field in formfields | orderObjectBy:'order'"
                              className="m-b-20"
                              ng-show="!(field.disabled && field.disabled==='hidden') && isFieldVisible(field,true)"
                              ng-attr-style="{{field.metadata.styles.div1 ? field.metadata.styles.div1: ''}}"
                            >
                              <div
                                ng-if="!field.metadata.remove_title && field.type!=13 && !(field.disabled && field.disabled==='hidden')"
                                className="ng-scope"
                              >
                                <div
                                  ng-if="field.type!=6 || field.metadata.link_type"
                                  ng-class="pref.designpref.signupInputElement && 'font-12 mdl-typography--font-light mdl-color-text--primary'"
                                  className="ng-scope"
                                >
                                  <span
                                    ng-class="pref.designpref.titleClasses || 'mdl-color-text--primary'"
                                    className="ng-binding mdl-color-text--primary"
                                  >
                                    Phone No.
                                  </span>
                                </div>
                                <div
                                  ng-if="field.type!=6"
                                  className="font-14 mdl-color-text--grey-700 asformfield_description ng-scope"
                                  bind-html-compile="field.description"
                                />
                              </div>

                              <div ng-if="!field.disabled" className="ng-scope">
                                <div
                                  ng-if="field.type==8 && phonenumberLibLoaded"
                                  className="mdl-textfield mdl-js-textfield maximize-width rel-pos ng-scope is-upgraded"
                                  style={{
                                    marginTop: "-15px",
                                    marginBottom: "-10px",
                                  }}
                                  data-upgraded=",MaterialTextfield"
                                >
                                  <div
                                    className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
                                    style={{
                                      verticalAlign: "middle",
                                      width: "90px",
                                    }}
                                    data-upgraded=",MaterialTextfield"
                                  >
                                    <label className="mdl-color-text--primary upper-label ng-binding">
                                      Country Code
                                    </label>
                                  </div>
                                  <div
                                    className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label half-textfield maximize-width is-upgraded"
                                    style={{
                                      verticalAlign: "middle",
                                      width: "CALC(100% - 100px)",
                                      float: "right",
                                    }}
                                    data-upgraded=",MaterialTextfield"
                                  >
                                    <input
                                      className="mdl-textfield__input ng-pristine ng-untouched ng-valid ng-empty"
                                      type="text"
                                      ng-model="formData[field.id].user_phone"
                                      ng-blur="onPhoneBlur(field)"
                                      ng-disabled="field.metadata.otp.enabled && field.metadata.otp.sent>0"
                                      fdprocessedid="83qgk9"
                                    />
                                    <label className="mdl-textfield__label ng-binding">
                                      Phone No.
                                    </label>
                                  </div>

                                  <div
                                    ng-show="field.error"
                                    className="font-12 mdl-color-text--red-600 ng-binding ng-hide"
                                    style={{ visibility: "visible" }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              ng-if="!showSuccessMsg"
                              ng-repeat="field in formfields | orderObjectBy:'order'"
                              className="m-b-20"
                              ng-show="!(field.disabled && field.disabled==='hidden') && isFieldVisible(field,true)"
                              ng-attr-style="{{field.metadata.styles.div1 ? field.metadata.styles.div1: ''}}"
                            >
                              <div
                                ng-if="!field.metadata.remove_title && field.type!=13 && !(field.disabled && field.disabled==='hidden')"
                                className="ng-scope"
                              >
                                <div
                                  ng-if="field.type!=6 || field.metadata.link_type"
                                  ng-class="pref.designpref.signupInputElement && 'font-12 mdl-typography--font-light mdl-color-text--primary'"
                                  className="ng-scope"
                                >
                                  <span
                                    ng-class="pref.designpref.titleClasses || 'mdl-color-text--primary'"
                                    className="ng-binding mdl-color-text--primary"
                                  >
                                    Your Message
                                  </span>
                                  <span
                                    ng-if="field.is_required==1 && !field.hideCompulsory && !options.hideStarForCompulsory"
                                    className="ng-scope"
                                  >
                                    *
                                  </span>
                                </div>
                                <div
                                  ng-if="field.type!=6"
                                  className="font-14 mdl-color-text--grey-700 asformfield_description ng-scope"
                                  bind-html-compile="field.description"
                                />
                              </div>

                              <div ng-if="!field.disabled" className="ng-scope">
                                <div
                                  ng-if="field.type==2"
                                  className="mdl-textfield mdl-js-textfield maximize-width ng-scope is-upgraded"
                                  style={{ marginTop: "-15px" }}
                                  data-upgraded=",MaterialTextfield"
                                >
                                  <textarea
                                    className="mdl-textfield__input resize-none ng-pristine ng-untouched ng-valid ng-empty"
                                    name="field_1"
                                    ng-class="pref.designpref.signupInputElementClasses?pref.designpref.signupInputElementClasses:''"
                                    ng-model="formData[field.id]"
                                    ng-attr-style="{{pref.designpref.signupInputElementStyles?pref.designpref.signupInputElementStyles:''}}"
                                    rows={3}
                                    ng-disabled="field_.disabled"
                                    defaultValue={""}
                                  />
                                  <label
                                    className="mdl-textfield__label ng-binding"
                                    htmlFor="field_1"
                                    ng-class="(pref.designpref.signupInputElement && 'font-14 mdl-color-text--grey-700') || (pref.designpref.signupInputElementTitleClasses?pref.designpref.signupInputElementTitleClasses:'')"
                                  >
                                    Your Message
                                  </label>
                                  <span
                                    ng-show="field.error"
                                    className="mdl-textfield__error font-12 mdl-color-text--red-600 ng-binding ng-hide"
                                    style={{ visibility: "visible" }}
                                  />
                                </div>
                              </div>
                            </div>

                            <div
                              className
                              style={{ marginTop: "20px" }}
                              ng-if="!loading && !showSuccessMsg && formfields.length>0 && !pref.showFieldsOnly"
                            >
                              <button
                                ng-if="!stepsEnabled || isFinalStep"
                                ng-show="!options.submitBtn.ladda"
                                className="mdl-button mdl-js-button mdl-color--primary mdl-color-text--white mdl-typography--font-regular float-right"
                                ng-click="formsubmit()"
                                fdprocessedid="1vt2x"
                                data-upgraded=",MaterialButton"
                              >
                                Submit
                              </button>
                              {/* <button
                                ng-if="!stepsEnabled || isFinalStep"
                                ng-show="options.submitBtn.ladda"
                                className="mdl-button mdl-js-button mdl-color--primary mdl-color-text--white mdl-typography--font-regular ladda-button ng-scope ng-hide"
                                ladda-button="info.submitLadda"
                                data-spinner-color="white"
                                data-style="zoom-out"
                                ng-click="formsubmit()"
                                data-upgraded=",MaterialButton"
                              >
                                <span className="ladda-label ng-binding" />
                                <span className="ladda-spinner" />
                              </button> */}
                            </div>

                            {/* <div
                              ng-show="!loading && showSuccessMsg && !formDetails.successMsg"
                              className="margin-tb-10 ng-hide"
                            >
                              <div
                                className="mdl-typography--font-semibold font-20 font-xs-16 center-alignment ng-binding"
                                ng-show="formDetails.success_txt"
                                style={{ color: "#8BC34A" }}
                              >
                                Thank You, We have successfully received your
                                response.
                              </div>
                              <div
                                className="margin-top-20 font-14 font-xs-12 center-alignment ng-binding ng-hide"
                                ng-show="formDetails.success_txt_desc"
                                ng-bind-html="formDetails.success_txt_desc"
                              />
                            </div>

                            <div
                              ng-show="$root.app_data.config.meta[51].allowed && showSuccessMsg && isShareEnabled"
                              className="center-alignment padding-tb-24 padding-lr-16 padding-lr-xs-0 ng-hide"
                              style={{ borderTop: "1px solid #dedede" }}
                            >
                              <div>
                                <div className="margin-bottom-24 font-16 mdl-typography--font-medium ng-binding">
                                  Help your alumni portal to get maximum
                                  responses
                                </div>
                                <div className="font-16 margin-bottom-16 mdl-typography--font-regular ng-binding">
                                  Share this form
                                </div>
                                <div
                                  style={{ height: "48px" }}
                                  className="rel-pos"
                                >
                                  <div
                                    className="maximize-width"
                                    style={{
                                      position: "absolute",
                                      WebkitTransform: "scale(1.2)",
                                      MozTransform: "scale(1.2)",
                                      msTransform: "scale(1.2)",
                                      transform: "scale(1.2)",
                                    }}
                                  >
                                    <span style={{ position: "relative" }}>
                                      <div
                                        className="flexbox-inline ng-scope"
                                        ng-attr-style="{{$root.isMobile?style_tag_app:style_tag_web}}"
                                      >
                                        <div
                                          ng-repeat="(index, platform) in social_platforms_array | orderBy:'order'"
                                          className="ng-scope"
                                        >
                                          <a
                                            ng-href="https://www.addtoany.com/add_to/whatsapp?linkurl=https%3A%2F%2Falumni.gyanmanjarividyapith.edu.in%2Fabout"
                                            ng-click="shareCardWrapper($event, platform['id'])"
                                            className=" flexbox-inline align-items-center justify-content-center mdl-button mdl-js-button mdl-button--fab  mdl-color-text--white mdl-js-ripple-effect  whatsapp-color  social-icons-lg font-20 margin-right-16 social-icons-small-md font-md-16 margin-right-md-8 social-icons-extrasmall-xs font-xs-12 margin-right-xs-8"
                                            ga-event="unknown,undefined,Whatsapp,undefined"
                                            title
                                            data-as-img
                                            data-as-article
                                            ng-attr-style="{{ info['button-style'] }}"
                                            href="https://www.addtoany.com/add_to/whatsapp?linkurl=https%3A%2F%2Falumni.gyanmanjarividyapith.edu.in%2Fabout"
                                            data-upgraded=",MaterialButton,MaterialRipple"
                                          >
                                            <i className="icon-whatsapp margin-left-2 " />

                                            <span className="mdl-button__ripple-container">
                                              <span className="mdl-ripple" />
                                            </span>
                                          </a>
                                        </div>
                                        <div
                                          ng-repeat="(index, platform) in social_platforms_array | orderBy:'order'"
                                          className="ng-scope"
                                        >
                                          <a
                                            ng-href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Falumni.gyanmanjarividyapith.edu.in%2Fabout"
                                            ng-click="shareCardWrapper($event, platform['id'])"
                                            className=" flexbox-inline align-items-center justify-content-center mdl-button mdl-js-button mdl-button--fab  mdl-color-text--white mdl-js-ripple-effect  facebook-bg-color  social-icons-lg font-20 margin-right-16 social-icons-small-md font-md-16 margin-right-md-8 social-icons-extrasmall-xs font-xs-12 margin-right-xs-8"
                                            ga-event="unknown,undefined,Facebook,undefined"
                                            title
                                            data-as-img
                                            data-as-article
                                            ng-attr-style="{{ info['button-style'] }}"
                                            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Falumni.gyanmanjarividyapith.edu.in%2Fabout"
                                            data-upgraded=",MaterialButton,MaterialRipple"
                                          >
                                            <i className="icon-facebook " />

                                            <span className="mdl-button__ripple-container">
                                              <span className="mdl-ripple" />
                                            </span>
                                          </a>
                                        </div>
                                        <div
                                          ng-repeat="(index, platform) in social_platforms_array | orderBy:'order'"
                                          className="ng-scope"
                                        >
                                          <a
                                            ng-href="https://twitter.com/intent/tweet?url=https%3A%2F%2Falumni.gyanmanjarividyapith.edu.in%2Fabout"
                                            ng-click="shareCardWrapper($event, platform['id'])"
                                            className=" flexbox-inline align-items-center justify-content-center mdl-button mdl-js-button mdl-button--fab  mdl-color-text--white mdl-js-ripple-effect  twitter-color  social-icons-lg font-20 margin-right-16 social-icons-small-md font-md-16 margin-right-md-8 social-icons-extrasmall-xs font-xs-12 margin-right-xs-8"
                                            ga-event="unknown,undefined,X (Former Twitter),undefined"
                                            title
                                            data-as-img
                                            data-as-article
                                            ng-attr-style="{{ info['button-style'] }}"
                                            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Falumni.gyanmanjarividyapith.edu.in%2Fabout"
                                            data-upgraded=",MaterialButton,MaterialRipple"
                                          >
                                            <i className="icon-x " />

                                            <span className="mdl-button__ripple-container">
                                              <span className="mdl-ripple" />
                                            </span>
                                          </a>
                                        </div>
                                        <div
                                          ng-repeat="(index, platform) in social_platforms_array | orderBy:'order'"
                                          className="ng-scope"
                                        >
                                          <a
                                            ng-href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Falumni.gyanmanjarividyapith.edu.in%2Fabout"
                                            ng-click="shareCardWrapper($event, platform['id'])"
                                            className=" flexbox-inline align-items-center justify-content-center mdl-button mdl-js-button mdl-button--fab  mdl-color-text--white mdl-js-ripple-effect  linkedin-color  social-icons-lg font-20 margin-right-16 social-icons-small-md font-md-16 margin-right-md-8 social-icons-extrasmall-xs font-xs-12 margin-right-xs-8"
                                            ga-event="unknown,undefined,LinkedIn,undefined"
                                            title
                                            data-as-img
                                            data-as-article
                                            ng-attr-style="{{ info['button-style'] }}"
                                            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Falumni.gyanmanjarividyapith.edu.in%2Fabout"
                                            data-upgraded=",MaterialButton,MaterialRipple"
                                          >
                                            <i className="icon-linkedin margin-bottom-2" />

                                            <span className="mdl-button__ripple-container">
                                              <span className="mdl-ripple" />
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                                <div className="margin-top-xs-16 overflow-ellipsis margin-top-35">
                                  <a
                                    ng-href
                                    className="mdl-color-text--grey-900 mdl-typography--font-regular font-16 ng-binding"
                                    target="_blank"
                                    ng-bind="formLink"
                                  />
                                </div>
                                <div className="margin-top-12 margin-top-xs-16">
                                  <button
                                    className="border-light-grey-600 font-14 mdl-button mdl-color-text--grey-600 mdl-color--white mdl-typography--font-regular ng-binding"
                                    ng-click="link_copy()"
                                    style={{ textTransform: "none" }}
                                  >
                                    Copy Link
                                  </button>
                                  <input
                                    className="font-14 padding-0 inline-block mdl-textfield__input ng-pristine ng-untouched ng-valid ng-empty"
                                    style={{
                                      border: "none",
                                      outline: "none",
                                      width: "0.1px",
                                      height: "0.1px",
                                    }}
                                    id="campLink"
                                    type="text"
                                    ng-model="formLink"
                                    onclick="select()"
                                    readOnly
                                  />
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </as-forms>
              </div>
            </div>
          </div>
          <div className="mdl-cell mdl-cell--8-col">
            <div
              className="mdl-card contact-card mdl-shadow--2dp ng-scope"
              style={{ height: "100%", minHeight: "300px" }}
              ng-if="$root.featureEnabled('contactus_map',true)"
            >
              <iframe
                width="100%"
                height="100%"
                frameBorder={0}
                style={{ border: 0 }}
                src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.610645168434!2d72.15056957512624!3d21.756615280081114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5a71debc932f%3A0x559b68ba35316a59!2sSsccs%20(Shree%20Swaminarayan%20College%20Of%20Computer%20Science%20)!5e0!3m2!1sen!2sin!4v1711734724277!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade, Near Gyanmanjari Vidhyapith, Kaliyabid, Bhavnagar, India, Gujarat"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
