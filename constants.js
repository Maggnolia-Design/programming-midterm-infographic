//  PIE_DATA = {"data": [["Other", 0.0]], "title": "Education > Average IQ, 2002"};
var  IQ_DATA_OG = {"data": {"BE": 100.0, "FR": 98.0, "BG": 93.0, "DK": 98.0, "BB": 78.0, "HR": 90.0, "ET": 63.0, "DE": 102.0, "JP": 105.0, "HU": 99.0, "HK": 107.0, "BR": 87.0, "GN": 66.0, "FI": 97.0, "FJ": 84.0, "GR": 93.0, "NL": 102.0, "NG": 67.0, "NZ": 100.0, "NP": 78.0, "EG": 83.0, "GT": 79.0, "CO": 89.0, "CN": 100.0, "GQ": 59.0, "IQ": 87.0, "CA": 97.0, "IR": 84.0, "IT": 102.0, "EC": 80.0, "CD": 65.0, "CZ": 97.0, "AR": 96.0, "AU": 98.0, "IL": 94.0, "IN": 81.0, "LB": 86.0, "IE": 93.0, "ID": 89.0, "CU": 85.0, "GH": 71.0, "MA": 85.0, "KE": 72.0, "JM": 72.0, "MN": 98.0, "MH": 84.0, "KR": 106.0, "MY": 92.0, "MX": 87.0, "AT": 102.0}};
  STAT_DIGITS = 2;
  STAT_PREFIX = '';
  STAT_POSTFIX = '';

