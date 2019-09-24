const cheerio = require("cheerio");
const axios = require("axios");
const request = require("request");

const homeUrl = "https://slcm.manipal.edu/loginForm.aspx";
const acadsUrl = "https://slcm.manipal.edu/Academics.aspx";

// axios
//   .get(homeUrl)
//   .then(response => {
//     const $ = cheerio.load(response.data);
//     $(".form-control", "#txtUserid").text(credentials.txtUserid);
//     $(".form-control", "#txtpassword").text(credentials.txtpassword);

//     console.log(response.data);
//   })
//   .catch(err => {
//     console.log(err);
//     res.send(err);
//   });

// request.post({ url: homeUrl, formData: credentials }, function optionalCallback(
//   err,
//   httpResponse,
//   body
// ) {
//   if (err) {
//     return console.error("upload failed:", err);
//   }
//   console.log("Upload successful!  Server responded with:", body);
//   request(acadsUrl, function(error, response, body) {
//     console.log("error:", error); // Print the error if one occurred
//     console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
//     console.log("body:", body); // Print the HTML for the Google homepage.
//   });
// });
