const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const { acces_token } = req.query;

dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const appRoute = require('./routes/dashboard');
app.use('/', appRoute);

// app.listen(5000, ()=>{
//     console.log('Server Berjalan di Port :');
// });

app.post("/user/generateToken", (req, res) => {
    // Validate User Here
    // Then generate JWT Token
  
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        userId: 12,
    }
  
    const token = jwt.sign(data, jwtSecretKey);
  
    res.send(token);
});
// validateToken
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiVGh1IEp1biAyMyAyMDIyIDEyOjE5OjA5IEdNVCswNzAwIChXYWt0dSBJbmRvbmVzaWEgQmFyYXQpIiwidXNlcklkIjoxMiwiaWF0IjoxNjU1OTYxNTQ5fQ.IOosp_yyMV6K-4sg3rknO8jNGpNgzhKNoEK6bsEAyy4
app.get("/user/validateToken", (req, res) => {
    // Tokens are generally passed in the header of the request
    // Due to security reasons.
  
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
  
    try {
        const token = req.header(tokenHeaderKey);
  
        const verified = jwt.verify(token, jwtSecretKey);
        if(verified){
            return res.send("Successfully Verified");
        }else{
            // Access Denied
            return res.status(401).send(error);
        }
    } catch (error) {
        // Access Denied
        return res.status(401).send(error);
    }
});

let PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT} ...`);
});