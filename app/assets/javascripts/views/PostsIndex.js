Views = {}
Views.postsIndex = Backbone.View.extend({
  render: function() {
    var that = this;

    var ul = $("<ul></ul>");
    that.collection.each(function (post) {
      ul.append($("<li>" + post.get('title') + "</li>"));

    });
    that.$el.html(ul);
    return that;
  }

});