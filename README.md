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
![outputimage1](https://lh3.googleusercontent.com/9cqJWjc30JiPS4D6PcsRRArtoQjGjkRRwBkxbUvELVH04fxRajF_1juJGM1SsynVdbNnFYZn63Cc9C1-YCoX1vpQzbcoCXGLbeY-y4ikSHb41O7n-go8Gb0nuD7g_Vj0QuhGvK7JJ9ZLrrYqSDO_scJtEILmw1yrCxkp-cY_jMPPANpddzjoB24LNX0ckTCREnDFrUrfixE9NFrzW42q35yaONYsh-ACOVWRFNo2TPillIuOQk0k6rc2SlYyHrkjl5_a4VRWb8Mzfxx-DDDM3oyHGvVSzsnEfHXKmC6ObBKOivROEXSMVQnCBIqXWWKlAKNkvX2zOypXVpIwavyS4Uhhb_xFrqTrHaTY1B7SH6Hm2VoVp-jRhP3P_ldJ5qz-8hE9Z_gMCx3tAcgewKdhCYIm51x7ESE6EaWUYH5kW2asiGV3GH36wnXhduIMr1yYyjA1Wlu12_h2HfwFgQEXvx1KKVvgjfYF9b0VXU2VrcfkRQEXSmv3TBo2cme7AHswBJ552qB2kJH9JUyW2wUnVlliIQeEtLifdVVOmZiWGM22tdt6o5Tt5uul9rUH9t61UZzv7eJInDeT58hShQEKb_-irOJWn__AvyDMMv3gKxBDOwffY2a8m8ksFGd72TLMWZwqJAgOrOWZo7BmyT59FmX5oiXLOqt9q9sZ6Y8CMmvWvs0jI_VFeQ=w1059-h340-no)
![outputimage2](https://lh3.googleusercontent.com/pv_KV3j8MZ2R2mixlrFvM4sggLfxm_OxhzR9h7hms-c1RvJLMRjcuc0GJG65w3r2FQOqbjfk-H5tx7M0zgwhijgnVpkNrWXsf0AZzPWDpPcwr1kW1inDmz-d5MzeCuaM0ksskx4Opey6-V1bPtcNl4o_Rs8IzG7aijWdnnB5rgikiY8fLAhX2vYAeYcZbxeVUL_jgMSKxS5qwXn8Adwvst9OuZ2qxcxxPZSyiOGUTkGC5e4Ya0rHeDBkLYm-UP45biGPOauLcsM2GasWyrEsgqTd40iLhKS4SbKgPvj_BIMHBRSRZqouQINWDNNtcL9la9fXTNDmpxI0QWkzuM1iXMVwc2QEtm8TllBpKyADC3An5ru3fxZ0lVyh3pFROoAywgFFSajSQO2BoC8PHAjL_4PpMFVS6RivrMDR-iBKnErqpegYKltD380pBwcA2JCIyyWdpq4hZGLA6tvgBFiJgQYqktOlnDisFtXcKp5id6DZb6NNSlZfX9Ap4P70uNxOLy-t-w3iFtPwsznUEGQUStAU8VEaRzpAqeWasvUcmpkdiIIU-Y2Z2Tz-_z3epWSqqTIjgs9PODOx8PstSguBw4y3-J_bVTHVG8Ro2Rb3_14RsVhWIMDNPoYchoyzhhQ3hx2KizKxM5nyOyGsMqG12cxfJfalld-REJaf6NXh4fTMy5pizu5SiA=w701-h139-no)
