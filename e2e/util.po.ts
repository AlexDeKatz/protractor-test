import {
    $$,
    browser,
    by,
    element,
    ElementFinder,
    ExpectedConditions,
    WebElement,
  } from "protractor";
  import { CONFIGURATIONS } from "./Constants";
  
  export class CommonUtils {
    generalObj = {
      keycloakNavigation: "ugwu/login",
      ugwpNavigation: "ugwu/system/systemInfo/",
      agencyNavigation: "ugwu/agency/agencyInfo/",
    };
  
    /**
     * @description: List of DOM element based on ID/Class
     */
    elementList = {
      // Headings
      signInKeycloakHeading: element(by.css(".form-heading")),
      generalHeading: element(by.css("heading")),
      systemAdminHeading: element(by.id("systemAdminHeading")),
      agencyAdminHeading: element(by.id("agencyAdminHeading")),
  
      // Buttons
      popupButton: element(by.css("button[title=Close]")),
      logoutButton: element(by.id("logoutButton")),
      matMenuLogoutButton: element(by.id("matMenuLogoutButton")),
      createButton: element(
        by.cssContainingText(".mat-button-wrapper", "CREATE")
      ),
      submitButton: element(
        by.cssContainingText(".mat-button-wrapper", "SUBMIT")
      ),
      infoButton: element(by.cssContainingText(".mat-icon", "info")),
      cancelButton: element(
        by.cssContainingText(".mat-button-wrapper", "CANCEL")
      ),
      groupMapButton: element(
        by.cssContainingText(".mat-button-wrapper", "Group Mapping")
      ),
      mapButton: element(by.cssContainingText(".mat-button-wrapper", "MAP")),
      systemMapButton: element(by.id("mapSystemsButton")),
      editButton: element(by.cssContainingText(".mat-button-wrapper", "EDIT")),
      updateButton: element(
        by.cssContainingText(".mat-button-wrapper", "UPDATE")
      ),
      dialogYesButton: element(by.tagName("mat-dialog-actions")).element(
        by.cssContainingText(".mat-button-wrapper", "Yes")
      ),
      dialogNoButton: element(by.tagName("mat-dialog-actions")).element(
        by.cssContainingText(".mat-button-wrapper", "Cancel")
      ),
      wrgButton: element(by.id("wrg-button")),
      yesButton: element(by.cssContainingText(".mat-button-wrapper", "Yes")),
      addButton: element(by.cssContainingText("mat-icon.mat-icon", "add_circle")),
      createWRGButton: element(
        by.cssContainingText(".mat-button-wrapper", "CREATE WRG")
      ),
      saveButton: element(by.cssContainingText(".mat-button-wrapper", "SAVE")),
      pocButton: element(by.cssContainingText("mat-icon.mat-icon", "layers")),
      associateUserButton: element(
        by.cssContainingText("mat-icon.mat-icon", "group")
      ),
      associateRagButton: element(
        by.cssContainingText("mat-icon.mat-icon", "admin_panel_settings")
      ),
      mapRAGButton: element(
        by.cssContainingText(".mat-button-wrapper", "Map Security Group")
      ),
      mapRangeButton: element(
        by.cssContainingText(".mat-button-wrapper", "Map Range")
      ),
  
      // Icons
      homePageIcon: element(by.id("homePageIcon")),
      userIcon: element(by.id("userIcon")),
      closeIcon: element(by.className("header-section")).element(
        by.cssContainingText("mat-icon", "close")
      ),
      ragMappingIcon: element(by.cssContainingText(".mat-icon", "group")),
      systemMappingIcon: element(by.cssContainingText(".mat-icon", "computer")),
      rangeMappingIcon: element(
        by.cssContainingText(".mat-icon", "signal_cellular_alt")
      ),
      agencyAdmin: element(by.id("agencyAdmin")),
      customerLogin: element(by.css("#systemAdmin + span")),
      deleteIcon: element(by.cssContainingText(".mat-icon", "delete_forever")),
      systemAdminLogin: element(by.id("systemAdmin")),
  
      // Inputs & Misc
      searchField: element(by.css("input.ugw-search-input")),
      table: element(by.css(".gridcontainer-panel table tbody > tr")),
      dialogBox: element(by.tagName("mat-dialog-container")),
      modal: element(
        by.xpath(
          "/html/body/app-root/div/app-layout/div/app-system-layout/div/div[2]/app-system-rags/div[2]/div[2]/div/div/div[1]"
        )
      ),
  
      // Applications Dropdown
      applicationSection: element(
        by.css(
          "[href='/ugwu/system/systemInfo/application'] > .mat-list-item-content"
        )
      ),
      applicationInstanceSection: element(
        by.css("[aria-labelledby='mat-expansion-panel-header-5'] .nav-caption")
      ),
  
      // Profiles Dropdown
      profileSection: element(
        by.xpath('//*[@id="mat-expansion-panel-header-3"]/span[2]')
      ),
      resourceProfileSection: element(
        by.xpath('//*[@id="cdk-accordion-child-3"]/div/mat-panel-title[3]')
      ),
      accessProfile: element(
        by.xpath('//*[@id="cdk-accordion-child-3"]/div/mat-panel-title[2]')
      ),
      featureTagSection: element(
        by.xpath('//*[@id="cdk-accordion-child-3"]/div/mat-panel-title[1]')
      ),
      urapSection: element(
        by.xpath('//*[@id="cdk-accordion-child-3"]/div/mat-panel-title[5]')
      ),
  
      // Resources Dropdown
      resourceSection: element(
        by.xpath('//*[@id="mat-expansion-panel-header-4"]/span[2]')
      ),
      deviceSubsection: element(
        by.xpath('//*[@id="cdk-accordion-child-4"]/div/mat-panel-title[2]')
      ),
      talkgroupSection: element(
        by.xpath('//*[@id="cdk-accordion-child-4"]/div/mat-panel-title[3]')
      ),
      userSection: element(
        by.xpath('//*[@id="cdk-accordion-child-4"]/div/mat-panel-title[1]')
      ),
  
      // System Dropdown
      systemSection: element(
        by.xpath('//*[@id="mat-expansion-panel-header-1"]/span[2]')
      ),
      astroSection: element(
        by.xpath('//*[@id="cdk-accordion-child-1"]/div/mat-panel-title[1]')
      ),
      dimetraSection: element(
        by.xpath('//*[@id="cdk-accordion-child-1"]/div/mat-panel-title[2]')
      ),
      mototurboSection: element(
        by.xpath('//*[@id="cdk-accordion-child-1"]/div/mat-panel-title[3]')
      ),
      broadbandSection: element(
        by.xpath('//*[@id="cdk-accordion-child-1"]/div/mat-panel-title[4]')
      ),
      roipSection: element(
        by.xpath('//*[@id="cdk-accordion-child-1"]/div/mat-panel-title[5]')
      ),
      msiCIESection: element(
        by.xpath('//*[@id="cdk-accordion-child-1"]/div/mat-panel-title[6]')
      ),
  
      agencyResourceSection: element(
        by.xpath('//*[@id="mat-expansion-panel-header-16"]')
      ),
      resourceListSection: element(
        by.xpath('//*[@id="cdk-accordion-child-16"]/div/mat-panel-title[4]')
      ),
    };
  
    /**
     * @description: Getting element from the elementList.
     * @param type {string} The key value which has to be returned from elementList
     */
    getElement(type: string) {
      return this.elementList[type] as ElementFinder;
    }
  
    /**
     * @description: Getting element by ID.
     * @param ID {string} ID of the DOM element
     * @returns {string} Returns the DOM element based on ID.
     */
    getElementByID(ID: string) {
      return element(by.id(ID));
    }
  
    /**
     * @description: Navigation to any particular section. If required navigation to Keycloak, send an additional parameter to 'true'.
     * @param section {string} It is the navigation section to which navigation has to be done.
     * @param navigateToKeycloak {boolean} If true, navigation will take place to Keycloak
     * @returns {string} The navigation URL.
     */
    navigateTo(section, user: number = 0, navigateToKeycloak?: boolean) {
      let navigation = user
        ? this.generalObj.agencyNavigation
        : this.generalObj.ugwpNavigation;
      const navigationURL =
        browser.baseUrl +
        (navigateToKeycloak
          ? this.generalObj.keycloakNavigation
          : navigation + section);
      return browser.get(navigationURL) as Promise<any>;
    }
  
    /**
     * @description: Navigation to Home-page.
     */
    navigateToHomeScreen() {
      this.getElement("homePageIcon")
        .isPresent()
        .then(function () {
          this.getElement("homePageIcon").click();
        });
    }
  
    /**
     * @description: Getting Snack-bar element
     */
    getSnackBarElement() {
      return element(
        by.css("snack-bar-container > div > div > simple-snack-bar > span")
      );
    }
  
    /**
     * @description: Checking if popup occurs in Keycloak page.
     */
    checkKeycloakPopup() {
      this.elementList["popupButton"].isPresent().then(async (pres) => {
        if (pres) {
          const okButton = this.elementList["popupButton"];
          browser.sleep(100);
          okButton.click();
          browser.sleep(1000);
        }
      });
    }
  
    /**
     * @description: Filling in Sign-in form.
     */
    async fillInSignInForm(id, value) {
      // await element(by.css(id)).clear();
      browser.sleep(100);
      await element(by.css(id)).sendKeys(value);
    }
  
    /**
     * @description: Selecting unclustered options in left expansion panels
     */
    async openExpansionPanel(position: number) {
      await element.all(by.css("mat-expansion-panel")).get(position).click();
    }
  
    patchFormData(formControls: Array<string>, formValues: Array<any>) {
      formControls.forEach((control, index) => {
        browser.sleep(100);
        element(by.css(control)).sendKeys(formValues[index]);
        browser.sleep(100);
      });
    }
  
    async openSidePanelandNavigate(
      section: ElementFinder,
      subSection: ElementFinder
    ) {
      subSection
        .isDisplayed()
        .then(async (isVisible) => {
          if (isVisible) {
            subSection.click();
          } else {
            await section.click();
            subSection.click();
          }
        })
        .catch(function (err) {
          console.error("Panel Element not found! ", err);
        });
      await browser.waitForAngular();
    }
  
    async clickDropdownSelectOption(inputField: any, optionSelected: any) {
      await element(by.css(inputField)).sendKeys(optionSelected);
      browser.sleep(500);
      await element(
        by.cssContainingText("mat-option .mat-option-text", optionSelected)
      ).click();
      await browser.waitForAngular();
      browser.sleep(500);
    }
  
    /**
     * @description: Drag and Drop operation
     * @param sourceTG {webElement} Element which has to be dragged.
     * @param targetPatch {webElement} Element to which dragged has to be dropped upon.
     */
    async dragAndDrop(sourceTG: WebElement, targetPatch: WebElement) {
      // Script for Drag-n-Drop
      const JS_HTML5_DND =
        'function e(e,t,n,i){var r=a.createEvent("DragEvent");r.initMouseEvent(t,!0,!0,o,0,0,0,c,g,!1,!1,!1,!1,0,null),Object.defineProperty(r,"dataTransfer",{get:function(){return d}}),e.dispatchEvent(r),o.setTimeout(i,n)}var t=arguments[0],n=arguments[1],i=arguments[2]||0,r=arguments[3]||0;if(!t.draggable)throw new Error("Source element is not draggable.");var a=t.ownerDocument,o=a.defaultView,l=t.getBoundingClientRect(),u=n?n.getBoundingClientRect():l,c=l.left+(l.width>>1),g=l.top+(l.height>>1),s=u.left+(u.width>>1)+i,f=u.top+(u.height>>1)+r,d=Object.create(Object.prototype,{_items:{value:{}},effectAllowed:{value:"all",writable:!0},dropEffect:{value:"move",writable:!0},files:{get:function(){return this._items.Files}},types:{get:function(){return Object.keys(this._items)}},setData:{value:function(e,t){this._items[e]=t}},getData:{value:function(e){return this._items[e]}},clearData:{value:function(e){delete this._items[e]}},setDragImage:{value:function(e){}}});if(n=a.elementFromPoint(s,f),!n)throw new Error("The target element is not interactable and need to be scrolled into the view.");u=n.getBoundingClientRect(),e(t,"dragstart",101,function(){var i=n.getBoundingClientRect();c=i.left+s-u.left,g=i.top+f-u.top,e(n,"dragenter",1,function(){e(n,"dragover",101,function(){n=a.elementFromPoint(c,g),e(n,"drop",1,function(){e(t,"dragend",1,callback)})})})})';
  
      await browser.executeScript(JS_HTML5_DND, sourceTG, targetPatch);
    }
  
    async getCustomerLoginName(): Promise<string> {
      await this.getElement("userIcon").click();
      browser.sleep(2000);
      const agencyElement = await this.getElement("customerLogin").getText();
      return agencyElement.split(":")[1].trim();
    }
  
    async navigateToCustomer() {
      await this.getElement("userIcon").click();
      browser.sleep(2000);
      await this.getElement("customerLogin").click();
      browser.waitForAngular();
      const agencyAdminHeading = await this.getElement(
        "agencyAdminHeading"
      ).getText();
      expect(agencyAdminHeading.includes("Customer Admin")).toBeTrue;
    }
  
    async navigateToSystemAdmin() {
      await this.getElement("userIcon").click();
      browser.sleep(2000);
      await this.getElement("systemAdminLogin").click();
      browser.waitForAngular();
      const agencyAdminHeading = await this.getElement(
        "systemAdminHeading"
      ).getText();
      expect(agencyAdminHeading.includes("System Admin")).toBeTrue;
    }
  
    async deleteRecord(searchInput: string) {
      await this.getElement("searchField").sendKeys(searchInput);
      browser.waitForAngular();
      await browser.wait(
        ExpectedConditions.visibilityOf(this.getElement("deleteIcon")),
        7000,
        "record not found"
      );
      await this.getElement("deleteIcon").click();
      const dialogBox = this.getElement("dialogBox");
      await browser.wait(
        ExpectedConditions.visibilityOf(dialogBox),
        7000,
        "Delete confirm box not found"
      );
      browser.sleep(1000);
      await this.getElement("dialogYesButton").click();
      browser.waitForAngular();
      await this.getElement("searchField").clear();
      await this.getElement("searchField").sendKeys(searchInput);
      browser.waitForAngular();
      browser.sleep(1000);
      // await browser.wait(ExpectedConditions.visibilityOf(this.getElement('table')), 7000, 'Data not found');
      expect(await this.getElement("table").isPresent()).toBe(false);
    }
  
    /**
     * @description: Moving the mouse to new location.
     * This is done to imitate selection of option and clicking outside dropdown to close it.
     */
    moveMouseAndClick() {
      browser.actions().mouseMove({ x: 500, y: 0 }).perform();
      browser.actions().click().perform();
      browser.sleep(500);
    }
  
    /**
     * @description: Is used to fill in System-Dimetra Customer creation form.
     */
    fillInCustomerCreationForm(
      securityGroupName: string,
      customerName: string,
      e2eType: string
    ) {
      const formControl = [
        element(by.css("input[formControlName=account_name]")),
        element(by.css("input[formControlName=account_domain_name]")),
        // element(by.css("mat-select[formControlName=resrcaccessgroupid]")),
      ];
      const formValues = [customerName, "www.testCustomer." + e2eType];
      formControl.forEach((control, index) => {
        browser.sleep(500);
        control.sendKeys(formValues[index]);
        browser.sleep(500);
      });
      element(by.css("mat-select[formControlName=resrcaccessgroupid]")).click();
      browser.sleep(200);
      element(by.css("input[placeholder='Search...']")).sendKeys(
        securityGroupName
      );
      element(
        by.cssContainingText("mat-option .mat-option-text", securityGroupName)
      ).click();
      browser.waitForAngular();
      browser.sleep(500);
    }
  
    /**
     * @description: Is used to fill in Resource-Profile for System-dimetra.
     * @param resourceProfileName {string} Name of the resource-profile.
     * @param radioType {string} Radio-type.
     * @param resourceProfileIdType {string} The type of Resource-ID.
     * @returns {string} Return the Broadband Resource-Profile name
     */
    fillInResourceProfileForm(
      resourceProfileName: string,
      radioType: string,
      resourceProfileIdType: string
    ) {
      const formControl: Array<any> = CONFIGURATIONS.resourceProfileFormControl;
      const formValues: Array<any> = [
        resourceProfileName,
        radioType,
        resourceProfileIdType,
      ];
      formControl.forEach((control, index) => {
        browser.sleep(100);
        control.sendKeys(formValues[index]);
        browser.sleep(100);
      });
      return formValues[0];
    }
  
    async fillInMatAutocompleteField(inputField: string, optionSelected: string) {
      this.clickDropdownSelectOption(inputField, optionSelected);
      await browser.sleep(1000);
    }
  
    /**
     * @description: Is used to fill in System-Dimetra Range creation form.
     * @param rangeType {boolean} Type of Range: Native-Range or Pseudo-Range.
     * @param isDeviceType {boolean} If passed as true, Device ranges are mapped. Else Talk-group is mapped.
     * @param rangeStart {number} Start of range.
     * @param range {number} Range of Resource.
     * @returns {string} Return the name of Resource range.
     */
    fillInRangeForm(
      rangeType: string,
      isDeviceType: boolean,
      rangeStart: number,
      range: number
    ) {
      const formControl: Array<any> = CONFIGURATIONS.rangeFormControl;
      const formValues: Array<any> = [
        rangeType,
        `e2eRange_${isDeviceType ? "Device" : "TG"}`,
        isDeviceType
          ? CONFIGURATIONS.RANGE_DEVICE_TYPE[0]
          : CONFIGURATIONS.RANGE_DEVICE_TYPE[1],
        rangeStart,
        range,
      ];
      formControl.forEach((control, index) => {
        browser.sleep(100);
        control.sendKeys(formValues[index]);
        browser.sleep(100);
      });
      return formValues[1];
    }
  
    /**
     * @description: Is used to fill in System WRG creation form.
     * @param wrgType {string} Type of WRG: Voice, Data or Voice+Messaging.
     * @param isStandBy {string} To enable/disable Standby: False or True.
     * @param fallOverActive [Optional] {string} If StandBy is true, to enable/disable FailOver Active field.
     * @param subscriberPrivacyType [Optional] {string} Privacy type of subscriber.
     * @returns {string} Return the system WRG name.
     */
    fillInMotoWRGForm(
      wrgType: string,
      isStandBy: string,
      fallOverActive: string = CONFIGURATIONS.BOOLEAN_VALUE[0],
      subscriberPrivacyType: string = CONFIGURATIONS.MOTO_LCP_PRIVACY_TYPE[0]
    ) {
      let formControl: Array<any> = [];
      let formValues: Array<any> = [];
      let kodaikConfig: Array<any> = [];
      let standByFormvalues: Array<any> = [
        fallOverActive,
        "123.1.1.1",
        "geoWRGName",
        "123.1.1.1",
      ];
      const commonConfig: Array<any> = [
        CONFIGURATIONS.BOOLEAN_VALUE[1],
        "http://www.test.org",
        123,
      ];
      let selectFirstOptionList: Array<any> = [];
  
      formControl = CONFIGURATIONS.wrgMototrboFormControl;
      formValues = [
        `e2e${wrgType.replace(/[^a-zA-Z ]/g, "")}_WRG`,
        wrgType,
        "123.1.1.1",
  
        // Primary Details
        "test WRG Description",
        "e2eTestWRG",
        "45.5.5.6",
        "45.5.5.6",
        isStandBy,
  
        /* Kodiak Configuration: To be added (Index = 7)
          Common Configuration: To be added */
      ];
      if (wrgType == CONFIGURATIONS.MOTO_WRG_TYPE[0]) {
        // For Voice WRG type, 'GW Auth Server FQDN' is not required. Therefore, both formcontrol and value is removed.
        formControl.splice(2, 1);
        formValues.splice(2, 1);
  
        kodaikConfig = [
          123,
          123,
          "testAlias",
          123,
          123,
          123,
          CONFIGURATIONS.BOOLEAN_VALUE[1],
          CONFIGURATIONS.BOOLEAN_VALUE[0],
          "testName",
          123,
          123,
          123,
          subscriberPrivacyType,
        ];
        formControl = [
          ...CONFIGURATIONS.wrgMototrboFormControl,
          ...(isStandBy === CONFIGURATIONS.BOOLEAN_VALUE[1]
            ? CONFIGURATIONS.wrgStandByFormControl
            : []),
          ...CONFIGURATIONS.kodiakConfigVoiceWrgFormControl,
          ...CONFIGURATIONS.wrgCommonConfigFormControl,
        ];
        selectFirstOptionList.push(
          "mat-select[formControlName=voice_mnis_server_id]"
        );
        // this.selectFirstOptionFromMatSelect("mat-select[formControlName=voice_mnis_server_id]");
        if (isStandBy == CONFIGURATIONS.BOOLEAN_VALUE[1]) {
          selectFirstOptionList.push(
            "mat-select[formControlName=voice_geo_mnis_server_id]"
          );
          // this.selectFirstOptionFromMatSelect("mat-select[formControlName=voice_geo_mnis_server_id]");
        }
      } else if (wrgType == CONFIGURATIONS.MOTO_WRG_TYPE[1]) {
        kodaikConfig = [
          123,
          123,
          "testAlias",
          "C:\traditionalpath\file.xml",
          "http://www.kodiaksag.com",
          "http://www.kodiaksag.cof",
          123,
        ];
        formControl = [
          ...CONFIGURATIONS.wrgMototrboFormControl,
          ...(isStandBy === CONFIGURATIONS.BOOLEAN_VALUE[1]
            ? CONFIGURATIONS.wrgStandByFormControl
            : []),
          ...CONFIGURATIONS.kodiakConfigDataWrgFormControl,
          ...CONFIGURATIONS.wrgCommonConfigFormControl,
        ];
        selectFirstOptionList.push(
          "mat-select[formControlName=data_mnis_server_id]"
        );
        // this.selectFirstOptionFromMatSelect("mat-select[formControlName=data_mnis_server_id]");
        if (isStandBy) {
          selectFirstOptionList.push(
            "mat-select[formControlName=data_geo_mnis_server_id]"
          );
          // this.selectFirstOptionFromMatSelect("mat-select[formControlName=data_geo_mnis_server_id]");
        }
      } else if (wrgType == CONFIGURATIONS.MOTO_WRG_TYPE[2]) {
        kodaikConfig = [
          123,
          123,
          "testAlias",
          "subscriberName",
          123,
          123,
          123,
          subscriberPrivacyType,
          "C:\traditionalpath\file.xml",
          "http://www.kodiaksag.com",
          "http://www.kodiaksag.com",
          123,
        ];
        formControl = [
          ...CONFIGURATIONS.wrgMototrboFormControl,
          ...(isStandBy === CONFIGURATIONS.BOOLEAN_VALUE[1]
            ? CONFIGURATIONS.wrgStandByFormControl
            : []),
          ...CONFIGURATIONS.kodiakConfigVoiceMsgWrgFormControl,
          ...CONFIGURATIONS.wrgCommonConfigFormControl,
        ];
        selectFirstOptionList.push(
          "mat-select[formControlName=voice_mnis_server_id]",
          "mat-select[formControlName=data_mnis_server_id]"
        );
        if (isStandBy) {
          selectFirstOptionList.push(
            "mat-select[formControlName=voice_geo_mnis_server_id]",
            "mat-select[formControlName=data_geo_mnis_server_id]"
          );
        }
      }
      // Adding Kodiak and Common Configuration
      formValues.splice(
        formValues.length,
        0,
        ...standByFormvalues,
        ...kodaikConfig,
        ...commonConfig
      );
  
      formControl.forEach((control, index) => {
        browser.sleep(100);
        control.sendKeys(formValues[index]);
        browser.sleep(100);
      });
  
      selectFirstOptionList.forEach((element) => {
        this.selectFirstOptionFromMatSelect(element);
      });
  
      return formValues[0];
    }
  
    /**
     * @description: Is used to select the `first` option from the dropdown.
     * @param formcontrol {string} Formcontrol of the field.
     */
    selectFirstOptionFromMatSelect(formcontrol) {
      $$(formcontrol).click();
      browser.sleep(1000);
      $$("mat-option").get(0).click();
    }
  }
  