// create some models

var cookie1 = new cookieApp.Cookie({cname: "ChocoChip", calories: 100, type: "Choco Chips", qty: 3});
var cookie2 = new cookieApp.Cookie({cname: "Peanut Truffle", calories: 117, type: "Peanutbutter", qty: 7});
var cookie3 = new cookieApp.Cookie({cname: "Peanut Truffle", calories: 117, type: "Peanutbutter", qty: 7});

// create our collection

var cookies = new cookieApp.Cookies([cookie1, cookie2, cookie3]);
cookies.view.render();