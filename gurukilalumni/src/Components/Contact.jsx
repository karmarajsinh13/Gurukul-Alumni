import React from "react";

export default function Contact() {
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
                 Shree Swaminarayan College of Computer Science
Gurukul Campus , Sardarnagar , Bhavnagar
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
                     
                      <div
                       
                        className="padding-bottom-10 padding-top-24 padding-lr-40 padding-lr-xs-16 ng-hide"
                      >
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
                                    <span
                                      ng-if="!(formData[field.id] && formData[field.id].id>0)"
                                      ng-bind="formData[field.id]|arrayToComma"
                                      id="field_dsbl_112"
                                      className="ng-binding ng-scope"
                                      tabIndex={0}
                                    >
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
                                    <dial-codes
                                      selected="formData[field.id].user_phone_code"
                                      data-disabled="field.metadata.otp.enabled && field.metadata.otp.sent>0"
                                      className="ng-isolate-scope"
                                    >
                                      <select
                                        ng-model="selected"
                                        style={{
                                          lineHeight: "22px",
                                          height: "28px",
                                        }}
                                        className="select-dropdown ng-pristine ng-untouched ng-valid ng-not-empty"
                                        ng-disabled="disabled"
                                        fdprocessedid="fiuxtd"
                                      >
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={1}
                                          className="ng-binding ng-scope"
                                        >
                                          +1 US / Canada
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={91}
                                          className="ng-binding ng-scope"
                                        >
                                          +91 India
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={93}
                                          className="ng-binding ng-scope"
                                        >
                                          +93 Afghanistan
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={358}
                                          className="ng-binding ng-scope"
                                        >
                                          +358 Aland Islands
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={355}
                                          className="ng-binding ng-scope"
                                        >
                                          +355 Albania
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={213}
                                          className="ng-binding ng-scope"
                                        >
                                          +213 Algeria
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={1684}
                                          className="ng-binding ng-scope"
                                        >
                                          +1684 AmericanSamoa
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={376}
                                          className="ng-binding ng-scope"
                                        >
                                          +376 Andorra
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={244}
                                          className="ng-binding ng-scope"
                                        >
                                          +244 Angola
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={1264}
                                          className="ng-binding ng-scope"
                                        >
                                          +1264 Anguilla
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={672}
                                          className="ng-binding ng-scope"
                                        >
                                          +672 Antarctica
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={1268}
                                          className="ng-binding ng-scope"
                                        >
                                          +1268 Antigua and Barbuda
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={54}
                                          className="ng-binding ng-scope"
                                        >
                                          +54 Argentina
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={374}
                                          className="ng-binding ng-scope"
                                        >
                                          +374 Armenia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={297}
                                          className="ng-binding ng-scope"
                                        >
                                          +297 Aruba
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={61}
                                          className="ng-binding ng-scope"
                                        >
                                          +61 Australia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={43}
                                          className="ng-binding ng-scope"
                                        >
                                          +43 Austria
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={994}
                                          className="ng-binding ng-scope"
                                        >
                                          +994 Azerbaijan
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={1242}
                                          className="ng-binding ng-scope"
                                        >
                                          +1242 Bahamas
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={973}
                                          className="ng-binding ng-scope"
                                        >
                                          +973 Bahrain
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={880}
                                          className="ng-binding ng-scope"
                                        >
                                          +880 Bangladesh
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={1246}
                                          className="ng-binding ng-scope"
                                        >
                                          +1246 Barbados
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={375}
                                          className="ng-binding ng-scope"
                                        >
                                          +375 Belarus
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={32}
                                          className="ng-binding ng-scope"
                                        >
                                          +32 Belgium
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={501}
                                          className="ng-binding ng-scope"
                                        >
                                          +501 Belize
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={229}
                                          className="ng-binding ng-scope"
                                        >
                                          +229 Benin
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={1441}
                                          className="ng-binding ng-scope"
                                        >
                                          +1441 Bermuda
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={975}
                                          className="ng-binding ng-scope"
                                        >
                                          +975 Bhutan
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={591}
                                          className="ng-binding ng-scope"
                                        >
                                          +591 Bolivia, Plurinational State of
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={387}
                                          className="ng-binding ng-scope"
                                        >
                                          +387 Bosnia and Herzegovina
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={267}
                                          className="ng-binding ng-scope"
                                        >
                                          +267 Botswana
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={55}
                                          className="ng-binding ng-scope"
                                        >
                                          +55 Brazil
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={246}
                                          className="ng-binding ng-scope"
                                        >
                                          +246 British Indian Ocean Territory
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={673}
                                          className="ng-binding ng-scope"
                                        >
                                          +673 Brunei Darussalam
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={359}
                                          className="ng-binding ng-scope"
                                        >
                                          +359 Bulgaria
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={226}
                                          className="ng-binding ng-scope"
                                        >
                                          +226 Burkina Faso
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={257}
                                          className="ng-binding ng-scope"
                                        >
                                          +257 Burundi
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={855}
                                          className="ng-binding ng-scope"
                                        >
                                          +855 Cambodia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={237}
                                          className="ng-binding ng-scope"
                                        >
                                          +237 Cameroon
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={1}
                                          className="ng-binding ng-scope"
                                        >
                                          +1 Canada
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={238}
                                          className="ng-binding ng-scope"
                                        >
                                          +238 Cape Verde
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={345}
                                          className="ng-binding ng-scope"
                                        >
                                          + 345 Cayman Islands
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={236}
                                          className="ng-binding ng-scope"
                                        >
                                          +236 Central African Republic
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={235}
                                          className="ng-binding ng-scope"
                                        >
                                          +235 Chad
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={56}
                                          className="ng-binding ng-scope"
                                        >
                                          +56 Chile
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={86}
                                          className="ng-binding ng-scope"
                                        >
                                          +86 China
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={61}
                                          className="ng-binding ng-scope"
                                        >
                                          +61 Christmas Island
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={61}
                                          className="ng-binding ng-scope"
                                        >
                                          +61 Cocos (Keeling) Islands
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={57}
                                          className="ng-binding ng-scope"
                                        >
                                          +57 Colombia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={269}
                                          className="ng-binding ng-scope"
                                        >
                                          +269 Comoros
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={242}
                                          className="ng-binding ng-scope"
                                        >
                                          +242 Congo
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={243}
                                          className="ng-binding ng-scope"
                                        >
                                          +243 Congo, The Democratic Republic of
                                          the Congo
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={682}
                                          className="ng-binding ng-scope"
                                        >
                                          +682 Cook Islands
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={506}
                                          className="ng-binding ng-scope"
                                        >
                                          +506 Costa Rica
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={225}
                                          className="ng-binding ng-scope"
                                        >
                                          +225 Cote d'Ivoire
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={385}
                                          className="ng-binding ng-scope"
                                        >
                                          +385 Croatia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={53}
                                          className="ng-binding ng-scope"
                                        >
                                          +53 Cuba
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={357}
                                          className="ng-binding ng-scope"
                                        >
                                          +357 Cyprus
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={420}
                                          className="ng-binding ng-scope"
                                        >
                                          +420 Czech Republic
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={45}
                                          className="ng-binding ng-scope"
                                        >
                                          +45 Denmark
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={253}
                                          className="ng-binding ng-scope"
                                        >
                                          +253 Djibouti
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={1767}
                                          className="ng-binding ng-scope"
                                        >
                                          +1767 Dominica
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={1849}
                                          className="ng-binding ng-scope"
                                        >
                                          +1849 Dominican Republic
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={593}
                                          className="ng-binding ng-scope"
                                        >
                                          +593 Ecuador
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={20}
                                          className="ng-binding ng-scope"
                                        >
                                          +20 Egypt
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={503}
                                          className="ng-binding ng-scope"
                                        >
                                          +503 El Salvador
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={240}
                                          className="ng-binding ng-scope"
                                        >
                                          +240 Equatorial Guinea
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={291}
                                          className="ng-binding ng-scope"
                                        >
                                          +291 Eritrea
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={372}
                                          className="ng-binding ng-scope"
                                        >
                                          +372 Estonia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={251}
                                          className="ng-binding ng-scope"
                                        >
                                          +251 Ethiopia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={500}
                                          className="ng-binding ng-scope"
                                        >
                                          +500 Falkland Islands (Malvinas)
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={298}
                                          className="ng-binding ng-scope"
                                        >
                                          +298 Faroe Islands
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={679}
                                          className="ng-binding ng-scope"
                                        >
                                          +679 Fiji
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={358}
                                          className="ng-binding ng-scope"
                                        >
                                          +358 Finland
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={33}
                                          className="ng-binding ng-scope"
                                        >
                                          +33 France
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={594}
                                          className="ng-binding ng-scope"
                                        >
                                          +594 French Guiana
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={689}
                                          className="ng-binding ng-scope"
                                        >
                                          +689 French Polynesia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={241}
                                          className="ng-binding ng-scope"
                                        >
                                          +241 Gabon
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={220}
                                          className="ng-binding ng-scope"
                                        >
                                          +220 Gambia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={995}
                                          className="ng-binding ng-scope"
                                        >
                                          +995 Georgia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={49}
                                          className="ng-binding ng-scope"
                                        >
                                          +49 Germany
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={233}
                                          className="ng-binding ng-scope"
                                        >
                                          +233 Ghana
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={350}
                                          className="ng-binding ng-scope"
                                        >
                                          +350 Gibraltar
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={30}
                                          className="ng-binding ng-scope"
                                        >
                                          +30 Greece
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={299}
                                          className="ng-binding ng-scope"
                                        >
                                          +299 Greenland
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={1473}
                                          className="ng-binding ng-scope"
                                        >
                                          +1473 Grenada
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={590}
                                          className="ng-binding ng-scope"
                                        >
                                          +590 Guadeloupe
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={1671}
                                          className="ng-binding ng-scope"
                                        >
                                          +1671 Guam
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={502}
                                          className="ng-binding ng-scope"
                                        >
                                          +502 Guatemala
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={44}
                                          className="ng-binding ng-scope"
                                        >
                                          +44 Guernsey
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={224}
                                          className="ng-binding ng-scope"
                                        >
                                          +224 Guinea
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={245}
                                          className="ng-binding ng-scope"
                                        >
                                          +245 Guinea-Bissau
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={595}
                                          className="ng-binding ng-scope"
                                        >
                                          +595 Guyana
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={509}
                                          className="ng-binding ng-scope"
                                        >
                                          +509 Haiti
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={379}
                                          className="ng-binding ng-scope"
                                        >
                                          +379 Holy See (Vatican City State)
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={504}
                                          className="ng-binding ng-scope"
                                        >
                                          +504 Honduras
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={852}
                                          className="ng-binding ng-scope"
                                        >
                                          +852 Hong Kong
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={36}
                                          className="ng-binding ng-scope"
                                        >
                                          +36 Hungary
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={354}
                                          className="ng-binding ng-scope"
                                        >
                                          +354 Iceland
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={91}
                                          className="ng-binding ng-scope"
                                        >
                                          +91 India
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={62}
                                          className="ng-binding ng-scope"
                                        >
                                          +62 Indonesia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={98}
                                          className="ng-binding ng-scope"
                                        >
                                          +98 Iran, Islamic Republic of Persian
                                          Gulf
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={964}
                                          className="ng-binding ng-scope"
                                        >
                                          +964 Iraq
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={353}
                                          className="ng-binding ng-scope"
                                        >
                                          +353 Ireland
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={44}
                                          className="ng-binding ng-scope"
                                        >
                                          +44 Isle of Man
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={972}
                                          className="ng-binding ng-scope"
                                        >
                                          +972 Israel
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={39}
                                          className="ng-binding ng-scope"
                                        >
                                          +39 Italy
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={1876}
                                          className="ng-binding ng-scope"
                                        >
                                          +1876 Jamaica
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={81}
                                          className="ng-binding ng-scope"
                                        >
                                          +81 Japan
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={44}
                                          className="ng-binding ng-scope"
                                        >
                                          +44 Jersey
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={962}
                                          className="ng-binding ng-scope"
                                        >
                                          +962 Jordan
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={77}
                                          className="ng-binding ng-scope"
                                        >
                                          +77 Kazakhstan
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={254}
                                          className="ng-binding ng-scope"
                                        >
                                          +254 Kenya
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={686}
                                          className="ng-binding ng-scope"
                                        >
                                          +686 Kiribati
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={850}
                                          className="ng-binding ng-scope"
                                        >
                                          +850 Korea, Democratic People's
                                          Republic of Korea
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={82}
                                          className="ng-binding ng-scope"
                                        >
                                          +82 Korea, Republic of South Korea
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={965}
                                          className="ng-binding ng-scope"
                                        >
                                          +965 Kuwait
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={996}
                                          className="ng-binding ng-scope"
                                        >
                                          +996 Kyrgyzstan
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={856}
                                          className="ng-binding ng-scope"
                                        >
                                          +856 Laos
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={371}
                                          className="ng-binding ng-scope"
                                        >
                                          +371 Latvia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={961}
                                          className="ng-binding ng-scope"
                                        >
                                          +961 Lebanon
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={266}
                                          className="ng-binding ng-scope"
                                        >
                                          +266 Lesotho
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={231}
                                          className="ng-binding ng-scope"
                                        >
                                          +231 Liberia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={218}
                                          className="ng-binding ng-scope"
                                        >
                                          +218 Libyan Arab Jamahiriya
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={423}
                                          className="ng-binding ng-scope"
                                        >
                                          +423 Liechtenstein
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={370}
                                          className="ng-binding ng-scope"
                                        >
                                          +370 Lithuania
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={352}
                                          className="ng-binding ng-scope"
                                        >
                                          +352 Luxembourg
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={853}
                                          className="ng-binding ng-scope"
                                        >
                                          +853 Macao
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={389}
                                          className="ng-binding ng-scope"
                                        >
                                          +389 Macedonia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={261}
                                          className="ng-binding ng-scope"
                                        >
                                          +261 Madagascar
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={265}
                                          className="ng-binding ng-scope"
                                        >
                                          +265 Malawi
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={60}
                                          className="ng-binding ng-scope"
                                        >
                                          +60 Malaysia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={960}
                                          className="ng-binding ng-scope"
                                        >
                                          +960 Maldives
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={223}
                                          className="ng-binding ng-scope"
                                        >
                                          +223 Mali
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={356}
                                          className="ng-binding ng-scope"
                                        >
                                          +356 Malta
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={692}
                                          className="ng-binding ng-scope"
                                        >
                                          +692 Marshall Islands
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={596}
                                          className="ng-binding ng-scope"
                                        >
                                          +596 Martinique
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={222}
                                          className="ng-binding ng-scope"
                                        >
                                          +222 Mauritania
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={230}
                                          className="ng-binding ng-scope"
                                        >
                                          +230 Mauritius
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={262}
                                          className="ng-binding ng-scope"
                                        >
                                          +262 Mayotte
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={52}
                                          className="ng-binding ng-scope"
                                        >
                                          +52 Mexico
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={691}
                                          className="ng-binding ng-scope"
                                        >
                                          +691 Micronesia, Federated States of
                                          Micronesia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={373}
                                          className="ng-binding ng-scope"
                                        >
                                          +373 Moldova
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={377}
                                          className="ng-binding ng-scope"
                                        >
                                          +377 Monaco
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={976}
                                          className="ng-binding ng-scope"
                                        >
                                          +976 Mongolia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={382}
                                          className="ng-binding ng-scope"
                                        >
                                          +382 Montenegro
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={1664}
                                          className="ng-binding ng-scope"
                                        >
                                          +1664 Montserrat
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={212}
                                          className="ng-binding ng-scope"
                                        >
                                          +212 Morocco
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={258}
                                          className="ng-binding ng-scope"
                                        >
                                          +258 Mozambique
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={95}
                                          className="ng-binding ng-scope"
                                        >
                                          +95 Myanmar
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={264}
                                          className="ng-binding ng-scope"
                                        >
                                          +264 Namibia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={674}
                                          className="ng-binding ng-scope"
                                        >
                                          +674 Nauru
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={977}
                                          className="ng-binding ng-scope"
                                        >
                                          +977 Nepal
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={31}
                                          className="ng-binding ng-scope"
                                        >
                                          +31 Netherlands
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={599}
                                          className="ng-binding ng-scope"
                                        >
                                          +599 Netherlands Antilles
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={687}
                                          className="ng-binding ng-scope"
                                        >
                                          +687 New Caledonia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={64}
                                          className="ng-binding ng-scope"
                                        >
                                          +64 New Zealand
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={505}
                                          className="ng-binding ng-scope"
                                        >
                                          +505 Nicaragua
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={227}
                                          className="ng-binding ng-scope"
                                        >
                                          +227 Niger
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={234}
                                          className="ng-binding ng-scope"
                                        >
                                          +234 Nigeria
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={683}
                                          className="ng-binding ng-scope"
                                        >
                                          +683 Niue
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={672}
                                          className="ng-binding ng-scope"
                                        >
                                          +672 Norfolk Island
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={1670}
                                          className="ng-binding ng-scope"
                                        >
                                          +1670 Northern Mariana Islands
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={47}
                                          className="ng-binding ng-scope"
                                        >
                                          +47 Norway
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={968}
                                          className="ng-binding ng-scope"
                                        >
                                          +968 Oman
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={92}
                                          className="ng-binding ng-scope"
                                        >
                                          +92 Pakistan
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={680}
                                          className="ng-binding ng-scope"
                                        >
                                          +680 Palau
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={970}
                                          className="ng-binding ng-scope"
                                        >
                                          +970 Palestinian Territory, Occupied
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={507}
                                          className="ng-binding ng-scope"
                                        >
                                          +507 Panama
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={675}
                                          className="ng-binding ng-scope"
                                        >
                                          +675 Papua New Guinea
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={595}
                                          className="ng-binding ng-scope"
                                        >
                                          +595 Paraguay
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={51}
                                          className="ng-binding ng-scope"
                                        >
                                          +51 Peru
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={63}
                                          className="ng-binding ng-scope"
                                        >
                                          +63 Philippines
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={872}
                                          className="ng-binding ng-scope"
                                        >
                                          +872 Pitcairn
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={48}
                                          className="ng-binding ng-scope"
                                        >
                                          +48 Poland
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={351}
                                          className="ng-binding ng-scope"
                                        >
                                          +351 Portugal
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={1939}
                                          className="ng-binding ng-scope"
                                        >
                                          +1939 Puerto Rico
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={974}
                                          className="ng-binding ng-scope"
                                        >
                                          +974 Qatar
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={262}
                                          className="ng-binding ng-scope"
                                        >
                                          +262 Reunion
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={40}
                                          className="ng-binding ng-scope"
                                        >
                                          +40 Romania
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={7}
                                          className="ng-binding ng-scope"
                                        >
                                          +7 Russia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={250}
                                          className="ng-binding ng-scope"
                                        >
                                          +250 Rwanda
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={590}
                                          className="ng-binding ng-scope"
                                        >
                                          +590 Saint Barthelemy
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={290}
                                          className="ng-binding ng-scope"
                                        >
                                          +290 Saint Helena, Ascension and
                                          Tristan Da Cunha
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={1869}
                                          className="ng-binding ng-scope"
                                        >
                                          +1869 Saint Kitts and Nevis
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={1758}
                                          className="ng-binding ng-scope"
                                        >
                                          +1758 Saint Lucia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={590}
                                          className="ng-binding ng-scope"
                                        >
                                          +590 Saint Martin
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={508}
                                          className="ng-binding ng-scope"
                                        >
                                          +508 Saint Pierre and Miquelon
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={1784}
                                          className="ng-binding ng-scope"
                                        >
                                          +1784 Saint Vincent and the Grenadines
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={685}
                                          className="ng-binding ng-scope"
                                        >
                                          +685 Samoa
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={378}
                                          className="ng-binding ng-scope"
                                        >
                                          +378 San Marino
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={239}
                                          className="ng-binding ng-scope"
                                        >
                                          +239 Sao Tome and Principe
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={966}
                                          className="ng-binding ng-scope"
                                        >
                                          +966 Saudi Arabia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={221}
                                          className="ng-binding ng-scope"
                                        >
                                          +221 Senegal
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={381}
                                          className="ng-binding ng-scope"
                                        >
                                          +381 Serbia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={248}
                                          className="ng-binding ng-scope"
                                        >
                                          +248 Seychelles
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={232}
                                          className="ng-binding ng-scope"
                                        >
                                          +232 Sierra Leone
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={65}
                                          className="ng-binding ng-scope"
                                        >
                                          +65 Singapore
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={421}
                                          className="ng-binding ng-scope"
                                        >
                                          +421 Slovakia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={386}
                                          className="ng-binding ng-scope"
                                        >
                                          +386 Slovenia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={677}
                                          className="ng-binding ng-scope"
                                        >
                                          +677 Solomon Islands
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={252}
                                          className="ng-binding ng-scope"
                                        >
                                          +252 Somalia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={27}
                                          className="ng-binding ng-scope"
                                        >
                                          +27 South Africa
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={500}
                                          className="ng-binding ng-scope"
                                        >
                                          +500 South Georgia and the South
                                          Sandwich Islands
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={211}
                                          className="ng-binding ng-scope"
                                        >
                                          +211 South Sudan
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={34}
                                          className="ng-binding ng-scope"
                                        >
                                          +34 Spain
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={94}
                                          className="ng-binding ng-scope"
                                        >
                                          +94 Sri Lanka
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={249}
                                          className="ng-binding ng-scope"
                                        >
                                          +249 Sudan
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={597}
                                          className="ng-binding ng-scope"
                                        >
                                          +597 Suriname
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={47}
                                          className="ng-binding ng-scope"
                                        >
                                          +47 Svalbard and Jan Mayen
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={268}
                                          className="ng-binding ng-scope"
                                        >
                                          +268 Swaziland
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={46}
                                          className="ng-binding ng-scope"
                                        >
                                          +46 Sweden
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={41}
                                          className="ng-binding ng-scope"
                                        >
                                          +41 Switzerland
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={963}
                                          className="ng-binding ng-scope"
                                        >
                                          +963 Syrian Arab Republic
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={886}
                                          className="ng-binding ng-scope"
                                        >
                                          +886 Taiwan
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={992}
                                          className="ng-binding ng-scope"
                                        >
                                          +992 Tajikistan
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={255}
                                          className="ng-binding ng-scope"
                                        >
                                          +255 Tanzania, United Republic of
                                          Tanzania
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={66}
                                          className="ng-binding ng-scope"
                                        >
                                          +66 Thailand
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={670}
                                          className="ng-binding ng-scope"
                                        >
                                          +670 Timor-Leste
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={228}
                                          className="ng-binding ng-scope"
                                        >
                                          +228 Togo
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={690}
                                          className="ng-binding ng-scope"
                                        >
                                          +690 Tokelau
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={676}
                                          className="ng-binding ng-scope"
                                        >
                                          +676 Tonga
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={1868}
                                          className="ng-binding ng-scope"
                                        >
                                          +1868 Trinidad and Tobago
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={216}
                                          className="ng-binding ng-scope"
                                        >
                                          +216 Tunisia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={90}
                                          className="ng-binding ng-scope"
                                        >
                                          +90 Turkey
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={993}
                                          className="ng-binding ng-scope"
                                        >
                                          +993 Turkmenistan
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={1649}
                                          className="ng-binding ng-scope"
                                        >
                                          +1649 Turks and Caicos Islands
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={688}
                                          className="ng-binding ng-scope"
                                        >
                                          +688 Tuvalu
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={256}
                                          className="ng-binding ng-scope"
                                        >
                                          +256 Uganda
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={380}
                                          className="ng-binding ng-scope"
                                        >
                                          +380 Ukraine
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={971}
                                          className="ng-binding ng-scope"
                                        >
                                          +971 United Arab Emirates
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={44}
                                          className="ng-binding ng-scope"
                                        >
                                          +44 United Kingdom
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={1}
                                          className="ng-binding ng-scope"
                                        >
                                          +1 United States
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={598}
                                          className="ng-binding ng-scope"
                                        >
                                          +598 Uruguay
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={998}
                                          className="ng-binding ng-scope"
                                        >
                                          +998 Uzbekistan
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={678}
                                          className="ng-binding ng-scope"
                                        >
                                          +678 Vanuatu
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={58}
                                          className="ng-binding ng-scope"
                                        >
                                          +58 Venezuela, Bolivarian Republic of
                                          Venezuela
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={84}
                                          className="ng-binding ng-scope"
                                        >
                                          +84 Vietnam
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={1284}
                                          className="ng-binding ng-scope"
                                        >
                                          +1284 Virgin Islands, British
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={1340}
                                          className="ng-binding ng-scope"
                                        >
                                          +1340 Virgin Islands, U.S.
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={681}
                                          className="ng-binding ng-scope"
                                        >
                                          +681 Wallis and Futuna
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={967}
                                          className="ng-binding ng-scope"
                                        >
                                          +967 Yemen
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={260}
                                          className="ng-binding ng-scope"
                                        >
                                          +260 Zambia
                                        </option>
                                        <option
                                          ng-repeat="dialObj in dialcodes"
                                          value={263}
                                          className="ng-binding ng-scope"
                                        >
                                          +263 Zimbabwe
                                        </option>
                                      </select>
                                    </dial-codes>
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
                src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.610645168434!2d72.15056957512624!3d21.756615280081114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5a71debc932f%3A0x559b68ba35316a59!2sSsccs%20(Shree%20Swaminarayan%20College%20Of%20Computer%20Science%20)!5e0!3m2!1sen!2sin!4v1711734724277!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade, Near Gyanmanjari Vidhyapith, Kaliyabid, Bhavnagar, India, Gujarat"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
