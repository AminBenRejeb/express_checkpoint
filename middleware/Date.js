let date = new Date()

//  create middleware : 
const Dat=(req,res,next) => {
    let h = date.getHours()
    let d = date.getDay()

    if(!(d>=1&& d<=5 && h>=9 && h<=17)) {
        return res.send('<h2>We are not available now! Please visit us in available Time</h2>\n')
    }
    next()
}
module.exports = Dat;
