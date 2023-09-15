class User {
    constructor(name, username, password) {
    this.name = name;
    this.username = username;
    this.password = password;
 }
 login(username, password) {
    if (username != this.username || password != this.password) 
    return console.log("Login faild")

    console.log("login success");
 }

 setPassword(oldPassword, newPassword) { 

    if (oldPassword != this.password)
    return "change password fail"

    const invalidPassword = this.verifyPassword(newPassword);
if (!invalidPassword) return console.log("password it nhat 6 ki tu")

    this.password = newPassword;
    console.log("change success")
 }

 verifyPassword(newPassword) {
    if(newPassword.length > 6) return true;
    return false;
 }
}


const myAcount = new User("Hien", "Hientran", "1233");

console.log(222, myAcount);
myAcount.login("Hientran", "1233")
myAcount.login("Hientran", "123")
myAcount.setPassword("1234", "123333333");

console.log(222, myAcount);