const cookie = require('cookie')
function isAdmin(event) {
    const incomingCookie = cookie.parse(event.headers.cookie || "")

    if (incomingCookie?.petadoption == "qwertyuiopasdfghjklzxcvbnm1234567890") {
        return true
    }
    return false
}
module.exports = isAdmin