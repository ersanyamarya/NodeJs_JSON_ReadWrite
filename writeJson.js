/*....................................................
* Author: Sanyam Arya
* ersanyamarya@gmail.com
* https://www.facebook.com/er.sanyam.arya
* https://www.linkedin.com/in/sanyam-arya-077ab638/
......................................................*/

{
    "hardwareid": "123-TEST-45",
    "type": "Device Measurements",
    "requests": {
        "Measurements": {
            "temperature": 23,
            "humidity": 17
        }
    },
    "updateState": true,
    "eventDate": "2017-05-03T05:55:17.075Z"
}var hardware = { // creating a js object
  hardwareid: "123-TEST-45", //properties
  type: "Device Measurements",
  requests: { // sub object
    Measurements: { //sub sub object
      temperature: parseInt(Math.random() * 50),
      humidity: parseInt(Math.random() * 100)
    },
  },
  updateState: true,
  eventDate: new Date().toISOString()
};
//converting js object to JSON Object
var s2Stringi = JSON.stringify(hardware,"",4);
console.log(s2Stringi);
//run and save the output in file named json.txt
