const fs = require("fs");
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const HTMLParser = require("node-html-parser");

const homeUrl = "https://slcm.manipal.edu/loginForm.aspx";
const acadsUrl = "https://slcm.manipal.edu/Academics.aspx";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(homeUrl);

  await page.type("#txtUserid", "170907474", { delay: 100 });
  await page.type("#txtpassword", "", { delay: 100 });
  await page.keyboard.press("Enter");

  await page.waitForNavigation();
  console.log("New Page URL:", page.url());

  await page.goto(acadsUrl);
  console.log(page.url());

  const text = await page.evaluate(
    () => document.querySelector("td").textContent
  );
  console.log(text);

  //   let x = await page.$$("td");
  let y = await page.evaluate(() => {
    return document.getElementById("accordion1").innerHTML;
  });

  const root = await HTMLParser.parse(y);
  let query = await root.querySelectorAll("td");
  let str = [];
  for (let i = 0; i < query.length; i++) {
    str.push(query[i].rawText);
    console.log(query[i].rawText);
  }

  const $ = await cheerio.load(y);
  let sendData = await $("td").text();
  console.log(sendData);

  //   await fs.writeFile("marks2.txt", y, function(err) {
  //     if (err) throw err;
  //     console.log("Saved!");
  //   });

  let x = await page.$$eval("td", nodes => nodes.map(n => n.innerText));

  await fs.writeFile("marks.txt", x.toString(), function(err) {
    if (err) throw err;
    console.log("Saved!");
  });

  await browser.close();
})();
