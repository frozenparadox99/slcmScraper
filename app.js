const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");
const request = require("request");
const puppeteer = require("puppeteer");
const HTMLParser = require("node-html-parser");
const bodyParser = require("body-parser");

const app = express();

// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

const homeUrl = "https://slcm.manipal.edu/loginForm.aspx";
const acadsUrl = "https://slcm.manipal.edu/Academics.aspx";

// app.get("/", (req, res) => {
//   axios
//     .get(homeUrl)
//     .then(response => {
//       const $ = cheerio.load(response.data);
//       $(".form-control", "#txtUserid").text();
//       console.log(response.data);
//       res.send("Success");
//     })
//     .catch(err => {
//       console.log(err);
//       res.send(err);
//     });
// });

// app.get("/request", (req, res) => {
//   request.post(homeUrl, { form1: credentials });
//   request(acadsUrl, (err, resp, body) => {
//     console.log(body);
//     res.send("Success");
//   });
// });

// app.get("/acads", (req, res) => {
//   request(acadsUrl, (err, resp, body) => {
//     console.log(body);
//     res.send("Success");
//   });
// });

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/getmarks", async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    console.log(req.body.reg);
    console.log(req.body.pass);
    await page.goto(homeUrl);

    await page.type("#txtUserid", `${req.body.reg}`, { delay: 100 });
    await page.type("#txtpassword", req.body.pass, { delay: 100 });
    await page.keyboard.press("Enter");

    await page.waitForNavigation();
    console.log("New Page URL:", page.url());

    await page.goto(acadsUrl);
    console.log(page.url());

    // const text = await page.evaluate(
    //   () => document.querySelector("td").textContent
    // );
    // console.log(text);
    let y = await page.evaluate(() => {
      return document.getElementById("accordion1").innerHTML;
    });

    const root = await HTMLParser.parse(y);
    let query = await root.querySelectorAll("td");
    let subjectQuery = await root.querySelectorAll("a");
    let subjects = [];
    for (let j = 0; j < subjectQuery.length; j++) {
      //   console.log(subjectQuery[j].rawText.trim());
      subjects.push(subjectQuery[j].rawText.trim());
    }
    let str = [];
    let sendThis = {};
    let sendObj = {};
    let subjectNumber = 0;
    for (let i = 0; i < query.length; i++) {
      sendThis[i] = query[i].rawText;
      if (i != query.length - 1) {
        if (
          query[i].rawText === "Total Marks" &&
          query[i + 1].rawText === "15.00"
        ) {
          sendObj[`${subjects[subjectNumber]}`] = query[i + 2].rawText;
          subjectNumber++;
        }
      }

      str.push(query[i].rawText);
      //   console.log(query[i].rawText);
    }

    console.log(sendObj);
    res.json(sendObj);
  } catch (err) {
    res.send(err);
  }
});

app.listen(PROCESS.ENV.PORT || 3000, () => {
  console.log("Server running at port 3000");
});
