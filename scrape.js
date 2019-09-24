const fs = require("fs");
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

const homeUrl = "https://slcm.manipal.edu/loginForm.aspx";
const acadsUrl = "https://slcm.manipal.edu/Academics.aspx";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(homeUrl);

  await page.type("#txtUserid", "170907474", { delay: 100 });
  await page.type("#txtpassword", "******", { delay: 100 });
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
    let z = document.getElementById("accordion1").getElementsByTagName("td");
    console.log(z);
    return document.getElementById("accordion1").innerText;
  });
  await fs.writeFile("marks2.txt", y, function(err) {
    if (err) throw err;
    console.log("Saved!");
  });

  let x = await page.$$eval("td", nodes => nodes.map(n => n.innerText));
  console.log(x);
  await fs.writeFile("marks.txt", x.toString(), function(err) {
    if (err) throw err;
    console.log("Saved!");
  });

  await browser.close();
})();

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(homeUrl, { waitUntil: "load" });
//   console.log(page.url());

//   // Type our query into the search bar
//   //   await page.focus("#txtUserid");
//   page.type("#txtUserid", "170907474", { delay: 100 });

//   //   await page.focus("#txtpassword");
//   page.type("#txtpassword", "", { delay: 100 });

//   // Submit form
//   //   await page.$eval("#form1", form => form.submit());
//   page.keyboard.press("Enter");
//   // Wait for search results page to load
//   await page.waitForNavigation({ waitUntil: "load" });

//   console.log("FOUND!", page.url());

//   // Extract the results from the page
//   //   const links = await page.evaluate(() => {
//   //     const anchors = Array.from(document.querySelectorAll("tr"));
//   //     return anchors.map(anchor => anchor.textContent);
//   //   });
//   //   console.log(links.join("\n"));
//   browser.close();
// })();
