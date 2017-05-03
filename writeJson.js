var hardware = { // creating a js object
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
//run and save the output in file named json.txt
