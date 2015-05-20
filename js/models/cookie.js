cookieApp.Cookie = Backbone.Model.extend({
  defaults: {
    cname: "unknown",
    calories: 0,
    type: 'unknown',
    qty: 0
  }
});

cookieApp.Cookies = Backbone.Collection.extend({
  model: cookieApp.Cookie
});