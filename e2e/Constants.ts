import { by, element,browser } from "protractor";

export const CONFIGURATIONS = {
  sidepanel: [
    "System",
    "Security Group",
    "Profiles",
    "Resources",
    "Applications",
    "Customers",
    "WRG Status",
  ],
  systemAstro: {
    astroConfiguration: {
      systemName: "e2eTestSystemAstro",
      systemDescription: "test description",
      systemType: ["ISSI", "SITE LINK", "ISSI/SITE LINK", "Unified Recorder"],
      systemInfoDetails: {
        issiGatewayName: "testIsisGateway",
        issiGatewayDescription: "test ISSI gatewawy description",
        issiGatewayIpAddress: "10.11.12.13",
        issiGatewayPort: 5060,
        issiSecondaryisenabled: {
          issiGatewayNameSecondary: "testIssiGatewaySecondary",
          issiGatewayDescriptionSecondary:
            "test ISSI gateway description secondary",
          issiGatewayIpAddressSecondary: "10.9.8.7",
          issiGatewayPortSecondary: 5060,
        },
      },
      radioSystemConfiguration: {
        radioSystemName: "testRadioSystem",
        radioSystemDescription: "test Radio description",
        remoteRFSSID: `a${browser.params.index}`,
        remoteRfssSystemID: `b${browser.params.index}`,
        remoteRfssWACN: `c${browser.params.index}`,
        systemID: `ac${browser.params.index}`,
        wacnID: `a${browser.params.index}d`,
      },
    },
  },
  keyCloak: {
    // "username": "cobcustomer@msi.com",
    // "password": "Kodiak@1234567890",
    // "username": "nanduuser2605@msi.com",
    // "password": "Motorola@1234567890",
    // "username": "customer1805@msi.com",
    // "password": "Motorolamsi@3443",
    type: "System Admin",
  },
  generalConstants: {
    signIn: "sign in",
    astroHeading: "astro",
    astroConfiguration: "astro configuration",
    dtSetupLogin: "https://wms-dev-ugwpui.msiidcugwpdevgateway.com/ugwu/login",
    dtSetupBaseUrl:
      "https://wms-dev-ugwpui.msiidcugwpdevgateway.com/ugwu/system/systemInfo/systemHome",
    systemCreatedSuccessMessage: "System Created Successfully",
    systemUpdatedSuccessMessage: "System Updated Successfully",
    astroRangeHeading: "mapped ranges",
  },
  resourceProfile: {
    formcontrol: ["profileName", "radioType", "resourceIdType"],
    featSet: [
      {
        id: "location",
        displayName: "Location",
        selected: false,
        metaData: {
          metaDataList: [
            {
              id: "accuracy",
              selected: false,
              disabled: false,
              displayName: "Accuracy",
            },
            {
              id: "altitude",
              selected: false,
              disabled: false,
              displayName: "Altitude",
            },
            {
              id: "avgVelocity",
              selected: false,
              disabled: false,
              displayName: "Avg Velocity",
            },
            {
              id: "C/N0",
              selected: false,
              disabled: false,
              displayName: "C/N0",
            },
            {
              id: "DOP",
              selected: false,
              disabled: false,
              displayName: "DOP",
            },
            {
              id: "directionHor",
              selected: false,
              disabled: false,
              displayName: "Direction Hor",
            },
            {
              id: "distanceTravelledFromLastFix",
              selected: false,
              disabled: false,
              displayName: "Distance Travelled From Last Fix",
            },
            {
              id: "gpsStatus",
              selected: false,
              disabled: false,
              displayName: "GPS Status",
            },
            {
              id: "gpsTimestamp",
              selected: false,
              disabled: false,
              displayName: "GPS Timestamp",
            },
            {
              id: "lastFixGpsTimeStamp",
              selected: false,
              disabled: false,
              displayName: "Last Fix Gps TimeStamp",
            },
            {
              id: "lastModifiedTime",
              selected: false,
              disabled: false,
              displayName: "Last Modified Time",
            },
            {
              id: "latitude",
              selected: true,
              disabled: true,
              displayName: "Latitude",
            },
            {
              id: "lev-conf",
              selected: false,
              disabled: false,
              displayName: "Lev-conf",
            },
            {
              id: "locationType",
              selected: false,
              disabled: false,
              displayName: "Location Type",
            },
            {
              id: "longitude",
              selected: true,
              disabled: true,
              displayName: "Longitude",
            },
            {
              id: "satellitesNumber",
              selected: false,
              disabled: false,
              displayName: "Satellites Number",
            },
            {
              id: "speedHor",
              selected: false,
              disabled: false,
              displayName: "SpeedHor",
            },
            {
              id: "speedVer",
              selected: false,
              disabled: false,
              displayName: "SpeedVer",
            },
            {
              id: "verticalAccuracy",
              selected: false,
              disabled: false,
              displayName: "Vertical Accuracy",
            },
          ],
          selected: false,
          displayName: "RESOURCE.LABEL.META_DATA",
        },
        triggerCaps: {
          triggerCapsList: [
            {
              id: "bufferDuration",
              selected: false,
              disabled: false,
              displayName: "Buffer Duration",
            },
            {
              id: "emergencyActivated",
              selected: false,
              disabled: false,
              displayName: "Emergency Activated",
            },
            {
              id: "emergencyCadence",
              selected: false,
              disabled: false,
              displayName: "Emergency Cadence",
            },
            {
              id: "emergencyCleared",
              selected: false,
              disabled: false,
              displayName: "Emergency Cleared",
            },
            {
              id: "groupCallEmergency",
              selected: false,
              disabled: false,
              displayName: "GroupCall Emergency",
            },
            {
              id: "groupCallNonEmergency",
              selected: false,
              disabled: false,
              displayName: "GroupCall Non Emergency",
            },
            {
              id: "lossOfGps",
              selected: false,
              disabled: false,
              displayName: "Loss Of GPS",
            },
            {
              id: "lowBattery",
              selected: false,
              disabled: false,
              displayName: "Low Battery",
            },
            {
              id: "maxInfoAge",
              selected: false,
              disabled: false,
              displayName: "Max Info Age",
            },
            {
              id: "operationalStatusChanged",
              selected: false,
              disabled: false,
              displayName: "Operational Status Changed",
            },
            {
              id: "periodicReport",
              selected: true,
              disabled: true,
              displayName: "Periodic Report",
            },
            {
              id: "privateCallEmergency",
              selected: false,
              disabled: false,
              displayName: "PrivateCall Emergency",
            },
            {
              id: "privateCallNonEmergency",
              selected: false,
              disabled: false,
              displayName: "PrivateCall Non Emergency",
            },
            {
              id: "recoverOfGps",
              selected: false,
              disabled: false,
              displayName: "Recover Of GPS",
            },
            {
              id: "throttlingInterval",
              selected: false,
              disabled: false,
              displayName: "Throttling Interval",
            },
            {
              id: "travelledDistance",
              selected: false,
              disabled: false,
              displayName: "Travelled Distance",
            },
          ],
          selected: false,
          displayName: "RESOURCE.LABEL.TRIGGER_CAPS",
        },
      },
      {
        id: "operationalStatusMessage",
        selected: false,
        disabled: false,
        displayName: "Operational Status Message",
      },
      {
        id: "messaging",
        displayName: "RESOURCE.LABEL.MESSAGING",
        selected: false,
        TextMessaging: {
          disabled: false,
          TextMessageSizeSupported: 2000,
          selected: false,
          displayName: "Text Messaging",
          TTLForTextMessage: 10800,
        },
        FileMessaging: {
          disabled: false,
          TTLForMultiMediaFileMessage: 65535,
          selected: false,
          displayName: "File Messaging",
          MultiMediaFileSizeSupported: 20480,
        },
      },
      {
        id: "telemetry",
        selected: false,
        disabled: false,
        displayName: "Telemetry",
      },
      {
        id: "ugw_tms_service",
        selected: false,
        disabled: false,
        displayName: "Ugw Tms Service",
      },
    ],
  },
  multifactorAuth: {
    successMessageForResetMFA: "MFA Reset was successful",
    failMessageForInvalidUserResetMFA: "Invalid User ID",
  },
  systemAstroFormControl: [
    element(by.css("input[formControlName=system_name]")),
    element(by.css("input[formControlName=system_desc]")),
    element(by.css("mat-select[formControlName=mototrbo_type]")),
    element(by.css("input[formControlName=issiname]")),
    element(by.css("input[formControlName=issidesc]")),
    element(by.css("input[formControlName=issigwip]")),
    element(by.css("input[formControlName=issigwport]")),
    element(by.css("mat-select[formControlName=issisecondaryisenabled]")),
    element(by.css("input[formControlName=issinamesecondary]")),
    element(by.css("input[formControlName=issidescsecondary]")),
    element(by.css("input[formControlName=issigwipsecondary]")),
    element(by.css("input[formControlName=issigwportsecondary]")),
    element(by.css("input[formControlName=radiosystemname]")),
    element(by.css("input[formControlName=radiosystemdesc]")),
    element(by.css("input[formControlName=remoterfsid]")),
    element(by.css("input[formControlName=remoterfssysid]")),
    element(by.css("input[formControlName=remoterfswacn]")),
  ],
  wrgFormControlAstro: [
    element(by.css("input[formControlName=wrg_name]")),
    element(by.css("mat-select[formControlName=wrg_type]")),
    element(by.css("mat-select[formControlName=mototrbo_type]")), 
    // Primary Details
    element(by.css("input[formControlName=wrgdesc]")),
    element(by.css("input[formControlName=wrghost]")),
    element(by.css("input[formControlName=wrghostip]")),
    element(by.css("input[formControlName=wrgport]")),
    element(by.css("input[formControlName=issinetbindingip]")),
    element(by.css("input[formControlName=issinetbindinglistenport]")),
    element(by.css("mat-select[formControlName=isprimaryencryptionenabled]")),

    //Radio system configuration
    element(by.css("input[formControlName=localrfsid]")),
    element(by.css("input[formControlName=localrfssysid]")),
    element(by.css("input[formControlName=localrfswacn]")),
    element(by.css("mat-select[formControlName=isastroroamingenabled]")),
    
    // Other radio configuration
    element(by.css("input[formControlName=tglifetime]")),
    element(by.css("input[formControlName=useralias]")),
    element(by.css("input[formControlName=rtpendlosstimer]")),
    element(by.css("input[formControlName=rtpfirstpacketlosstimer]")),
    element(by.css("input[formControlName=avmpolinterval]")),
    element(by.css("mat-select[formControlName=isavm]")),

    // Kodiak Configuration
    element(by.css("input[formControlName=anonymouscid]")),
    element(by.css("input[formControlName=anonymousmdn]")),
    element(by.css("input[formControlName=anonymousunitid]")),
    element(by.css("input[formControlName=anonymoususeralias]")),
    element(by.css("input[formControlName=maxpttduration]")),
    element(by.css("input[formControlName=pvtcalltimeout]")),
    element(by.css("input[formControlName=groupcalltimeout]")),
    
    // Common Configuration
    element(by.css("mat-select[formControlName=isfullstatus]")),
    element(by.css("input[formControlName=statusurl]")),
    element(by.css("input[formControlName=stausrefreshsec]")),
    element(by.css("mat-select[formControlName=operator]")),
  ],
  systemDimetraFormControl: [
    element(by.css("input[formControlName=system_name]")),
    element(by.css("input[formControlName=system_desc]")),
    element(by.css("input[formControlName=lmpmcc]")),
    element(by.css("input[formControlName=lmpmnc]")),
    element(by.css("input[formControlName=sysalias]")),
    element(by.css("mat-select[formControlName=isstandby]")),
    element(by.css("input[formControlName=geolmpmcc]")),
    element(by.css("input[formControlName=geolmpmnc]")),
    element(by.css("input[formControlName=geosysalias]")),
  ],
  imwFormControl: [
    element(by.css("input[formControlName=imw_sys_group]")),
    element(by.css("input[formControlName=auth_server_fqdn]")),
    element(by.css("input[formControlName=auth_server_port]")),
    element(by.css("input[formControlName=presence_server_fqdn]")),
    element(by.css("input[formControlName=presence_server_port]")),
    element(by.css("input[formControlName=location_server_fqdn]")),
    element(by.css("input[formControlName=location_server_port]")),
    element(by.css("input[formControlName=locationserverrestport]")),
    element(by.css("input[formControlName=apikey]")),
    element(by.css("input[formControlName=clientid]")),
    element(by.css("input[formControlName=clientsecret]")),
  ],
  rangeFormControl: [
    element(by.css("mat-select[formControlName=rangeTypeId]")),
    element(by.css("input[formControlName=rangeName]")),
    element(by.css("mat-select[formControlName=deviceTypeId]")),
    element(by.css("input[formControlName=rangeStart]")),
    element(by.css("input[formControlName=range]")),
  ],
  wrgDimetraFormControl: [
    element(by.css("input[formControlName=wrg_name]")),
    element(by.css("mat-select[formControlName=wrg_type]")),

    // Primary Details
    element(by.css("input[formControlName=wrgdesc]")),
    element(by.css("input[formControlName=wrghost]")),
    element(by.css("input[formControlName=wrghostip]")),
    element(by.css("input[formControlName=dummyssimin]")),
    element(by.css("input[formControlName=dummyssimax]")),
    element(by.css("input[formControlName=radiosystemname]")),
    element(by.css("input[formControlName=radiosystemdesc]")),
    element(by.css("input[formControlName=radiosystemtgstart]")),
    element(by.css("input[formControlName=radiosystemtgend]")),

    // LMP Settings
    element(by.css("input[formControlName=lmpsiteno]")),
    element(by.css("input[formControlName=zoneid]")),
    element(by.css("input[formControlName=lmpgwname]")),
    element(by.css("input[formControlName=lmpgwdesc]")),
    element(by.css("input[formControlName=lmpip]")),
    element(by.css("input[formControlName=ipalslipmh]")),
    element(by.css("mat-select[formControlName=isprimaryencryptionenabled]")),
    element(by.css("mat-select[formControlName=isstandby]")),

    // Kodiak Configuration
    element(by.css("input[formControlName=anonymouscid]")),
    element(by.css("input[formControlName=anonymousmdn]")),
    element(by.css("input[formControlName=anonymoususralias]")),
    element(by.css("mat-select[formControlName=ispvtcallmode]")),

    // Common Configuration
    element(by.css("mat-select[formControlName=isfullstatus]")),
    element(by.css("input[formControlName=statusurl]")),
    element(by.css("input[formControlName=stausrefreshsec]")),
  ],
  ragFormControl: [
    element(by.css("input[id=name]")),
    element(by.css("input[id=details]")),
  ],
  applicationInstanceFormControl: [
    element(by.css("input[formControlName=instanceName]")),
    element(by.css("mat-select[formControlName=instanceType]")),
    element(by.css("mat-select[formControlName=preferredType]")),
  ],
  radioTypes: [
    "ASTRO",
    "DIMETRA",
    "MOTOTRBO",
    "BROADBAND",
    "ROIP",
    "CAD",
    "MSI CIE",
  ],
  instanceTypes: [
    "Application instance",
    "CAD instance",
    "Web-dispatcher instance",
    "CIE App provisioining instance",
    "Unified Recorder Application",
  ],
  customerFormControl: [
    element(by.css("input[formControlName=account_name]")),
    element(by.css("input[formControlName=account_domain_name]")),
    element(by.css("mat-select[formControlName=resrcaccessgroupid]")),
  ],
  resourceProfileFormControl: [
    element(by.css("input[id=resourceProfileName]")),
    element(by.css("mat-select[id=resourceRadioType]")),
    element(by.css("mat-select[id=resourceResrcIdType]")),
  ],
  resourceIdType: [
    "BROADBANDDEVICE", // 0
    "BROADBANDUSER", // 1
    "BROADBANDGROUP", // 2
    "ASTRODEVICE", // 3
    "ASTROGROUP", // 4
    "DIMETRADEVICE", // 5
    "DIMETRAGROUP", // 6
    "MOTOTRBODEVICE", // 7
    "MOTOTRBOGROUP", // 8
    "UGWUSER", // 9
    "UGWAGENCYID", // 10
    "UGWSYSGROUP", // 11
    "UGWDATAGROUP", // 12
    "UGWRAGGROUP", // 13
    "CADUSER", // 14
    "ROIPGROUP", // 15
    "MSI CIE DEVICE", // 16
    "MSI CIE USER", // 17
    "WEBDISPATCHER", // 18
    "4RE DEVICE", // 19
    "ASTRO CONVENTIONAL DEVICE", // 20
    "ASTRO CONVENTIONAL GROUP", // 21
  ],
  systemBBFormControl: [
    element(by.css("input[formcontrolname=system_name]")),
    element(by.css("input[formcontrolname=system_desc]")),
    element(by.css("input[formcontrolname=broadband_sys_id]")),
    element(by.css("input[formcontrolname=fqdn]")),
    element(by.css("input[formcontrolname=countrycode]")),
    element(by.css("mat-checkbox[formcontrolname=location_to_poc]")),
    element(by.css("mat-checkbox[formcontrolname=presence_to_poc]")),
    element(by.css("mat-checkbox[formcontrolname=affiliation_to_poc]")),
  ],
  systemRoipFormControl: [
    element(by.css("input[formcontrolname=system_name]")),
    element(by.css("input[formcontrolname=system_desc]")),
    element(by.css("input[formcontrolname=poccorp_refid]")),
    element(by.css("input[formcontrolname=roipdesc]")),
    element(by.css("input[formcontrolname=local_ip]")),
    element(by.css("input[formcontrolname=local_mate_ip]")),
    element(by.css("input[formcontrolname=local_ext_ip]")),
    element(by.css("input[formcontrolname=local_rtp_port]")),
    element(by.css("input[formcontrolname=local_rtcp_port]")),
    element(by.css("input[formcontrolname=remote_ip]")),
    element(by.css("input[formcontrolname=remote_rtp_port]")),
    element(by.css("input[formcontrolname=remote_rtcp_port]")),
    element(by.css("input[formcontrolname=vocoderid]")),
    element(by.css("input[formcontrolname=remote_payload_type]")),
  ],
  MANUFACTORID_LIST: ["UNKNOWN", "RAYTHEON", "VOCALITY", "VOICE_INTEROP"],
  CONNECTION_MODE_LIST: ["Unknown", "UDP", "TCP", "DTLS", "TLS"],
  systemMotoLcpFormControl: [
    element(by.css("input[formcontrolname=system_name]")),
    element(by.css("input[formcontrolname=system_desc]")),
    element(by.css("mat-select[formcontrolname=mototrbo_type]")),
    // Primary Details
    element(by.css("input[formcontrolname=radiosystemname]")),
    element(by.css("input[formcontrolname=radiosystemid]")),
    element(by.css("mat-select[formcontrolname=ackemergencyalarm]")),
    element(by.css("input[formcontrolname=ackemergencyalarmsourceid]")),
    element(by.css("mat-select[formcontrolname=privacytype]")),
  ],
  SYSTEM_LCP_TYPES: ["Ipsite", "Linked Cap", "CapacityMax"],
  BOOLEAN_VALUE: ["False", "True"],
  MOTO_LCP_PRIVACY_TYPE: ["None", "Basic", "ARC4", "AES256"],
  RANGE_TYPE: ["Native range", "Pseudo range"],
  RANGE_DEVICE_TYPE: ["Device range", "Talk-Group range"],
  MOTO_WRG_TYPE: ["Voice", "Data", "Voice + Messaging"],
  wrgMototrboFormControl: [
    element(by.css("input[formControlName=wrg_name]")),
    element(by.css("mat-select[formControlName=wrg_type]")),
    element(by.css("input[formControlName=gw_auth_server_fqdn]")),

    // Primary Details
    element(by.css("input[formControlName=wrgdesc]")),
    element(by.css("input[formControlName=wrghost]")),
    element(by.css("input[formControlName=wrghostip]")),
    element(by.css("input[formControlName=mnishostip]")),
    element(by.css("mat-select[formControlName=isstandby]")),

    /* Standby Details
    For this section, use spread operator to add values from wrgStandByFormControl.*/

    /* Kodiak Configuration
    For this section, Use spread operator to add values from either 
    kodiakConfigVoiceWrgFormControl, kodiakConfigDataWrgFormControl or kodiakConfigVoiceMsgWrgFormControl.
    */

    /* Common Configuration
    For this section, Use spread operator to add values from either 
    kodiakConfigVoiceWrgFormControl, wrgCommonConfigFormControl.
    */
  ],
  kodiakConfigVoiceWrgFormControl: [
    element(by.css("input[formControlName=anonymouscid]")),
    element(by.css("input[formControlName=anonymousmdn]")),
    element(by.css("input[formControlName=anonymoususralias]")),
    element(by.css("input[formControlName=groupcalltimeout]")),
    element(by.css("input[formControlName=pvtcalltimeout]")),
    element(by.css("input[formControlName=maxpttduration]")),
    element(by.css("mat-select[formControlName=enablepeeragc]")),
    element(by.css("mat-select[formControlName=enablekodiakagc]")),
    element(by.css("input[formControlName=name]")),
    element(by.css("input[formControlName=unitid]")),
    element(by.css("input[formControlName=system_id]")),
    element(by.css("input[formControlName=slot_id]")),
    element(by.css("mat-select[formControlName=privacy_type]")),
  ],
  kodiakConfigDataWrgFormControl: [
    element(by.css("input[formControlName=anonymouscid]")),
    element(by.css("input[formControlName=anonymousmdn]")),
    element(by.css("input[formControlName=anonymoususralias]")),
    element(by.css("input[formControlName=gw_config_path]")),
    element(by.css("input[formControlName=controlchannelurl]")),
    element(by.css("input[formControlName=notifychannelurl]")),
    element(by.css("input[formControlName=registrarexpirytimeout]")),
  ],
  kodiakConfigVoiceMsgWrgFormControl: [
    element(by.css("input[formControlName=anonymouscid]")),
    element(by.css("input[formControlName=anonymousmdn]")),
    element(by.css("input[formControlName=anonymoususralias]")),
    element(by.css("input[formControlName=name]")),
    element(by.css("input[formControlName=unitid]")),
    element(by.css("input[formControlName=system_id]")),
    element(by.css("input[formControlName=slot_id]")),
    element(by.css("mat-select[formControlName=privacy_type]")),
    element(by.css("input[formControlName=gw_config_path]")),
    element(by.css("input[formControlName=controlchannelurl]")),
    element(by.css("input[formControlName=notifychannelurl]")),
    element(by.css("input[formControlName=registrarexpirytimeout]")),
  ],
  wrgStandByFormControl: [
    element(by.css("mat-select[formControlName=failoveractive]")),
    element(by.css("input[formControlName=failoverip]")),
    element(by.css("input[formControlName=geowrgname]")),
    element(by.css("input[formControlName=geo_mnis_host_ip]")),
  ],
  wrgCommonConfigFormControl: [
    element(by.css("mat-select[formControlName=isfullstatus]")),
    element(by.css("input[formControlName=statusurl]")),
    element(by.css("input[formControlName=stausrefreshsec]")),
  ],
  SUBSCRIBER_LIST: ["PTT", "RADIO"],
  TALKGROUP_ADDITIONAL_TYPE: ["Wide", "Local"],
};
