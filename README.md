# slcmScraper
Scrapes the slcm manipal portal to give the internal marks after entering the registration number and password
To be updated with a front end soon.
Main code is in app.js for the server on node.
Used mechanize in the ipython notebook to get all marks as another approach.
## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install node and npm.

Run the following to acquire node modules

```bash
npm install
```

## Usage

Run the following to start the server

```bash
node app.js 
```

After this send a POST request using POSTMAN to the route 'localhost:3000/getMarks' with the body as :

```bash
{
	"reg":"Your registration number",
	"pass":"Your password"
}
```

## Output
![outputimage1](https://i.ibb.co/XCCPMDd/slcm-Capture-Two.png)

![outputimage2](https://i.ibb.co/vzMP6m2/slcm-Capture.png)
