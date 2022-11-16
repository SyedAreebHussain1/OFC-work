// export const BASEURL = "https://squarepro.net/CallRecordingAPI/";
// export const URL = "https://squarepro.net/CallRecordingAPI/";
// export const URLLOCAL = "https://squarepro.net/CallRecordingAPI/";

//envoirment variable 
//production npm run-script prod
//development npm start
export const BASEURL = process.env.REACT_APP_API_URL;
export const URL = process.env.REACT_APP_API_URL;
export const URLLOCAL = process.env.REACT_APP_API_URL;

export const BASEURL_LOCAL = 'http://192.168.18.39:3000/'


//local URLS
// export const BASEURL = "https://backendcrm.squarepro.net/CRM/";
// export const URL = "https://backendcrm.squarepro.net/CRM/";
// export const URLLOCAL = "https://backendcrm.squarepro.net/ CRM/";

// http://backendcrm.squarepro.net

// export const BASEURL = "http://192.168.18.121:8050/CRM/";
// export const URL = "http://192.168.18.121:8050/CRM/";
// export const URLLOCAL = "http://192.168.18.121:8050/";
// export const FORMBASEURL="http://192.168.18.21:8050/CRM/";

// AMAZON URLS
// export const BASEURL = "http://3.110.67.125:8001/CallRecordingAPI/";
// export const URL = "http://3.110.67.125:8001/CallRecordingAPI/";
// export const URLLOCAL = "http://192.168.18.47:8000/";


// export const URL = "http://squarepro.net/CallRecordingAPI/";
   
export const URLPAYMENTRECEIPT = "https://squarepro.net/AccountReceipt/";
//export const BASEURL = "http://squarepro.net/CallRecordingAPI/";
// export const BASEURL = "http://192.168.18.121:8001/CallRecordingAPI/";
export const LOCALBASEURL = "http://192.168.18.121:8001/CallRecordingAPI/";

export const InsertNewUser = `${BASEURL}insertnewuser`;
// export const testing = `${BASEURL}forgotpassword`;
export const Updatepassword = `${BASEURL}Dashboarduserupdatepassword`;
export const RECORDING_BASE_URL = `https://squarepro.net/callrecordings/`;
export const NOTIFY_USER = "sendnotification";

export const Campaign = `${BASEURL}Showcampaign`;
export const OrderStatus = `${BASEURL}OrderStatus`;
export const SocialLeads = `${BASEURL}ShowNoofcompaigns`;
export const Sucessfullleadgraph = `${BASEURL}Sucessfullleadgraph`;
export const ShowNoofcompaigns = `${BASEURL}ShowNoofcompaigns`;
export const meetingnotifications = `${BASEURL}meetingnotifications`;

export const projects = `${BASEURL}ShowNoofcompaigns`;
export const allProjectsGraph = `${BASEURL}Sucessfullleadgraph`;