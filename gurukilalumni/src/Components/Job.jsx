import React from "react";
import gurukullogo from "../gurukullogo.png";

export default function Job() {
  return (
    <div>
      <div className="page-strip-change page-strip-change-themed">
        <div className="mdl-grid change-size main-family">
          <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--hide-phone">
            <div className="sub-title1 mdl-typography--font-light ng-binding">
              Job categories
            </div>
            <ul
              ng-if="!tag && !onlyInternship"
              style={{ listStyle: "none", margin: "0px", padding: "0px" }}
              className="ng-scope"
            >
              <li
                className="mdl-color--grey-300 font-16 category-list active-category"
                ng-click="changeTab('endorsed')"
                ng-class="{'active-category': current_tab == 'endorsed'}"
              >
                <span className="category-text mdl-typography--font-medium category-overflow ng-binding">
                  Job Opportunities
                </span>
                <span className="mdl-color-text--grey-600 category-count ng-binding">
                  1
                </span>
              </li>
              {/* <div style={{ margin: 0, padding: "15px 0 18px" }}>
                <li
                  style={{ padding: "15px 24px" }}
                  className="link-detail"
                  ng-click="changeTab('e_jobs')"
                  ng-class="{'mdl-color-text--primary': current_tab == 'e_jobs'}"
                >
                  <label className="mdl-checkbox__label">
                    <span className="mdl-typography--font-regular ng-binding">
                      Jobs
                    </span>
                  </label>
                </li>
                <li
                  style={{ padding: "15px 24px" }}
                  className="link-detail"
                  ng-click="changeTab('e_internships')"
                  ng-class="{'mdl-color-text--primary': current_tab == 'e_internships'}"
                >
                  <label className="mdl-checkbox__label">
                    <span className="mdl-typography--font-regular ng-binding">
                      Internships
                    </span>
                  </label>
                </li>
              </div> */}
              {/* <li
                className="mdl-color--grey-300 font-16 category-list"
                ng-click="changeTab('postedbyme')"
                ng-class="{'active-category': current_tab == 'postedbyme'}"
              >
                <span className="category-text mdl-typography--font-medium category-overflow ng-binding">
                  Posted By Me
                </span>
                <span className="mdl-color-text--grey-600 category-count ng-binding">
                  0
                </span>
              </li> */}
              <li
                className="mdl-color--grey-300 font-16 category-list"
                ng-click="changeTab('appliedbyme')"
                ng-class="{'active-category': current_tab == 'appliedbyme'}"
              >
                <span className="category-text mdl-typography--font-medium category-overflow ng-binding">
                  Applied By Me
                </span>
                <span className="mdl-color-text--grey-600 category-count ng-binding">
                  0
                </span>
              </li>
            </ul>
          </div>
          <div
            className="mdl-cell mdl-cell--4-col mdl-cell--hide-desktop mdl-cell--hide-tablet"
            style={{ borderRadius: "4px" }}
          >
            <button
              ng-click="showCategories=!showCategories"
              className="mdl-button mdl-js-button mdl-typography--font-regular maximize-width mdl-color-text--primary mdl-color--white ng-binding"
              style={{ border: "1px solid" }}
              data-upgraded=",MaterialButton"
            >
              Categories
              <i
                className="icon-expand_more font-16"
                style={{ marginLeft: "4px" }}
              />
            </button>
            <ul
              className="mdl-list mdl-card homepage-shadow-6 maximize-width categories-animate ng-hide"
              id="phone_categories"
              ng-show="showCategories"
              style={{ margin: "0px", minHeight: "0px" }}
            >
              <li
                ng-if="!tag && !onlyInternship"
                className="mdl-list__item category-list-small ng-scope active-category"
                style={{ cursor: "pointer" }}
                ng-click="changeTab('endorsed')"
                ng-class="{'active-category': current_tab == 'endorsed'}"
              >
                <span className="mdl-list__item-primary-content ng-binding">
                  All Opportunities
                </span>
                <span
                  className="mdl-color-text--grey-600 ng-binding"
                  style={{ float: "right" }}
                >
                  (1)
                </span>
              </li>
              <li
                ng-if="!tag"
                className="mdl-list__item category-list-small ng-scope"
                style={{ cursor: "pointer" }}
                ng-click="changeTab('postedbyme')"
                ng-class="{'active-category': current_tab == 'postedbyme'}"
              >
                <span className="mdl-list__item-primary-content ng-binding">
                  Posted By Me
                </span>
                <span
                  className="mdl-color-text--grey-600 ng-binding"
                  style={{ float: "right" }}
                >
                  (0)
                </span>
              </li>
              <li
                ng-if="!tag"
                className="mdl-list__item category-list-small ng-scope"
                style={{ cursor: "pointer" }}
                ng-click="changeTab('appliedbyme')"
                ng-class="{'active-category': current_tab == 'appliedbyme'}"
              >
                <span className="mdl-list__item-primary-content ng-binding">
                  Applied By Me
                </span>
                <span
                  className="mdl-color-text--grey-600 ng-binding"
                  style={{ float: "right" }}
                >
                  (0)
                </span>
              </li>
            </ul>
          </div>
          <div className="mdl-cell mdl-cell--8-col mdl-cell--5-col-tablet">
            {/* <div id="postOpportunity" ng-hide="showForm" className="mdl-card add-job-overlay maximize-width homepage-shadow-6 m-b-20" style={{overflow: 'initial', minHeight: '122px', background: 'url("https://alumni.gyanmanjarividyapith.edu.in/img/job_covers/background.jpg") center center / cover no-repeat'}} ng-style="heroImage">
              <div style={{position: 'absolute', left: '-2px', top: '-2px', zIndex: 1}} className="triangle-topleft">
              </div>
              <div className="triangle-bottomright" style={{position: 'absolute', zIndex: 1, bottom: '-2px', right: '-2px'}}>
              </div>
              <div style={{padding: '20px', position: 'relative', zIndex: 1}} className="mdl-color-text--white center-alignment"><span className="ng-binding">
                  Is your organization hiring new talent? Share the career opportunity with huge talent pool within AAG
                </span>
                <div style={{marginTop: '12px'}}>
                  <button className="mdl-button mdl-js-button mdl-color-text--primary mdl-color--white  mdl-js-rippleeffect mdl-typography--font-regular ng-binding" ng-click="showPostJobForm($event)" style={{height: '30px', lineHeight: '31px'}} fdprocessedid="j3o4j" data-upgraded=",MaterialButton">
                    <i className="icon-add new-icon" />
                    Post an Opportunity
                  </button>
                </div>
              </div>
            </div> */}

            {/* <div id="opportunityShareCard" className="mdl-card homepage-shadow-6 maximize-width m-b-20 categories-animate ng-hide" ng-show="showForm" style={{overflow: 'visible', minHeight: '0px'}}>
              <div className="mdl-color--primary">
                <div className="mdl-color-text--white center-alignment font-16 mdl-typography--font-regular ng-binding" style={{margin: '14px auto'}}>Post an Opportunity
                  <span className="ng-binding"> (Step 0 of 3)
                  </span>
                  <span className="float-right mdl-color-text--white" ng-click="showForm=false;" style={{paddingRight: '15px', cursor: 'pointer'}}>
                    <i className="icon-close" /></span>
                </div>
              </div>
              <div style={{margin: '24px'}}>
                <form style={{overflow: 'hidden'}} ng-hide="JobFormStep==2 || JobFormStep==3" name="jobFormPart1" noValidate className="ng-pristine ng-valid ng-valid-required">
                  <div style={{padding: '20px 0px'}} ng-show="choose_job_or_intern" className="ng-binding">
                    Post a
                    <label className="mdl-radio mdl-js-radio mdl-js-rippleeffect is-checked is-upgraded" htmlFor="option-job" style={{margin: '0px 24px'}} data-upgraded=",MaterialRadio">
                      <input type="radio" id="option-job" className="mdl-radio__button ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required" name="options" defaultValue={0} ng-model="job_or_intern" ng-required="firstSubmit" />
                      <span className="mdl-radio__label ng-binding">Job</span>
                      <span className="mdl-radio__outer-circle" /><span className="mdl-radio__inner-circle" /></label>
                    <label className="mdl-radio mdl-js-radio mdl-js-rippleeffect radio-option-intern is-upgraded" htmlFor="option-internship" data-upgraded=",MaterialRadio">
                      <input type="radio" id="option-internship" className="mdl-radio__button ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required" name="options" defaultValue={1} ng-model="job_or_intern" ng-required="firstSubmit" />
                      <span className="mdl-radio__label ng-binding">Internship
                        *</span>
                      <span className="mdl-radio__outer-circle" /><span className="mdl-radio__inner-circle" /></label>
                  </div>
                  <div className="error-class font-12 ng-binding ng-hide" ng-show="firstSubmit && job_or_intern != 0 && job_or_intern != 1">
                    Kindly choose whether it is a job or an
                    internship.
                  </div>
                  <pa-autocomplete query={1} search-text="companyName" selected-finally="companyId" input-placeholder="Name of the Company *" parentdiv-class="half-textfield mdl-textfield--floating-label" is-required="firstSubmit" error-empty="jobFormStepData.jobCompanyErr" formname="jobFormPart1" field-name="'company_name'" className="ng-isolate-scope"><div className="mdl-textfield mdl-js-textfield half-textfield mdl-textfield--floating-label main-family is-upgraded" ng-hide="hideSearchBar && !searchOpen" ng-class="{'is-invalid': (isRequired && formname[fieldName].$invalid)}" data-upgraded=",MaterialTextfield">
                      <input id={3343} className="mdl-textfield__input main-family  ng-valid ng-valid-required" type="text" ng-disabled="paDisabled" ng-model="searchText" ng-attr-placeholder="{{inputActualPlaceholder || undefined}}" ng-keyup="checkKeyUp($event)" ng-keydown="checkKeyDown($event)" ng-change="checkValueChange(); checkFraud()" ng-model-options="{ debounce: 200 }" autoComplete="off" ng-blur="blurFn();" ng-required="isRequired" name="'company_name'" />
                      <label className="mdl-textfield__label ng-binding" htmlFor="auto">Name of the Company *  </label>
                      <span className="mdl-textfield__error ng-binding">Kindly enter the name of the company</span>
                      <div className="mdl-progress mdl-js-progress mdl-progress__indeterminate progress-bar-adjust ng-hide is-upgraded" ng-show="isFetching" data-upgraded=",MaterialProgress"><div className="progressbar bar bar1" style={{width: '0%'}} /><div className="bufferbar bar bar2" style={{width: '100%'}} /><div className="auxbar bar bar3" style={{width: '0%'}} /></div>
                      <div className="search-alignment mdl-shadow--4dp ng-hide" ng-show="suggestions.length>0" style={{zIndex: 1000}}>
                        <ul className="demo-list-icon mdl-list search-dropdown-adjust paAutosuggestionsUl scrollbar-thin scrollbar-y" ng-mouseenter="blurLock=true" ng-mouseleave="blurLock=false" style={{maxHeight: '200px', overflowY: 'auto'}}>
                          
                        </ul>
                      </div>
                    </div></pa-autocomplete>
                  <pa-autocomplete query={3} search-text="designation" selected-finally="designationId" input-placeholder="Job Title *" parentdiv-class="half-textfield mdl-textfield--floating-label float-right" is-required="firstSubmit" error-empty="jobFormStepData.jobDesigErr" formname="jobFormPart1" field-name="'designation'" className="ng-isolate-scope"><div className="mdl-textfield mdl-js-textfield half-textfield mdl-textfield--floating-label float-right main-family is-upgraded" ng-hide="hideSearchBar && !searchOpen" ng-class="{'is-invalid': (isRequired && formname[fieldName].$invalid)}" data-upgraded=",MaterialTextfield">
                      <input id={3344} className="mdl-textfield__input main-family  ng-valid ng-valid-required" type="text" ng-disabled="paDisabled" ng-model="searchText" ng-attr-placeholder="{{inputActualPlaceholder || undefined}}" ng-keyup="checkKeyUp($event)" ng-keydown="checkKeyDown($event)" ng-change="checkValueChange(); checkFraud()" ng-model-options="{ debounce: 200 }" autoComplete="off" ng-blur="blurFn();" ng-required="isRequired" name="'designation'" />
                      <label className="mdl-textfield__label ng-binding" htmlFor="auto">Job Title *  </label>
                      <span className="mdl-textfield__error ng-binding">Kindly enter the designation of the post</span>
                      <div className="mdl-progress mdl-js-progress mdl-progress__indeterminate progress-bar-adjust ng-hide is-upgraded" ng-show="isFetching" data-upgraded=",MaterialProgress"><div className="progressbar bar bar1" style={{width: '0%'}} /><div className="bufferbar bar bar2" style={{width: '100%'}} /><div className="auxbar bar bar3" style={{width: '0%'}} /></div>
                      <div className="search-alignment mdl-shadow--4dp ng-hide" ng-show="suggestions.length>0" style={{zIndex: 1000}}>
                        <ul className="demo-list-icon mdl-list search-dropdown-adjust paAutosuggestionsUl scrollbar-thin scrollbar-y" ng-mouseenter="blurLock=true" ng-mouseleave="blurLock=false" style={{maxHeight: '200px', overflowY: 'auto'}}>
                          
                        </ul>
                      </div>
                    </div></pa-autocomplete>
                  <div>
                    <span ng-style="(work_from_home)?{'opacity':'0.3'}:''">
                      <pa-autocomplete query={7} search-text="location_name" selected-finally="locationId" input-placeholder="Location *" parentdiv-class="half-textfield mdl-textfield--floating-label" is-required="firstSubmit && !work_from_home" error-empty="jobFormStepData.jobLocErr" formname="jobFormPart1" field-name="'location_name'" pa-disabled="work_from_home==true" className="ng-isolate-scope"><div className="mdl-textfield mdl-js-textfield half-textfield mdl-textfield--floating-label main-family is-upgraded" ng-hide="hideSearchBar && !searchOpen" ng-class="{'is-invalid': (isRequired && formname[fieldName].$invalid)}" data-upgraded=",MaterialTextfield">
                          <input id={3345} className="mdl-textfield__input main-family  ng-valid ng-valid-required" type="text" ng-disabled="paDisabled" ng-model="searchText" ng-attr-placeholder="{{inputActualPlaceholder || undefined}}" ng-keyup="checkKeyUp($event)" ng-keydown="checkKeyDown($event)" ng-change="checkValueChange(); checkFraud()" ng-model-options="{ debounce: 200 }" autoComplete="off" ng-blur="blurFn();" ng-required="isRequired" name="'location_name'" />
                          <label className="mdl-textfield__label ng-binding" htmlFor="auto">Location *  </label>
                          <span className="mdl-textfield__error ng-binding">Kindly enter the location of the job</span>
                          <div className="mdl-progress mdl-js-progress mdl-progress__indeterminate progress-bar-adjust ng-hide is-upgraded" ng-show="isFetching" data-upgraded=",MaterialProgress"><div className="progressbar bar bar1" style={{width: '0%'}} /><div className="bufferbar bar bar2" style={{width: '100%'}} /><div className="auxbar bar bar3" style={{width: '0%'}} /></div>
                          <div className="search-alignment mdl-shadow--4dp ng-hide" ng-show="suggestions.length>0" style={{zIndex: 1000}}>
                            <ul className="demo-list-icon mdl-list search-dropdown-adjust paAutosuggestionsUl scrollbar-thin scrollbar-y" ng-mouseenter="blurLock=true" ng-mouseleave="blurLock=false" style={{maxHeight: '200px', overflowY: 'auto'}}>
                              
                            </ul>
                          </div>
                        </div></pa-autocomplete>
                    </span>
                    <div className="half-textfield" style={{float: 'right', padding: '20px 0px'}}>
                      <label className="mdl-checkbox mdl-js-checkbox mdl-js-rippleeffect is-upgraded" htmlFor="checkbox-home" data-upgraded=",MaterialCheckbox">
                        <input type="checkbox" id="checkbox-home" className="mdl-checkbox__input ng-pristine ng-untouched ng-valid ng-empty" ng-model="work_from_home" />
                        <span className="mdl-checkbox__label ng-binding">Work from
                          home</span>
                        <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span></label>
                    </div>
                  </div>
                  <div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label half-textfield is-upgraded" ng-class="{'is-dirty': job_deadline, 'is-invalid': jobFormPart1.job_deadline.$error.required}" data-upgraded=",MaterialTextfield">
                      <input className="mdl-textfield__input ng-pristine ng-untouched ng-empty ng-valid ng-valid-required" type="text" id="job_deaddate" name="job_deadline" readOnly="readonly" ng-model="job_deadline" ng-required="firstSubmit" ng-focus="openSdatePicker_job($event)" />
                      <label className="mdl-textfield__label ng-binding" htmlFor="job_deaddate">Deadline To Apply*</label>
                      <span className="mdl-textfield__error ng-binding ng-hide" ng-show="(job_or_intern==1)">Kindly
                        enter the deadline to apply for internship</span>
                      <span className="mdl-textfield__error ng-binding" ng-show="(job_or_intern!=1)">Kindly
                        enter the deadline to apply for job</span>
                    </div>
                    <div ng-show="(job_or_intern != 1)" style={{float: 'right'}} className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label half-textfield is-upgraded" ng-class="{'is-invalid': jobFormPart1.job_salary.$error.required}" data-upgraded=",MaterialTextfield">
                      <input className="mdl-textfield__input ng-pristine ng-untouched ng-empty ng-valid ng-valid-required" type="text" id="job_salary" ng-model="job_salary" ng-required="firstSubmit" name="job_salary" />
                      <label className="mdl-textfield__label ng-binding" htmlFor="job_salary">Salary*</label>
                      <span className="mdl-textfield__error ng-binding">Kindly enter
                        the Salary</span>
                    </div>
                    <div ng-show="(job_or_intern==1)" style={{float: 'right'}} className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label half-textfield ng-hide is-upgraded" data-upgraded=",MaterialTextfield">
                      <input className="mdl-textfield__input ng-pristine ng-untouched ng-empty ng-valid ng-valid-required" type="text" id="job_salary" ng-model="job_salary" ng-required="firstSubmit" name="job_salary" />
                      <label className="mdl-textfield__label ng-binding" htmlFor="job_salary">Stipend*</label>
                      <span className="mdl-textfield__error ng-binding">Kindly
                        enter the stipend</span>
                    </div>
                  </div>
                  <div ng-show="(job_or_intern==1)" className="ng-hide">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label half-textfield is-upgraded" ng-class="{'is-invalid': jobFormPart1.duration.$error.required && (job_or_intern==1)}" data-upgraded=",MaterialTextfield">
                      <input className="mdl-textfield__input ng-pristine ng-untouched ng-empty ng-valid ng-valid-required" type="text" id="intern_duration" ng-model="duration" ng-required="firstSubmit && (job_or_intern==1)" name="duration" />
                      <label className="mdl-textfield__label ng-binding" htmlFor="intern_duration">Duration *</label>
                      <span className="mdl-textfield__error ng-binding">Kindly
                        enter the duration of the internship</span>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label half-textfield is-upgraded" style={{float: 'right'}} ng-class="{'is-dirty': internSdate, 'is-invalid': jobFormPart1.internSdate.$error.required && (job_or_intern==1)}" data-upgraded=",MaterialTextfield">
                      <input className="mdl-textfield__input ng-pristine ng-untouched ng-empty ng-valid ng-valid-required" type="text" id="intern_start" name="internSdate" readOnly="readonly" ng-model="internSdate" ng-required="firstSubmit && (job_or_intern==1)" ng-focus="openSdatePicker($event)" />
                      <label className="mdl-textfield__label ng-binding" htmlFor="intern_start">Start Date of Internship*</label>
                      <span className="mdl-textfield__error ng-binding">Kindly
                        enter the start date of the internship</span>
                    </div>
                  </div>
                  <input type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-rippleeffect mdl-typography--font-regular" ng-click="validatePart1(jobFormPart1)" style={{margin: '20px 0px', float: 'right'}} defaultValue="Next" data-upgraded=",MaterialButton" />
                </form>
                <form ng-init="receive_type=0" ng-show="JobFormStep==2" name="jobFormPart2" noValidate className="ng-pristine ng-valid ng-valid-required ng-hide">
                  <div className style={{padding: '20px 0px'}}>
                    <div ng-class="{'mdl-color-text--red-700': secondSubmit &&  !receive_type}" className="ng-binding">How would you like to receive an application?*
                    </div>
                    <br />
                    <label className="mdl-radio mdl-js-radio mdl-js-rippleeffect m-b-20 is-checked is-upgraded" htmlFor="checkbox-r1" data-upgraded=",MaterialRadio">
                      <input type="radio" name="receive_type" id="checkbox-r1" className="mdl-radio__button ng-pristine ng-untouched ng-valid ng-not-empty" defaultValue={0} ng-model="receive_type" defaultChecked="checked" />
                      <span className="mdl-radio__label ng-binding">I would like to
                        receive applications on my e-mail.</span>
                      <span className="mdl-radio__outer-circle" /><span className="mdl-radio__inner-circle" /></label><br />
                    <label className="mdl-radio mdl-js-radio mdl-js-rippleeffect is-upgraded" htmlFor="checkbox-r2" data-upgraded=",MaterialRadio">
                      <input type="radio" name="receive_type" id="checkbox-r2" className="mdl-radio__button ng-pristine ng-untouched ng-valid ng-not-empty" defaultValue={1} ng-model="receive_type" />
                      <span className="mdl-radio__label ng-binding">Candidates will
                        apply through an external link.</span>
                      <span className="mdl-radio__outer-circle" /><span className="mdl-radio__inner-circle" /></label><br />
                    <span className="font-12 ng-binding ng-hide" style={{paddingLeft: '24px'}} ng-show="(receive_type == 1)"/>Enter Email
                      address (eg. example@example.com) or any extarnal link (eg.
                      https:
                  </div>
                  <div ng-show="secondSubmit &&  !receive_type" style={{padding: '20px 0px'}} className="mdl-color-text--red-700 ng-binding ng-hide">Please select an
                    application type above.</div>
                  <div ng-show="(receive_type == 1)" style={{padding: '20px 0px'}} className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label ng-hide is-upgraded" data-upgraded=",MaterialTextfield">
                    <input className="mdl-textfield__input ng-pristine ng-untouched ng-empty ng-valid ng-valid-required" type="text" id="external_link" ng-model="external_link" ng-required="secondSubmit" name="external_link" />
                    <label className="mdl-textfield__label ng-binding" htmlFor="external_link">External Link*</label>
                  </div>
                  <div style={{paddingTop: '10px'}}>
                    <input type="submit" className="mdl-button mdl-js-button mdl-color-text--accent mdl-js-rippleeffect mdl-typography--font-regular" defaultValue="Back" ng-click="JobFormStep=1" data-upgraded=",MaterialButton" />
                    <input type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-rippleeffect mdl-typography--font-regular" ng-click="validatePart2(jobFormPart2)" style={{float: 'right'}} defaultValue="Next" data-upgraded=",MaterialButton" />
                  </div>
                </form>
                <form ng-show="JobFormStep==3" name="jobFormPart3" noValidate className="ng-valid ng-valid-required ng-hide ng-dirty ng-valid-parse" >
                  <div className="rel-pos padding-bottom-16">
                    <div className="padding-bottom-16 ng-binding mdl-color-text--red-700" ng-class="{'mdl-color-text--red-700': !com_description}">
                      Write about company *</div>
                    <div className="maximize-width border-light-grey">
                      <div id="job_company_desc" className="bb-zero resize-none overflow-hidden ng-untouched ng-empty ng-valid ng-valid-required ng-dirty ng-valid-parse" type="text" ckeditor="ckOptions" ng-model="com_description" ng-required="thirdSubmit" style={{visibility: 'hidden', display: 'none'}} /><div id="cke_job_company_desc" className="cke_136 cke cke_reset cke_chrome cke_editor_job_company_desc cke_ltr cke_browser_webkit" dir="ltr" lang="en" role="application" aria-labelledby="cke_job_company_desc_arialbl"><span id="cke_job_company_desc_arialbl" className="cke_voice_label">Rich Text Editor, job_company_desc</span><div className="cke_inner cke_reset" role="presentation"><span id="cke_136_top" className="cke_top cke_reset_all" role="presentation" style={{height: 'auto', userSelect: 'none'}}><span id="cke_148" className="cke_voice_label">Editor toolbars</span><span id="cke_136_toolbox" className="cke_toolbox" role="group" aria-labelledby="cke_148" onmousedown="return false;"><span id="cke_152" className="cke_toolbar" aria-labelledby="cke_152_label" role="toolbar"><span id="cke_152_label" className="cke_voice_label">Styles</span><span className="cke_toolbar_start" /><span id="cke_149" className="cke_combo cke_combo__styles cke_combo_off" role="presentation"><span id="cke_149_label" className="cke_combo_label">Styles</span><a className="cke_combo_button" title="Formatting Styles" tabIndex={-1} href="javascript:void('Formatting Styles')" hidefocus="true" role="button" aria-labelledby="cke_149_label" aria-haspopup="true" onkeydown="return CKEDITOR.tools.callFunction(2,event,this);" onfocus="return CKEDITOR.tools.callFunction(3,event);" onclick="CKEDITOR.tools.callFunction(1,this);return false;"><span id="cke_149_text" className="cke_combo_text cke_combo_inlinelabel">Styles</span><span className="cke_combo_open"><span className="cke_combo_arrow" /></span></a></span><span id="cke_150" className="cke_combo cke_combo__font cke_combo_off" role="presentation"><span id="cke_150_label" className="cke_combo_label">Font</span><a className="cke_combo_button" title="Font Name" tabIndex={-1} href="javascript:void('Font Name')" hidefocus="true" role="button" aria-labelledby="cke_150_label" aria-haspopup="true" onkeydown="return CKEDITOR.tools.callFunction(5,event,this);" onfocus="return CKEDITOR.tools.callFunction(6,event);" onclick="CKEDITOR.tools.callFunction(4,this);return false;"><span id="cke_150_text" className="cke_combo_text cke_combo_inlinelabel">Font</span><span className="cke_combo_open"><span className="cke_combo_arrow" /></span></a></span><span id="cke_151" className="cke_combo cke_combo__fontsize cke_combo_off" role="presentation"><span id="cke_151_label" className="cke_combo_label">Size</span><a className="cke_combo_button" title="Font Size" tabIndex={-1} href="javascript:void('Font Size')" hidefocus="true" role="button" aria-labelledby="cke_151_label" aria-haspopup="true" onkeydown="return CKEDITOR.tools.callFunction(8,event,this);" onfocus="return CKEDITOR.tools.callFunction(9,event);" onclick="CKEDITOR.tools.callFunction(7,this);return false;"><span id="cke_151_text" className="cke_combo_text cke_combo_inlinelabel">Size</span><span className="cke_combo_open"><span className="cke_combo_arrow" /></span></a></span><span className="cke_toolbar_end" /></span><span id="cke_153" className="cke_toolbar" aria-labelledby="cke_153_label" role="toolbar"><span id="cke_153_label" className="cke_voice_label">Basic Styles</span><span className="cke_toolbar_start" /><span className="cke_toolgroup" role="presentation"><a id="cke_154" className="cke_button cke_button__bold cke_button_off" href="javascript:void('Bold')" title="Bold" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_154_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(10,event);" onfocus="return CKEDITOR.tools.callFunction(11,event);" onclick="CKEDITOR.tools.callFunction(12,this);return false;"><span className="cke_button_icon cke_button__bold_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/icons.png?t=G6DF")', backgroundPosition: '0 -24px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_154_label" className="cke_button_label cke_button__bold_label" aria-hidden="false">Bold</span></a><a id="cke_155" className="cke_button cke_button__italic cke_button_off" href="javascript:void('Italic')" title="Italic" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_155_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(13,event);" onfocus="return CKEDITOR.tools.callFunction(14,event);" onclick="CKEDITOR.tools.callFunction(15,this);return false;"><span className="cke_button_icon cke_button__italic_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/icons.png?t=G6DF")', backgroundPosition: '0 -48px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_155_label" className="cke_button_label cke_button__italic_label" aria-hidden="false">Italic</span></a><a id="cke_156" className="cke_button cke_button__underline cke_button_off" href="javascript:void('Underline')" title="Underline" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_156_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(16,event);" onfocus="return CKEDITOR.tools.callFunction(17,event);" onclick="CKEDITOR.tools.callFunction(18,this);return false;"><span className="cke_button_icon cke_button__underline_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/icons.png?t=G6DF")', backgroundPosition: '0 -144px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_156_label" className="cke_button_label cke_button__underline_label" aria-hidden="false">Underline</span></a><span className="cke_toolbar_separator" role="separator" /><a id="cke_157" className="cke_button cke_button__textcolor cke_button_off" href="javascript:void('Text Color')" title="Text Color" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_157_label" aria-haspopup="true" onkeydown="return CKEDITOR.tools.callFunction(19,event);" onfocus="return CKEDITOR.tools.callFunction(20,event);" onclick="CKEDITOR.tools.callFunction(21,this);return false;"><span className="cke_button_icon cke_button__textcolor_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/colorbutton/icons/textcolor.png?t=G6DF")', backgroundPosition: '0 0px', backgroundSize: '16px'}}>&nbsp;</span><span id="cke_157_label" className="cke_button_label cke_button__textcolor_label" aria-hidden="false">Text Color</span><span className="cke_button_arrow" /></a><a id="cke_158" className="cke_button cke_button__bgcolor cke_button_off" href="javascript:void('Background Color')" title="Background Color" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_158_label" aria-haspopup="true" onkeydown="return CKEDITOR.tools.callFunction(22,event);" onfocus="return CKEDITOR.tools.callFunction(23,event);" onclick="CKEDITOR.tools.callFunction(24,this);return false;"><span className="cke_button_icon cke_button__bgcolor_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/colorbutton/icons/bgcolor.png?t=G6DF")', backgroundPosition: '0 0px', backgroundSize: '16px'}}>&nbsp;</span><span id="cke_158_label" className="cke_button_label cke_button__bgcolor_label" aria-hidden="false">Background Color</span><span className="cke_button_arrow" /></a><span className="cke_toolbar_separator" role="separator" /><a id="cke_159" className="cke_button cke_button__removeformat cke_button_off" href="javascript:void('Remove Format')" title="Remove Format" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_159_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(25,event);" onfocus="return CKEDITOR.tools.callFunction(26,event);" onclick="CKEDITOR.tools.callFunction(27,this);return false;"><span className="cke_button_icon cke_button__removeformat_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/icons.png?t=G6DF")', backgroundPosition: '0 -792px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_159_label" className="cke_button_label cke_button__removeformat_label" aria-hidden="false">Remove Format</span></a></span><span className="cke_toolbar_end" /></span><span id="cke_160" className="cke_toolbar" aria-labelledby="cke_160_label" role="toolbar"><span id="cke_160_label" className="cke_voice_label">Insert</span><span className="cke_toolbar_start" /><span className="cke_toolgroup" role="presentation"><a id="cke_161" className="cke_button cke_button__link cke_button_off" href="javascript:void('Link')" title="Link" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_161_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(28,event);" onfocus="return CKEDITOR.tools.callFunction(29,event);" onclick="CKEDITOR.tools.callFunction(30,this);return false;"><span className="cke_button_icon cke_button__link_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/icons.png?t=G6DF")', backgroundPosition: '0 -528px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_161_label" className="cke_button_label cke_button__link_label" aria-hidden="false">Link</span></a><a id="cke_162" className="cke_button cke_button__sbutton cke_button_off" href="javascript:void('Simple Button')" title="Simple Button" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_162_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(31,event);" onfocus="return CKEDITOR.tools.callFunction(32,event);" onclick="CKEDITOR.tools.callFunction(33,this);return false;"><span className="cke_button_icon cke_button__sbutton_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/sbutton/images/sbutton.png?t=G6DF")', backgroundPosition: '0 0px', backgroundSize: '16px'}}>&nbsp;</span><span id="cke_162_label" className="cke_button_label cke_button__sbutton_label" aria-hidden="false">Simple Button</span></a><span className="cke_toolbar_separator" role="separator" /><a id="cke_163" className="cke_button cke_button__table cke_button_off" href="javascript:void('Table')" title="Table" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_163_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(34,event);" onfocus="return CKEDITOR.tools.callFunction(35,event);" onclick="CKEDITOR.tools.callFunction(36,this);return false;"><span className="cke_button_icon cke_button__table_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/icons.png?t=G6DF")', backgroundPosition: '0 -912px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_163_label" className="cke_button_label cke_button__table_label" aria-hidden="false">Table</span></a><a id="cke_164" className="cke_button cke_button__horizontalrule cke_button_off" href="javascript:void('Insert Horizontal Line')" title="Insert Horizontal Line" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_164_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(37,event);" onfocus="return CKEDITOR.tools.callFunction(38,event);" onclick="CKEDITOR.tools.callFunction(39,this);return false;"><span className="cke_button_icon cke_button__horizontalrule_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/icons.png?t=G6DF")', backgroundPosition: '0 -336px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_164_label" className="cke_button_label cke_button__horizontalrule_label" aria-hidden="false">Insert Horizontal Line</span></a><a id="cke_165" className="cke_button cke_button__youtube cke_button_off" href="javascript:void('Embed YouTube Video')" title="Embed YouTube Video" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_165_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(40,event);" onfocus="return CKEDITOR.tools.callFunction(41,event);" onclick="CKEDITOR.tools.callFunction(42,this);return false;"><span className="cke_button_icon cke_button__youtube_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/youtube/images/icon.png?t=G6DF")', backgroundPosition: '0 undefinedpx', backgroundSize: '16px'}}>&nbsp;</span><span id="cke_165_label" className="cke_button_label cke_button__youtube_label" aria-hidden="false">Embed YouTube Video</span></a><a id="cke_166" className="cke_button cke_button__simage cke_button_off" href="javascript:void('Image')" title="Image" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_166_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(43,event);" onfocus="return CKEDITOR.tools.callFunction(44,event);" onclick="CKEDITOR.tools.callFunction(45,this);return false;"><span className="cke_button_icon cke_button__simage_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/simage/icons/simage.png?t=G6DF")', backgroundPosition: '0 0px', backgroundSize: '16px'}}>&nbsp;</span><span id="cke_166_label" className="cke_button_label cke_button__simage_label" aria-hidden="false">Image</span></a><a id="cke_167" className="cke_button cke_button__sfile cke_button_off" href="javascript:void('File')" title="File" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_167_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(46,event);" onfocus="return CKEDITOR.tools.callFunction(47,event);" onclick="CKEDITOR.tools.callFunction(48,this);return false;"><span className="cke_button_icon cke_button__sfile_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/simplefileupload/icons/sfile.png?t=G6DF")', backgroundPosition: '0 0px', backgroundSize: '16px'}}>&nbsp;</span><span id="cke_167_label" className="cke_button_label cke_button__sfile_label" aria-hidden="false">File</span></a></span><span className="cke_toolbar_end" /></span><span id="cke_168" className="cke_toolbar" aria-labelledby="cke_168_label" role="toolbar"><span id="cke_168_label" className="cke_voice_label">Paragraph</span><span className="cke_toolbar_start" /><span className="cke_toolgroup" role="presentation"><a id="cke_169" className="cke_button cke_button__numberedlist cke_button_off" href="javascript:void('Insert/Remove Numbered List')" title="Insert/Remove Numbered List" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_169_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(49,event);" onfocus="return CKEDITOR.tools.callFunction(50,event);" onclick="CKEDITOR.tools.callFunction(51,this);return false;"><span className="cke_button_icon cke_button__numberedlist_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/icons.png?t=G6DF")', backgroundPosition: '0 -648px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_169_label" className="cke_button_label cke_button__numberedlist_label" aria-hidden="false">Insert/Remove Numbered List</span></a><a id="cke_170" className="cke_button cke_button__bulletedlist cke_button_off" href="javascript:void('Insert/Remove Bulleted List')" title="Insert/Remove Bulleted List" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_170_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(52,event);" onfocus="return CKEDITOR.tools.callFunction(53,event);" onclick="CKEDITOR.tools.callFunction(54,this);return false;"><span className="cke_button_icon cke_button__bulletedlist_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/icons.png?t=G6DF")', backgroundPosition: '0 -600px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_170_label" className="cke_button_label cke_button__bulletedlist_label" aria-hidden="false">Insert/Remove Bulleted List</span></a><span className="cke_toolbar_separator" role="separator" /><a id="cke_171" className="cke_button cke_button__blockquote cke_button_off" href="javascript:void('Block Quote')" title="Block Quote" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_171_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(55,event);" onfocus="return CKEDITOR.tools.callFunction(56,event);" onclick="CKEDITOR.tools.callFunction(57,this);return false;"><span className="cke_button_icon cke_button__blockquote_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/icons.png?t=G6DF")', backgroundPosition: '0 -168px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_171_label" className="cke_button_label cke_button__blockquote_label" aria-hidden="false">Block Quote</span></a><span className="cke_toolbar_separator" role="separator" /><a id="cke_172" className="cke_button cke_button__justifyleft cke_button_off" href="javascript:void('Align Left')" title="Align Left" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_172_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(58,event);" onfocus="return CKEDITOR.tools.callFunction(59,event);" onclick="CKEDITOR.tools.callFunction(60,this);return false;"><span className="cke_button_icon cke_button__justifyleft_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/justify/icons/justifyleft.png?t=G6DF")', backgroundPosition: '0 0px', backgroundSize: '16px'}}>&nbsp;</span><span id="cke_172_label" className="cke_button_label cke_button__justifyleft_label" aria-hidden="false">Align Left</span></a><a id="cke_173" className="cke_button cke_button__justifycenter cke_button_off" href="javascript:void('Center')" title="Center" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_173_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(61,event);" onfocus="return CKEDITOR.tools.callFunction(62,event);" onclick="CKEDITOR.tools.callFunction(63,this);return false;"><span className="cke_button_icon cke_button__justifycenter_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/justify/icons/justifycenter.png?t=G6DF")', backgroundPosition: '0 0px', backgroundSize: '16px'}}>&nbsp;</span><span id="cke_173_label" className="cke_button_label cke_button__justifycenter_label" aria-hidden="false">Center</span></a><a id="cke_174" className="cke_button cke_button__justifyright cke_button_off" href="javascript:void('Align Right')" title="Align Right" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_174_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(64,event);" onfocus="return CKEDITOR.tools.callFunction(65,event);" onclick="CKEDITOR.tools.callFunction(66,this);return false;"><span className="cke_button_icon cke_button__justifyright_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/justify/icons/justifyright.png?t=G6DF")', backgroundPosition: '0 0px', backgroundSize: '16px'}}>&nbsp;</span><span id="cke_174_label" className="cke_button_label cke_button__justifyright_label" aria-hidden="false">Align Right</span></a><a id="cke_175" className="cke_button cke_button__justifyblock cke_button_off" href="javascript:void('Justify')" title="Justify" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_175_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(67,event);" onfocus="return CKEDITOR.tools.callFunction(68,event);" onclick="CKEDITOR.tools.callFunction(69,this);return false;"><span className="cke_button_icon cke_button__justifyblock_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/justify/icons/justifyblock.png?t=G6DF")', backgroundPosition: '0 0px', backgroundSize: '16px'}}>&nbsp;</span><span id="cke_175_label" className="cke_button_label cke_button__justifyblock_label" aria-hidden="false">Justify</span></a></span><span className="cke_toolbar_end" /></span><span id="cke_176" className="cke_toolbar" aria-labelledby="cke_176_label" role="toolbar"><span id="cke_176_label" className="cke_voice_label">Document</span><span className="cke_toolbar_start" /><span className="cke_toolgroup" role="presentation"><a id="cke_177" className="cke_button cke_button__source cke_button_off" href="javascript:void('Source')" title="Source" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_177_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(70,event);" onfocus="return CKEDITOR.tools.callFunction(71,event);" onclick="CKEDITOR.tools.callFunction(72,this);return false;"><span className="cke_button_icon cke_button__source_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/icons.png?t=G6DF")', backgroundPosition: '0 -840px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_177_label" className="cke_button_label cke_button__source_label" aria-hidden="false">Source</span></a></span><span className="cke_toolbar_end" /></span></span></span><div id="cke_136_contents" className="cke_contents cke_reset" role="presentation" style={{height: '200px'}}><span id="cke_180" className="cke_voice_label">Press ALT 0 for help</span><iframe src frameBorder={0} className="cke_wysiwyg_frame cke_reset" title="Rich Text Editor, job_company_desc" aria-describedby="cke_180" tabIndex={0} allowTransparency="true" style={{width: '100%', height: '100%'}} /></div></div></div>
                    </div>
                  </div>
                  <div className="rel-pos padding-top-40  padding-bottom-16">
                    <div className="padding-bottom-16 ng-binding mdl-color-text--red-700" ng-class="{'mdl-color-text--red-700': !job_description}">
                      Write about role, responsibility, eligibility
                      etc. *</div>
                    <div className="maximize-width border-light-grey">
                      <div id="job_create_description" className="bb-zero resize-none overflow-hidden ng-untouched ng-empty ng-valid ng-valid-required ng-dirty ng-valid-parse" type="text" ckeditor="ckOptions" ng-model="job_description" ng-required="thirdSubmit" style={{visibility: 'hidden', display: 'none'}} /><div id="cke_job_create_description" className="cke_137 cke cke_reset cke_chrome cke_editor_job_create_description cke_ltr cke_browser_webkit" dir="ltr" lang="en" role="application" aria-labelledby="cke_job_create_description_arialbl"><span id="cke_job_create_description_arialbl" className="cke_voice_label">Rich Text Editor, job_create_description</span><div className="cke_inner cke_reset" role="presentation"><span id="cke_137_top" className="cke_top cke_reset_all" role="presentation" style={{height: 'auto', userSelect: 'none'}}><span id="cke_188" className="cke_voice_label">Editor toolbars</span><span id="cke_137_toolbox" className="cke_toolbox" role="group" aria-labelledby="cke_188" onmousedown="return false;"><span id="cke_192" className="cke_toolbar" aria-labelledby="cke_192_label" role="toolbar"><span id="cke_192_label" className="cke_voice_label">Styles</span><span className="cke_toolbar_start" /><span id="cke_189" className="cke_combo cke_combo__styles cke_combo_off" role="presentation"><span id="cke_189_label" className="cke_combo_label">Styles</span><a className="cke_combo_button" title="Formatting Styles" tabIndex={-1} href="javascript:void('Formatting Styles')" hidefocus="true" role="button" aria-labelledby="cke_189_label" aria-haspopup="true" onkeydown="return CKEDITOR.tools.callFunction(76,event,this);" onfocus="return CKEDITOR.tools.callFunction(77,event);" onclick="CKEDITOR.tools.callFunction(75,this);return false;"><span id="cke_189_text" className="cke_combo_text cke_combo_inlinelabel">Styles</span><span className="cke_combo_open"><span className="cke_combo_arrow" /></span></a></span><span id="cke_190" className="cke_combo cke_combo__font cke_combo_off" role="presentation"><span id="cke_190_label" className="cke_combo_label">Font</span><a className="cke_combo_button" title="Font Name" tabIndex={-1} href="javascript:void('Font Name')" hidefocus="true" role="button" aria-labelledby="cke_190_label" aria-haspopup="true" onkeydown="return CKEDITOR.tools.callFunction(79,event,this);" onfocus="return CKEDITOR.tools.callFunction(80,event);" onclick="CKEDITOR.tools.callFunction(78,this);return false;"><span id="cke_190_text" className="cke_combo_text cke_combo_inlinelabel">Font</span><span className="cke_combo_open"><span className="cke_combo_arrow" /></span></a></span><span id="cke_191" className="cke_combo cke_combo__fontsize cke_combo_off" role="presentation"><span id="cke_191_label" className="cke_combo_label">Size</span><a className="cke_combo_button" title="Font Size" tabIndex={-1} href="javascript:void('Font Size')" hidefocus="true" role="button" aria-labelledby="cke_191_label" aria-haspopup="true" onkeydown="return CKEDITOR.tools.callFunction(82,event,this);" onfocus="return CKEDITOR.tools.callFunction(83,event);" onclick="CKEDITOR.tools.callFunction(81,this);return false;"><span id="cke_191_text" className="cke_combo_text cke_combo_inlinelabel">Size</span><span className="cke_combo_open"><span className="cke_combo_arrow" /></span></a></span><span className="cke_toolbar_end" /></span><span id="cke_193" className="cke_toolbar" aria-labelledby="cke_193_label" role="toolbar"><span id="cke_193_label" className="cke_voice_label">Basic Styles</span><span className="cke_toolbar_start" /><span className="cke_toolgroup" role="presentation"><a id="cke_194" className="cke_button cke_button__bold cke_button_off" href="javascript:void('Bold')" title="Bold" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_194_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(84,event);" onfocus="return CKEDITOR.tools.callFunction(85,event);" onclick="CKEDITOR.tools.callFunction(86,this);return false;"><span className="cke_button_icon cke_button__bold_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/icons.png?t=G6DF")', backgroundPosition: '0 -24px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_194_label" className="cke_button_label cke_button__bold_label" aria-hidden="false">Bold</span></a><a id="cke_195" className="cke_button cke_button__italic cke_button_off" href="javascript:void('Italic')" title="Italic" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_195_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(87,event);" onfocus="return CKEDITOR.tools.callFunction(88,event);" onclick="CKEDITOR.tools.callFunction(89,this);return false;"><span className="cke_button_icon cke_button__italic_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/icons.png?t=G6DF")', backgroundPosition: '0 -48px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_195_label" className="cke_button_label cke_button__italic_label" aria-hidden="false">Italic</span></a><a id="cke_196" className="cke_button cke_button__underline cke_button_off" href="javascript:void('Underline')" title="Underline" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_196_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(90,event);" onfocus="return CKEDITOR.tools.callFunction(91,event);" onclick="CKEDITOR.tools.callFunction(92,this);return false;"><span className="cke_button_icon cke_button__underline_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/icons.png?t=G6DF")', backgroundPosition: '0 -144px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_196_label" className="cke_button_label cke_button__underline_label" aria-hidden="false">Underline</span></a><span className="cke_toolbar_separator" role="separator" /><a id="cke_197" className="cke_button cke_button__textcolor cke_button_off" href="javascript:void('Text Color')" title="Text Color" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_197_label" aria-haspopup="true" onkeydown="return CKEDITOR.tools.callFunction(93,event);" onfocus="return CKEDITOR.tools.callFunction(94,event);" onclick="CKEDITOR.tools.callFunction(95,this);return false;"><span className="cke_button_icon cke_button__textcolor_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/colorbutton/icons/textcolor.png?t=G6DF")', backgroundPosition: '0 0px', backgroundSize: '16px'}}>&nbsp;</span><span id="cke_197_label" className="cke_button_label cke_button__textcolor_label" aria-hidden="false">Text Color</span><span className="cke_button_arrow" /></a><a id="cke_198" className="cke_button cke_button__bgcolor cke_button_off" href="javascript:void('Background Color')" title="Background Color" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_198_label" aria-haspopup="true" onkeydown="return CKEDITOR.tools.callFunction(96,event);" onfocus="return CKEDITOR.tools.callFunction(97,event);" onclick="CKEDITOR.tools.callFunction(98,this);return false;"><span className="cke_button_icon cke_button__bgcolor_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/colorbutton/icons/bgcolor.png?t=G6DF")', backgroundPosition: '0 0px', backgroundSize: '16px'}}>&nbsp;</span><span id="cke_198_label" className="cke_button_label cke_button__bgcolor_label" aria-hidden="false">Background Color</span><span className="cke_button_arrow" /></a><span className="cke_toolbar_separator" role="separator" /><a id="cke_199" className="cke_button cke_button__removeformat cke_button_off" href="javascript:void('Remove Format')" title="Remove Format" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_199_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(99,event);" onfocus="return CKEDITOR.tools.callFunction(100,event);" onclick="CKEDITOR.tools.callFunction(101,this);return false;"><span className="cke_button_icon cke_button__removeformat_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/icons.png?t=G6DF")', backgroundPosition: '0 -792px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_199_label" className="cke_button_label cke_button__removeformat_label" aria-hidden="false">Remove Format</span></a></span><span className="cke_toolbar_end" /></span><span id="cke_200" className="cke_toolbar" aria-labelledby="cke_200_label" role="toolbar"><span id="cke_200_label" className="cke_voice_label">Insert</span><span className="cke_toolbar_start" /><span className="cke_toolgroup" role="presentation"><a id="cke_201" className="cke_button cke_button__link cke_button_off" href="javascript:void('Link')" title="Link" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_201_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(102,event);" onfocus="return CKEDITOR.tools.callFunction(103,event);" onclick="CKEDITOR.tools.callFunction(104,this);return false;"><span className="cke_button_icon cke_button__link_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/icons.png?t=G6DF")', backgroundPosition: '0 -528px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_201_label" className="cke_button_label cke_button__link_label" aria-hidden="false">Link</span></a><a id="cke_202" className="cke_button cke_button__sbutton cke_button_off" href="javascript:void('Simple Button')" title="Simple Button" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_202_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(105,event);" onfocus="return CKEDITOR.tools.callFunction(106,event);" onclick="CKEDITOR.tools.callFunction(107,this);return false;"><span className="cke_button_icon cke_button__sbutton_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/sbutton/images/sbutton.png?t=G6DF")', backgroundPosition: '0 0px', backgroundSize: '16px'}}>&nbsp;</span><span id="cke_202_label" className="cke_button_label cke_button__sbutton_label" aria-hidden="false">Simple Button</span></a><span className="cke_toolbar_separator" role="separator" /><a id="cke_203" className="cke_button cke_button__table cke_button_off" href="javascript:void('Table')" title="Table" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_203_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(108,event);" onfocus="return CKEDITOR.tools.callFunction(109,event);" onclick="CKEDITOR.tools.callFunction(110,this);return false;"><span className="cke_button_icon cke_button__table_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/icons.png?t=G6DF")', backgroundPosition: '0 -912px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_203_label" className="cke_button_label cke_button__table_label" aria-hidden="false">Table</span></a><a id="cke_204" className="cke_button cke_button__horizontalrule cke_button_off" href="javascript:void('Insert Horizontal Line')" title="Insert Horizontal Line" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_204_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(111,event);" onfocus="return CKEDITOR.tools.callFunction(112,event);" onclick="CKEDITOR.tools.callFunction(113,this);return false;"><span className="cke_button_icon cke_button__horizontalrule_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/icons.png?t=G6DF")', backgroundPosition: '0 -336px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_204_label" className="cke_button_label cke_button__horizontalrule_label" aria-hidden="false">Insert Horizontal Line</span></a><a id="cke_205" className="cke_button cke_button__youtube cke_button_off" href="javascript:void('Embed YouTube Video')" title="Embed YouTube Video" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_205_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(114,event);" onfocus="return CKEDITOR.tools.callFunction(115,event);" onclick="CKEDITOR.tools.callFunction(116,this);return false;"><span className="cke_button_icon cke_button__youtube_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/youtube/images/icon.png?t=G6DF")', backgroundPosition: '0 undefinedpx', backgroundSize: '16px'}}>&nbsp;</span><span id="cke_205_label" className="cke_button_label cke_button__youtube_label" aria-hidden="false">Embed YouTube Video</span></a><a id="cke_206" className="cke_button cke_button__simage cke_button_off" href="javascript:void('Image')" title="Image" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_206_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(117,event);" onfocus="return CKEDITOR.tools.callFunction(118,event);" onclick="CKEDITOR.tools.callFunction(119,this);return false;"><span className="cke_button_icon cke_button__simage_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/simage/icons/simage.png?t=G6DF")', backgroundPosition: '0 0px', backgroundSize: '16px'}}>&nbsp;</span><span id="cke_206_label" className="cke_button_label cke_button__simage_label" aria-hidden="false">Image</span></a><a id="cke_207" className="cke_button cke_button__sfile cke_button_off" href="javascript:void('File')" title="File" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_207_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(120,event);" onfocus="return CKEDITOR.tools.callFunction(121,event);" onclick="CKEDITOR.tools.callFunction(122,this);return false;"><span className="cke_button_icon cke_button__sfile_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/simplefileupload/icons/sfile.png?t=G6DF")', backgroundPosition: '0 0px', backgroundSize: '16px'}}>&nbsp;</span><span id="cke_207_label" className="cke_button_label cke_button__sfile_label" aria-hidden="false">File</span></a></span><span className="cke_toolbar_end" /></span><span id="cke_208" className="cke_toolbar" aria-labelledby="cke_208_label" role="toolbar"><span id="cke_208_label" className="cke_voice_label">Paragraph</span><span className="cke_toolbar_start" /><span className="cke_toolgroup" role="presentation"><a id="cke_209" className="cke_button cke_button__numberedlist cke_button_off" href="javascript:void('Insert/Remove Numbered List')" title="Insert/Remove Numbered List" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_209_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(123,event);" onfocus="return CKEDITOR.tools.callFunction(124,event);" onclick="CKEDITOR.tools.callFunction(125,this);return false;"><span className="cke_button_icon cke_button__numberedlist_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/icons.png?t=G6DF")', backgroundPosition: '0 -648px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_209_label" className="cke_button_label cke_button__numberedlist_label" aria-hidden="false">Insert/Remove Numbered List</span></a><a id="cke_210" className="cke_button cke_button__bulletedlist cke_button_off" href="javascript:void('Insert/Remove Bulleted List')" title="Insert/Remove Bulleted List" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_210_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(126,event);" onfocus="return CKEDITOR.tools.callFunction(127,event);" onclick="CKEDITOR.tools.callFunction(128,this);return false;"><span className="cke_button_icon cke_button__bulletedlist_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/icons.png?t=G6DF")', backgroundPosition: '0 -600px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_210_label" className="cke_button_label cke_button__bulletedlist_label" aria-hidden="false">Insert/Remove Bulleted List</span></a><span className="cke_toolbar_separator" role="separator" /><a id="cke_211" className="cke_button cke_button__blockquote cke_button_off" href="javascript:void('Block Quote')" title="Block Quote" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_211_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(129,event);" onfocus="return CKEDITOR.tools.callFunction(130,event);" onclick="CKEDITOR.tools.callFunction(131,this);return false;"><span className="cke_button_icon cke_button__blockquote_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/icons.png?t=G6DF")', backgroundPosition: '0 -168px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_211_label" className="cke_button_label cke_button__blockquote_label" aria-hidden="false">Block Quote</span></a><span className="cke_toolbar_separator" role="separator" /><a id="cke_212" className="cke_button cke_button__justifyleft cke_button_off" href="javascript:void('Align Left')" title="Align Left" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_212_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(132,event);" onfocus="return CKEDITOR.tools.callFunction(133,event);" onclick="CKEDITOR.tools.callFunction(134,this);return false;"><span className="cke_button_icon cke_button__justifyleft_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/justify/icons/justifyleft.png?t=G6DF")', backgroundPosition: '0 0px', backgroundSize: '16px'}}>&nbsp;</span><span id="cke_212_label" className="cke_button_label cke_button__justifyleft_label" aria-hidden="false">Align Left</span></a><a id="cke_213" className="cke_button cke_button__justifycenter cke_button_off" href="javascript:void('Center')" title="Center" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_213_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(135,event);" onfocus="return CKEDITOR.tools.callFunction(136,event);" onclick="CKEDITOR.tools.callFunction(137,this);return false;"><span className="cke_button_icon cke_button__justifycenter_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/justify/icons/justifycenter.png?t=G6DF")', backgroundPosition: '0 0px', backgroundSize: '16px'}}>&nbsp;</span><span id="cke_213_label" className="cke_button_label cke_button__justifycenter_label" aria-hidden="false">Center</span></a><a id="cke_214" className="cke_button cke_button__justifyright cke_button_off" href="javascript:void('Align Right')" title="Align Right" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_214_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(138,event);" onfocus="return CKEDITOR.tools.callFunction(139,event);" onclick="CKEDITOR.tools.callFunction(140,this);return false;"><span className="cke_button_icon cke_button__justifyright_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/justify/icons/justifyright.png?t=G6DF")', backgroundPosition: '0 0px', backgroundSize: '16px'}}>&nbsp;</span><span id="cke_214_label" className="cke_button_label cke_button__justifyright_label" aria-hidden="false">Align Right</span></a><a id="cke_215" className="cke_button cke_button__justifyblock cke_button_off" href="javascript:void('Justify')" title="Justify" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_215_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(141,event);" onfocus="return CKEDITOR.tools.callFunction(142,event);" onclick="CKEDITOR.tools.callFunction(143,this);return false;"><span className="cke_button_icon cke_button__justifyblock_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/justify/icons/justifyblock.png?t=G6DF")', backgroundPosition: '0 0px', backgroundSize: '16px'}}>&nbsp;</span><span id="cke_215_label" className="cke_button_label cke_button__justifyblock_label" aria-hidden="false">Justify</span></a></span><span className="cke_toolbar_end" /></span><span id="cke_216" className="cke_toolbar" aria-labelledby="cke_216_label" role="toolbar"><span id="cke_216_label" className="cke_voice_label">Document</span><span className="cke_toolbar_start" /><span className="cke_toolgroup" role="presentation"><a id="cke_217" className="cke_button cke_button__source cke_button_off" href="javascript:void('Source')" title="Source" tabIndex={-1} hidefocus="true" role="button" aria-labelledby="cke_217_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(144,event);" onfocus="return CKEDITOR.tools.callFunction(145,event);" onclick="CKEDITOR.tools.callFunction(146,this);return false;"><span className="cke_button_icon cke_button__source_icon" style={{backgroundImage: 'url("https://d2ju86ym5zat6.cloudfront.net/libs/ckeditor/plugins/icons.png?t=G6DF")', backgroundPosition: '0 -840px', backgroundSize: 'auto'}}>&nbsp;</span><span id="cke_217_label" className="cke_button_label cke_button__source_label" aria-hidden="false">Source</span></a></span><span className="cke_toolbar_end" /></span></span></span><div id="cke_137_contents" className="cke_contents cke_reset" role="presentation" style={{height: '200px'}}><span id="cke_220" className="cke_voice_label">Press ALT 0 for help</span><iframe src frameBorder={0} className="cke_wysiwyg_frame cke_reset" title="Rich Text Editor, job_create_description" aria-describedby="cke_220" tabIndex={0} allowTransparency="true" style={{width: '100%', height: '100%'}} /></div></div></div>
                    </div>
                  </div>
                  
                  
                  <div style={{paddingTop: '10px'}}>
                    <input type="submit" className="mdl-button mdl-js-button mdl-color-text--accent mdl-js-rippleeffect mdl-typography--font-regular" defaultValue="Back" ng-click="JobFormStep=2" data-upgraded=",MaterialButton" />
                    <button type="submit" className="mdl-button font-14 mdl-js-button mdl-button--raised mdl-button--colored mdl-js-rippleeffect mdl-typography--font-regular ladda-button ladda-button-primary" style={{paddingTop: '0px', float: 'right'}} ng-click="validatePart3(jobFormPart3)" ladda-button="nowPostingJob" data-style="zoom-out" data-upgraded=",MaterialButton"><span className="ladda-label ng-binding">Submit</span><span className="ladda-spinner" /></button>
                  </div>
                </form>
              </div>
            </div> */}

            {/* <div ng-if="$root.app_data.loginStatus==1 && !community_seeker_off && info.my_pref_directive_options && (( (current_tab != 'e_internships') && (info.my_preferences.switch===null || info.my_preferences.provider_switch===null) ) || ( (current_tab == 'e_internships') && (info.my_preferences.internship_switch===null || info.my_preferences.internship_provider_switch===null) ))" className="mdl-card mdl-cell--12-col maximize-width homepage-shadow-6 m-b-20 ng-scope" >
              <div className="padding-lr-20 padding-tb-14">
                <i className="icon-Search_workeat mdl-color-text--primary font-16 margin-right-10" />
                <span ng-if="current_tab!='e_internships'" className="mdl-typography--font-regular ng-binding ng-scope">Set Job Portal Preferences</span>
                
              </div>
              <div className="mdl-card__actions mdl-card--border padding-0" />
              <jsonhandler options="info.my_pref_directive_options" className="ng-isolate-scope"><div style={{border: 'none !important'}}>
                  <div className="mdl-tabs mdl-js-tabs mdl-js-rippleeffect ng-scope is-upgraded"  ng-if="!input.layout || input.layout!='left-right'" data-upgraded=",MaterialTabs">
                    <div className="mdl-tabs__tab-bar ng-hide" style={{justifyContent: 'left', height: '40px'}} ng-hide="input.hide_categories">
                      <a ng-repeat="cat in input.categories track by $index" id="ct" href="#ct0-panel" className="mdl-tabs__tab font-12 show-search_bar ng-binding ng-scope is-active" style={{lineHeight: '40px !important', height: '40px !important'}} ng-click="onCategoryChange($index)">Set Job Portal Preferences</a>
                    </div>
                    <div ng-repeat="cat in input.categories track by $index" className="mdl-tabs__panel show-search_bar ng-scope is-active" id="ct0-panel" style={{maxWidth: '1024px !important'}}>
                      <customform options="cat.formconfig" className="ng-isolate-scope"><div className="padding-tb-24 padding-lr-15">
                          <h1 ng-if="options.title!='' && !(options.layout=='1-column' && options.flow=='top-bottom')" className="font-18 padding-lr-15 margin-tb-0 " />
                          
                          
                          
                          <div ng-if="options.layout=='2-column'" className="mdl-grid ng-scope">
                            <div ng-repeat="field in options.fields" className="mdl-cell mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone margin-tb-0 show-search_bar" ng-show="!field.visibleFn || field.isVisible()">
                              
                              
                              <div className >
                                <customfield field="field" response="responses[field.rkey]" options="options" className="ng-isolate-scope"><div className="rel-pos" style={{fontSize: '14px !important'}}>
                                    
                                    
                                    
                                    
                                    
                                    
                                    <div ng-if="field.type=='radio'" className="margin-bottom-20 " >
                                      
                                      <div ng-if="field.remove_title || field.show_label" className="mdl-color-text--primary font-12 font-16" style={{color: '#000000 !important'}}>
                                        
                                        Your preferences as job provider? <span ng-if="field.required" className="ng-scope"> *</span>
                                      </div>
                                      <label ng-repeat="dt in field.data" className="mdl-radio mdl-js-radio mdl-js-rippleeffect font-14 is-checked is-upgraded" style={{display: 'block', margin: '10px 0px'}} htmlFor="acf_1_field_2_i0" id="racf_1_field_2_opt_0" data-upgraded=",MaterialRadio">
                                        <input type="radio" id="acf_1_field_2_i0" name="provider_switch"  className="mdl-radio__button " defaultValue={0} ng-checked="dt.value==respObj[i]" ng-model="respObj[i]" ng-disabled="dt.disabled" defaultChecked="checked" />
                                        <span className="mdl-radio__label font-14" >Job provider</span>
                                        <div ng-if="dt.longtext" className="mdl-color-text--grey-600 font-12" style={{lineHeight: '14px'}}>Would like to recruit new talent.</div>
                                        <span className="mdl-radio__outer-circle" /><span className="mdl-radio__inner-circle" /></label><label ng-repeat="dt in field.data" className="mdl-radio mdl-js-radio mdl-js-rippleeffect font-14 is-upgraded" style={{display: 'block', margin: '10px 0px'}} htmlFor="acf_1_field_2_i1" id="racf_1_field_2_opt_1" data-upgraded=",MaterialRadio">
                                        <input type="radio" id="acf_1_field_2_i1" name="provider_switch"  className="mdl-radio__button " defaultValue={1} ng-checked="dt.value==respObj[i]" ng-model="respObj[i]" ng-disabled="dt.disabled" />
                                        <span className="mdl-radio__label font-14" >Job referrer</span>
                                        <div ng-if="dt.longtext" className="mdl-color-text--grey-600 font-12" style={{lineHeight: '14px'}}>Would like to refer my organizations offers.</div>
                                        <span className="mdl-radio__outer-circle" /><span className="mdl-radio__inner-circle" /></label><label ng-repeat="dt in field.data" className="mdl-radio mdl-js-radio mdl-js-rippleeffect font-14 is-upgraded" style={{display: 'block', margin: '10px 0px'}} htmlFor="acf_1_field_2_i2" id="racf_1_field_2_opt_2" data-upgraded=",MaterialRadio">
                                        <input type="radio" id="acf_1_field_2_i2" name="provider_switch"  className="mdl-radio__button " defaultValue={2} ng-checked="dt.value==respObj[i]" ng-model="respObj[i]" ng-disabled="dt.disabled" />
                                        <span className="mdl-radio__label font-14" >Not interested as job provider</span>
                                        
                                        <span className="mdl-radio__outer-circle" /><span className="mdl-radio__inner-circle" /></label>
                                      
                                      <div ng-show="field.error" className="font-12 mdl-color-text--red-600 ng-binding ng-hide">false</div>
                                    </div>
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                  </div>
                                </customfield>
                              </div>		
                            </div><div ng-repeat="field in options.fields" className="mdl-cell mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone margin-tb-0 show-search_bar" ng-show="!field.visibleFn || field.isVisible()">
                              
                              
                              <div className >
                                <customfield field="field" response="responses[field.rkey]" options="options" className="ng-isolate-scope"><div className="rel-pos" style={{fontSize: '14px !important'}}>
                                    
                                    
                                    
                                    
                                    
                                    
                                    <div ng-if="field.type=='radio'" className="margin-bottom-20 " >
                                      
                                      <div ng-if="field.remove_title || field.show_label" className="mdl-color-text--primary font-12 font-16" style={{color: '#000000 !important'}}>
                                        
                                        Your preferences as job seeker? <span ng-if="field.required" className="ng-scope"> *</span>
                                      </div>
                                      <label ng-repeat="dt in field.data" className="mdl-radio mdl-js-radio mdl-js-rippleeffect font-14 is-checked is-upgraded" style={{display: 'block', margin: '10px 0px'}} htmlFor="acf_1_field_3_i0" id="racf_1_field_3_opt_0" data-upgraded=",MaterialRadio">
                                        <input type="radio" id="acf_1_field_3_i0" name="switch"  className="mdl-radio__button " defaultValue={0} ng-checked="dt.value==respObj[i]" ng-model="respObj[i]" ng-disabled="dt.disabled" defaultChecked="checked" />
                                        <span className="mdl-radio__label font-14" >Actively applying for job</span>
                                        <div ng-if="dt.longtext" className="mdl-color-text--grey-600 font-12" style={{lineHeight: '14px'}}>Would like to receive regular notifications.</div>
                                        <span className="mdl-radio__outer-circle" /><span className="mdl-radio__inner-circle" /></label><label ng-repeat="dt in field.data" className="mdl-radio mdl-js-radio mdl-js-rippleeffect font-14 is-upgraded" style={{display: 'block', margin: '10px 0px'}} htmlFor="acf_1_field_3_i1" id="racf_1_field_3_opt_1" data-upgraded=",MaterialRadio">
                                        <input type="radio" id="acf_1_field_3_i1" name="switch"  className="mdl-radio__button " defaultValue={1} ng-checked="dt.value==respObj[i]" ng-model="respObj[i]" ng-disabled="dt.disabled" />
                                        <span className="mdl-radio__label font-14" >Casually looking for job</span>
                                        <div ng-if="dt.longtext" className="mdl-color-text--grey-600 font-12" style={{lineHeight: '14px'}}>Would like to receive periodic notifications only.</div>
                                        <span className="mdl-radio__outer-circle" /><span className="mdl-radio__inner-circle" /></label><label ng-repeat="dt in field.data" className="mdl-radio mdl-js-radio mdl-js-rippleeffect font-14 is-upgraded" style={{display: 'block', margin: '10px 0px'}} htmlFor="acf_1_field_3_i2" id="racf_1_field_3_opt_2" data-upgraded=",MaterialRadio">
                                        <input type="radio" id="acf_1_field_3_i2" name="switch"  className="mdl-radio__button " defaultValue={2} ng-checked="dt.value==respObj[i]" ng-model="respObj[i]" ng-disabled="dt.disabled" />
                                        <span className="mdl-radio__label font-14" >Not interested in job offers</span>
                                        
                                        <span className="mdl-radio__outer-circle" /><span className="mdl-radio__inner-circle" /></label>
                                      
                                      <div ng-show="field.error" className="font-12 mdl-color-text--red-600 ng-binding ng-hide">false</div>
                                    </div>
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                  </div>
                                </customfield>
                              </div>		
                            </div>
                          </div>
                          
                          <div align="right" className="show-search_bar font-14 mdl-color-text--red padding-lr-15 padding-bottom-15 ng-binding ng-hide" ng-show="info.err">false</div>
                          <div align="right" className="show-search_bar font-14 mdl-color-text--green padding-lr-15 padding-bottom-15 ng-binding ng-hide" ng-show="info.successmsg">false</div>
                          <div align="right" className="font-18 padding-tb-0 padding-lr-15 ng-scope" style={{height: '36px'}} ng-if="options.submit_text || options.cancel_action || options.cancel_action2 || options.steps.length>0">
                            	
                            
                            
                            
                            <button className="mdl-button mdl-js-button mdl-butto-ripple-effect mdl-color-text--white mdl-color--primary mdl-typography--font-regular ladda-button ladda-button-secondary ng-scope" ng-click="onFormSubmit()" ladda-button="formSubmitting" ng-if="options.submit_text && !(options.steps.length>1)" data-style="zoom-out" fdprocessedid="iksrj" data-upgraded=",MaterialButton"><span className="ladda-label ng-binding">Save</span><span className="ladda-spinner" /></button>
                          </div>
                        </div>
                      </customform>
                    </div>
                  </div>
                  
                </div></jsonhandler>
            </div> */}

            {/* <div className="maximize-width ng-hide" ng-show="!tag && displayAnalytics && !community_seeker_off">
              <div className="homepage-shadow-6 m-b-20 width-res mar-res-right mdl-color--white inline-block padding-20">
                <span><i className="icon-business_center mdl-color-text--primary font-50" /></span>
                <span className="float-right padding-top-10">
                  <span className="mdl-typography--font-regular mdl-color-text--grey-900 float-right font-24 ng-binding" ng-bind="displayAnalytics.first.number" /><br />
                  <span className="font-14 mdl-typography--font-light mdl-color-text--grey-600 ng-binding" ng-bind="displayAnalytics.first.heading" /></span>
              </div>
              <div className="homepage-shadow-6 m-b-20 width-res inline-block padding-20 mdl-color--white">
                <span><i className="icon-description2 mdl-color-text--primary font-50" /></span>
                <span className="float-right padding-top-10">
                  <span className="mdl-typography--font-regular mdl-color-text--grey-900 float-right font-24 ng-binding" ng-bind="displayAnalytics.second.number" /><br />
                  <span className="font-14 mdl-typography--font-light mdl-color-text--grey-600 ng-binding" ng-bind="displayAnalytics.second.heading" /></span>
              </div>
            </div> */}
            {/* <div className="homepage-shadow-6 m-b-20 maximize-width mdl-card mdl-cell--12-col mdl-grid min-height-card padding-0">
              <div className="flex-grow-3 mdl-grid padding-24 padding-lr-xs-8">
                <div className="align-items-center flexbox justify-content-space-between margin-bottom-12 margin-top-0 mdl-cell mdl-cell--12-col">
                  <div ng-if="current_tab!='e_internships'" className="font-18 font-xs-16 mdl-typography--font-medium ng-binding ng-scope">Search Jobs</div>
                  
                  <div className="align-items-center flexbox">
                    <div><label className="margin-right-20 margin-right-xs-12 mdl-switch mdl-js-switch is-upgraded" htmlFor="openedFilter-switch" ng-class="{'is-checked':openedFilter}" data-upgraded=",MaterialSwitch">
                        <input type="checkbox" ng-click="changeOpenedFilter()" ng-checked="openedFilter" id="openedFilter-switch" className="mdl-switch__input" />
                        <div className="mdl-switch__track" />
                        <div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" />
                        </div>
                        <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div></label>
                    </div>
                    <div ng-if="current_tab!='e_internships'" className="font-xs-12 ng-binding ng-scope">Open Jobs Only</div>
                    
                  </div>
                </div>
                <div className="mdl-cell mdl-cell--4-col-desktop mdl-cell--4-col-phone mdl-cell--4-col-tablet">
                  <div className="border-light-grey" >
                    <input className="mdl-typography--font-light padding-lr-md-6 search-input-box mdl-color--white  ng-pristine ng-untouched ng-valid ng-empty" ng-keypress="inputBoxKeyPressed($event,searchFilter.company,'company')" type="text" placeholder="Name of the Company" ng-model="searchFilter.company" ng-style="{'height':$root.isMobile?'36px':''}" enterkeyhint="send" fdprocessedid="rib0z" />
                    <span className=" category-count mdl-color--amber-600 search-icon center-alignment" ng-style="{'width':'48px','padding':$root.isMobile?'8px 0px':''}" ng-click="inputBoxSelected(searchFilter.company,'company')" style={{width: '48px', display: 'inline-block', float: 'right', boxSizing: 'border-box'}}>
                      <i className="icon-search mdl-color-text--white font-20" style={{verticalAlign: 'middle'}} />
                    </span>
                  </div>
                </div>
                
                <div className="mdl-cell mdl-cell--4-col-desktop mdl-cell--4-col-phone mdl-cell--4-col-tablet">
                  <div className="border-light-grey" >
                    <input className="mdl-typography--font-light padding-lr-md-6 search-input-box mdl-color--white  ng-pristine ng-untouched ng-valid ng-empty" ng-keypress="inputBoxKeyPressed($event,searchFilter.designation,'designation')" type="text" placeholder="Job Title" ng-model="searchFilter.designation" ng-style="{'height':$root.isMobile?'36px':''}" enterkeyhint="send" fdprocessedid="ginby8" />
                    <span className=" category-count mdl-color--amber-600 search-icon center-alignment" ng-style="{'width':'48px','padding':$root.isMobile?'8px 0px':''}" ng-click="inputBoxSelected(searchFilter.designation,'designation')" style={{width: '48px', display: 'inline-block', float: 'right', boxSizing: 'border-box'}}>
                      <i className="icon-search mdl-color-text--white font-20" style={{verticalAlign: 'middle'}} />
                    </span>
                  </div>
                </div>
                <div className="mdl-cell mdl-cell--4-col-desktop mdl-cell--4-col-phone mdl-cell--4-col-tablet">
                  <div className="border-light-grey" >
                    <input className="mdl-typography--font-light padding-lr-md-6 search-input-box mdl-color--white  ng-pristine ng-untouched ng-valid ng-empty" ng-keypress="inputBoxKeyPressed($event,searchFilter.city,'city')" type="text" placeholder="Location" ng-model="searchFilter.city" ng-style="{'height':$root.isMobile?'36px':''}" enterkeyhint="send" fdprocessedid="7d6dbo" />
                    <span className=" category-count mdl-color--amber-600 search-icon center-alignment" ng-style="{'width':'48px','padding':$root.isMobile?'8px 0px':''}" ng-click="inputBoxSelected(searchFilter.city,'city')" style={{width: '48px', display: 'inline-block', float: 'right', boxSizing: 'border-box'}}>
                      <i className="icon-search mdl-color-text--white font-20" style={{verticalAlign: 'middle'}} />
                    </span>
                  </div>
                </div>
                
              </div>
            </div> */}
            <div
              ng-show="filterApplied "
              className="flexbox align-items-center  justify-content-space-between margin-lr-0 maximize-width mdl-cell mdl-cell--12-col  ng-hide"
            >
              <div className="mdl-typography--font-regular font-16 padding-lr-8 padding-tb-10 ng-binding"></div>
            </div>
            <div className="job-cards-start" />
            <div
              className="center-alignment font-16 margin-right-4 mdl-typography--font-medium padding-lr-8 padding-tb-10 mdl-cell--hide-desktop"
              ng-show="jobs[current_tab].length>0"
            >
              <div className="mdl-card__title-text font-18 mdl-typography--font-regular ng-binding">
                Available Opportunities
              </div>
            </div>

            <div
              ng-show="jobs!==[]"
              infinite-scroll="loadMore()"
              infinite-scroll-disabled="lock[current_tab] || no_more_data[current_tab]"
              infinite-scroll-distance={1}
              className="ng-isolate-scope"
            >
              <div ng-repeat="job in jobs[current_tab]" className="ng-scope">
                <div
                  className="mdl-card homepage-shadow-6 m-b-20 mdl-typography--font-light maximize-width padding-24 padding-lr-xs-16"
                  style={{ zIndex: 0 }}
                  ng-hide="$root.as_ed.bu.uids.indexOf(2098623)>-1"
                >
                  <div className="flexbox justify-content-space-between">
                    <div className="flexbox flex-dir-column-xs">
                      <span className="mdl-typography--font-medium font-18 left-alignment m-b-20 padding-left-8 padding-left-xs-10 ng-binding">
                        Marketing Executive
                      </span>{" "}
                      <span
                        className="font-18 padding-lr-4 ng-scope"
                        ng-if="!$root.isMobile"
                      >
                        {" "}
                        |{" "}
                      </span>
                      <span className="mdl-color-text--grey-600 mdl-typography--font-light font-16 margin-bottom-xs-8 padding-left-xs-10 ng-binding">
                        SSCCS
                      </span>
                    </div>
                    <div className="flexbox">
                      <span className>
                        <div className="mdl-menu__container is-upgraded">
                          <div className="mdl-menu__outline mdl-menu--bottom-right" />
                          <ul
                            className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-rippleeffect"
                            htmlFor="job_list-card-setting0"
                            style={{ padding: "0px", minWidth: "60px" }}
                            data-upgraded=",MaterialMenu"
                          >
                            <li
                              className="mdl-menu__item nb-list-setting ng-binding ng-isolate-scope"
                              as-report
                              table={1}
                              post-id
                              owner-uid
                              call-back
                              no-api-call="true"
                              tabIndex={-1}
                            >
                              Report Post
                            </li>
                            <li
                              className="mdl-menu__item nb-list-setting ng-binding ng-isolate-scope"
                              as-report-user
                              reported-uid={2098623}
                              reported-type="block"
                              no-api-call="true"
                              tabIndex={-1}
                            >
                              Block User
                            </li>
                          </ul>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="mdl-grid padding-0 margin-top-0 margin-lr-0 margin-bottom-15">
                    <div
                      className="mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell mdl-color-text--grey-600 font-16 left-alignment"
                      style={{ overflow: "hidden", wordBreak: "break-word" }}
                    >
                      <div className="inline-block-480">
                        <span
                          ng-if="!$root.isMobile"
                          className="mdl-typography--font-medium ng-binding ng-scope"
                        >
                          Location{" "}
                        </span>
                      </div>
                      <span
                        ng-if="job.city!=-2"
                        className="ng-binding ng-scope"
                      >
                        Bhavnagar
                      </span>
                    </div>
                    <div className="mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell mdl-color-text--grey-600 font-16 left-alignment">
                      <div className="inline-block-480">
                        <span
                          ng-if="!$root.isMobile"
                          className="mdl-typography--font-medium ng-binding ng-scope"
                        >
                          Deadline{" "}
                        </span>
                      </div>
                      <span className="ng-binding">Apr 15, 2024</span>
                    </div>
                    <div className="mdl-cell--3-col mdl-cell mdl-cell--4-col-tablet mdl-color-text--grey-600 font-16 left-alignment">
                      <div className="inline-block-480">
                        <span
                          ng-if="job.job_type==0 && !$root.isMobile"
                          className="mdl-typography--font-medium ng-binding ng-scope"
                        >
                          Salary{" "}
                        </span>
                      </div>
                      <span className="ng-binding">
                        As per Candidate's Experience
                      </span>
                    </div>
                    <div className="mdl-cell--3-col mdl-cell mdl-cell--4-col-tablet mdl-color-text--grey-600 font-16 left-alignment">
                      <div className="inline-block-480">
                        <span className="mdl-typography--font-medium">
                          <span
                            ng-if="job.receive_type == '0' && !$root.isMobile"
                            className="ng-binding ng-scope"
                          >
                            Applicants
                          </span>
                        </span>
                      </div>
                      <span
                        ng-if="job.receive_type == '0'"
                        className="ng-binding ng-scope"
                      >
                        1
                      </span>
                    </div>

                    <div className="mdl-cell mdl-color-text--grey-600 font-16 left-alignment">
                      <div
                        className="mdl-color--blue-50 mdl-color-text--black font-14 job-intern-capsule"
                        style={{ margin: "0px" }}
                      >
                        <span
                          ng-if="job.job_type==0"
                          className="ng-binding ng-scope"
                        >
                          Job
                        </span>
                      </div>
                      <div
                        ng-if="job.approved==3 || (info.currentTime-job.Deadline>0)"
                        className="mdl-color--red-100 mdl-color-text--black font-14 job-intern-capsule margin-0 ng-scope"
                      >
                        <span className="ng-binding">Closed</span>
                      </div>
                    </div>
                  </div>
                  <div className="flexbox justify-content-space-between flex-wrap-wrap flex-dir-column-600 padding-lr-8">
                    <div className="flexbox align-items-center">
                      <div className="margin-right-12">
                        <a
                          ui-sref="inapp.profile({uid: '2098623'})"
                          style={{ textDecoration: "none" }}
                          href="/profile/2098623"
                        >
                          <as-profile-pic
                            name="SSCCS"
                            img-config="{'urlType':'s3base','parentDiv':'comment-avatar','parentDivStyle':'float:left;'}"
                            profile-src="assets/images/profiles/50x50/2098623.jpg?v=1667971290"
                            txt-config="{'parentDiv':'font-14'}"
                            className="ng-isolate-scope"
                          >
                            <img
                              ng-class="imgConfig.parentDiv"
                              ng-attr-style="{{imgConfig.parentDivStyle}}"
                              ng-if="profileSrc"
                              alt="GC"
                              err-src="https://alumni.gyanmanjarividyapith.edu.in/api/institutes/profile_pic_default?cid=1080"
                              ng-src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/profiles/50x50/2098623.jpg?v=1667971290"
                              ng-attr-loading="{{loading || undefined}}"
                              className="ng-scope comment-avatar"
                              style={{ float: "left" }}
                              src={gurukullogo}
                            />
                          </as-profile-pic>
                        </a>
                      </div>
                      <div className="inline-block font-14">
                        <a
                          ui-sref="inapp.profile({uid: '2098623'})"
                          className="link-detail mdl-color-text--grey-900"
                          href="/profile/2098623"
                        >
                          <span className="ng-binding">SSCCS</span>
                        </a>
                        <div
                          className="mdl-color-text--grey-600 ng-binding ng-scope"
                          ng-if="job.cas_approved == 1 || job.cas_approved == 2"
                        >
                          Published On Mar 15, 2024
                        </div>
                      </div>
                    </div>
                    <div
                      ng-if="job.cas_approved != null"
                      className="padding-tb-xs-16 ng-scope"
                      style={{ paddingTop: "10px" }}
                    ></div>
                    <div className="padding-res flexbox align-items-center flex-dir-column-xs">
                      {/* <div className="inline-block ng-scope" ng-if="!$root.isMobile" style={{paddingTop: '8px'}}>
                        <i className="icon-visibility" style={{paddingRight: '10px', verticalAlign: 'middle'}} />
                        <span style={{marginRight: '20px'}} className="ng-binding"> 193 </span>
                      </div> */}

                      <a
                        className="mdl-button maximize-width-xs padding-xs-0 mdl-button--colored mdl-js-rippleeffect border-primary mdl-color-text--primary mdl-typography--font-regular job-view-button min-width-button"
                        style={{ textTransform: "capitalize" }}
                        ng-click="redirectToJobSingle(job.id,'job_list')"
                      >
                        <span
                          ng-if="job.job_type==0"
                          className="ng-binding ng-scope"
                        >
                          View Job Post
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div ng-show="lock[current_tab] && !no_more_data[current_tab]" className="ng-hide" >
              <div className="mdl-progress mdl-js-progress mdl-progress__indeterminate maximize-width is-upgraded" data-upgraded=",MaterialProgress"><div className="progressbar bar bar1" style={{width: '0%'}} /><div className="bufferbar bar bar2" style={{width: '100%'}} /><div className="auxbar bar bar3" style={{width: '0%'}} /></div>
            </div>
            <div ng-show="no_more_data[current_tab] && !emptyState" className >
              <div className="mdl-card maximize-width center-alignment padding-16" style={{minHeight: '0px', border: '1px solid'}}>
                <div className="font-19 mdl-typography--font-medium mdl-color-text--primary ng-binding">Got an opportunity to share?
                </div>
                <div className="margin-top-10 ng-binding">
                  Share it here to hire great talent from AAG Alumni Community
                </div>
                <div className="margin-top-10">
                  <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-rippleeffect mdl-typography--font-regular ng-binding" ng-click="showPostJobForm($event); scrollTo('opportunityShareCard',500);" style={{height: '30px', lineHeight: '31px'}} data-upgraded=",MaterialButton">
                    <i className="icon-add new-icon" />
                    Post an Opportunity
                  </button>
                </div>
              </div>
            </div> */}
            {/* <div ng-show="emptyState && no_more_data[current_tab]" className="mdl-color--white flexbox flex-wrap-wrap justify-content-center align-items-center ng-hide" style={{height: '320px'}}>
              <div>
                <div className="mdl-color-text--grey-900 flexbox justify-content-center margin-tb-12 font-16 maximize-width">
                  <img src="https://alumni.gyanmanjarividyapith.edu.in//img/noresults.png" className=" margin-bottom-20 margin-top-30" style={{height: '100px', width: 'auto'}} />
                </div>
                <div className="mdl-color-text--grey-900 flexbox justify-content-center margin-tb-12 font-16 maximize-width ng-binding">
                  No Jobs found!
                </div>
                <div className="mdl-color-text--grey-600 flexbox justify-content-center margin-bottom-16 font-14 maximize-width ng-binding">
                  No Jobs found to match your
                  criteria
                </div>
                <div className=" flexbox justify-content-center maximize-width">
                  <button ng-click="vResetAll()" className="mdl-button mdl-js-button mdl-color-text--white mdl-color--accent font-14 ng-binding" href data-upgraded=",MaterialButton">Clear All</button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