//  PIE_DATA = {"data": [["Other", 0.0]], "title": "Education > Literacy > Total population, 2011"};
var  LIT_DATA_OG = {"data": {"BD": 43.1, "BE": 99.0, "BF": 21.8, "BG": 98.6, "BA": 96.7, "BB": 99.7, "WF": 50.0, "BM": 98.0, "BN": 91.8, "BO": 87.2, "BH": 89.1, "BI": 51.6, "BJ": 34.7, "BT": 47.0, "JM": 87.9, "JO": 89.9, "WS": 99.7, "BR": 88.6, "BS": 95.6, "BY": 99.6, "BZ": 94.1, "LV": 99.8, "RW": 70.4, "TL": 58.6, "TM": 98.8, "TJ": 99.4, "RO": 98.4, "GW": 42.4, "GU": 99.0, "GT": 70.6, "GR": 97.5, "GQ": 85.7, "JP": 99.0, "GY": 98.8, "GE": 100.0, "GD": 96.0, "GB": 99.0, "GA": 63.2, "GN": 29.5, "GM": 40.1, "GL": 100.0, "GH": 74.8, "OM": 81.4, "BW": 81.2, "HR": 98.5, "HT": 52.9, "SV": 81.1, "HK": 94.0, "HN": 76.2, "AD": 100.0, "PR": 94.1, "PW": 92.0, "PT": 93.3, "PY": 94.0, "AI": 95.0, "PA": 92.6, "PF": 98.0, "PG": 66.0, "PE": 92.9, "PK": 49.9, "PH": 95.9, "PL": 99.8, "PM": 99.0, "ZM": 80.6, "RU": 99.6, "EE": 99.8, "EG": 71.4, "ZA": 86.4, "EC": 92.5, "AL": 86.5, "AO": 67.4, "ET": 42.7, "SO": 37.8, "ZW": 90.7, "KY": 98.0, "ES": 97.9, "ER": 58.6, "MD": 99.1, "MG": 68.9, "UY": 98.0, "MC": 99.0, "UZ": 99.3, "MM": 89.9, "ML": 46.4, "MN": 99.1, "MH": 93.7, "US": 99.0, "MU": 85.6, "MT": 92.8, "MW": 62.7, "MV": 93.8, "MQ": 97.7, "MP": 97.0, "MS": 97.0, "MR": 41.7, "UG": 69.9, "MY": 88.9, "MX": 86.1, "IL": 97.1, "FR": 99.0, "MA": 52.3, "FI": 100.0, "FJ": 93.7, "FM": 89.0, "NI": 67.5, "NL": 99.0, "NO": 100.0, "NA": 84.0, "VU": 74.0, "NC": 96.2, "NE": 28.7, "NG": 68.0, "NZ": 99.0, "NP": 45.2, "NU": 95.0, "CK": 95.0, "CI": 50.9, "CH": 99.0, "CO": 90.4, "CN": 91.6, "CM": 79.0, "CL": 96.2, "CA": 99.0, "CF": 51.0, "CD": 65.5, "CZ": 99.0, "CY": 97.6, "CR": 96.0, "HU": 99.4, "CV": 76.6, "CU": 97.0, "SZ": 81.6, "SY": 79.6, "KG": 98.7, "KE": 85.1, "SR": 89.6, "KH": 73.6, "KN": 97.8, "KM": 56.5, "ST": 84.9, "SK": 99.6, "KR": 98.1, "SI": 99.7, "KP": 99.0, "KW": 93.3, "SN": 40.2, "SM": 96.0, "SL": 35.1, "SC": 91.9, "KZ": 99.5, "SA": 78.8, "SG": 93.2, "SE": 99.0, "SD": 61.1, "DO": 84.7, "DM": 94.0, "DJ": 67.9, "DK": 99.0, "DE": 99.0, "YE": 50.2, "DZ": 70.0, "LB": 87.4, "LC": 90.1, "LA": 73.0, "TW": 96.1, "TT": 98.6, "TR": 87.4, "LK": 92.3, "LI": 100.0, "TN": 74.3, "TO": 98.9, "LT": 99.6, "LU": 100.0, "LR": 57.5, "LS": 84.8, "TH": 96.0, "TG": 60.9, "TD": 47.5, "TC": 98.0, "LY": 82.6, "VA": 100.0, "VC": 96.0, "AE": 77.9, "VE": 93.4, "AG": 85.8, "AF": 28.1, "IQ": 40.4, "IS": 99.0, "IR": 79.4, "AM": 98.6, "IT": 98.6, "VN": 94.0, "AS": 97.0, "AR": 97.1, "AU": 99.0, "AT": 98.0, "AW": 97.3, "IN": 59.5, "TZ": 78.2, "AZ": 98.8, "IE": 99.0, "ID": 90.4, "UA": 99.7, "QA": 89.0, "MZ": 47.8}};
  STAT_DIGITS = 2;
  STAT_PREFIX = '';
  STAT_POSTFIX = '%';

  IQ_DATA = [] 
  LIT_DATA =[]
  COUNTRIES = []

  COUNTRY_CODES=[
  "Belgium",
  "France",
  "Bulgaria",
  "Denmark",
  "Barbados",
  "Croatia",
  "Ethiopia",
  "Germany",
  "Japan",
  "Hungary",
  "Hong Kong",
  "Brazil",
  "Guinea",
  "Finland",
  "Fiji",
  "Greece",
  "Netherlands",
  "Nigeria",
  "New Zealand",
  "Nepal",
  "Egypt",
  "Guatemala",
  "Colombia",
  "China",
  "Equatorial Guinea",
  "Iraq",
  "Canada",
  "Iran",
  "Italy",
  "Ecuador",
  "Democratic Republic of the Congo",
  "Czech Republic",
  "Argentina",
  "Australia",
  "Israel",
  "India",
  "Lebanon",
  "Republic of Ireland",
  "Indonesia",
  "Cuba",
  "Ghana",
  "Morocco",
  "Kenya",
  "Jamaica",
  "Mongolia",
  "Marshall Islands",
  "South Korea",
  "Malaysia",
  "Mexico",
  "Austria"
]
  

//A function that sorts literacy rates from low to high

//http://p5js.org/reference/#/p5/sort
//http://stackoverflow.com/questions/3423394/algorithm-of-javascript-sort-function

//var sort)
// sort=function(){
//   for(entry1 in LIT_DATA_OG.data){
//     for(entry2 in LIT_DATA_OG.data){
//       if(LIT_DATA_OG.data[entry2]<=LIT_DATA_OG.data[entry1]){
//         temp = entry1
//         entry1 = entry2
//         entry2 = temp
        
//         temp = LIT_DATA_OG.data[entry1]
//         LIT_DATA_OG.data[entry1] = LIT_DATA_OG.data[entry2]
//         LIT_DATA_OG.data[entry2] = temp
//       }
//     }
//      console.log(entry1)
//   }
// }
// sort(LIT_DATA_OG.data)
//console.log(LIT_DATA_OG.data)


//A function that looks for pairs of strings...
//then puts the corresponding data into a 3 arrays...
//one for IQ values, one for literacy calues, one for country names

var hit = false;