cookieApp.Cookie = Backbone.Model.extend({
  defaults: {
    cname: "unknown",
    calories: 0,
    type: 'unknown',
    qty: 0
  }
});

cookieApp.Cookies = Backbone.Collection.extend({

  initialize: function () {
    this.view = new cookieApp.CookiesView({collection: this});
  },
  model: cookieApp.Cookie
});