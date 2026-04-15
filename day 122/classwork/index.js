const user = {}
user.fullname = "Tornike Begheluri"
user.password = "GOA2026"
user['favorite color'] = "Blue";
user.printInfo = function() {
    console.log(`Fullname: ${this.fullname}, Password: ${this.password}, Favorite Color: ${this['favorite color']}`);
};
for (let key in user) {
    if (typeof user[key] !== 'function') {
        console.log(`${key}: ${user[key]}`);
    }
}