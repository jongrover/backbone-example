cookieApp.CookiesView = Backbone.View.extend({

  template: _.template($('#cookies-template').html()),

  render: function () {
    this.$el.html(this.template({cookies: this.collection.toJSON() }));
    $('main').html(this.el);
    return this.el;
  }
});