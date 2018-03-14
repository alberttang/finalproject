const db = require("../../models");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

class AuthCtrl {
    static login(req, res) {
        db.User.findOne({"email": req.body.email})
        .then(resp => {
            //check if hashes match
            console.log(resp);
            const hashToValidate = AuthCtrl._generateHash(req.body.password, resp.salt);
            if(hashToValidate === resp.hash) {
                //login succeess
                const token = AuthCtrl._generateJWT(resp);
                res.json({token: token});
            }
            else {
                //bad pass
                res.status(400).json("Incorrect Password");
            }
        })
        .catch(err => {
            console.error(err);
            res.status(400).json(`User: ${req.body.email} not found.`);
        });
        

        //return JWT
    }
    static register(req, res) {
        //create salt
        const salt = AuthCtrl._generateSalt();
        
        //create hash
        const hash = AuthCtrl._generateHash(req.body.password, salt);
        //create user object
        const user = {
            email: req.body.email,
            salt: salt,
            hash: hash
        }
        //insert into DB
        db.User.create(user)
        .then(resp => {
            res.json({
                msg: `User: ${user.email} created.`
            })
        })
        .catch(err => {
            res.status(400).json(err);
            console.error(err);
        })
        //return response
    }
    static _generateHash(password, salt) {
        return crypto.pbkdf2Sync(password, salt, 100000, 64, "sha512").toString("hex");
    }
    static _generateSalt() {
        return crypto.randomBytes(16).toString("hex");
    }
    static _generateJWT(user) {
        const expTime = new Date();
        expTime.setDate(expTime.getDate() + 7);
        return jwt.sign({
            userID: user._id,
            email: user.email,
            exp: parseInt(expTime.getTime()/1000)
        }, process.env.JWT_SECRET);
    }
}
module.exports = AuthCtrl;