Views = {}
Views.PostsIndex = Backbone.View.extend({
  initialize: function() {
    var that = this;

    renderCallback = that.render.bind(that);
    that.listenTo(that.collection, "destroy", renderCallback);
    that.listenTo(that.collection, "add", renderCallback);
    that.listenTo(that.collection, "change", renderCallback);
    that.listenTo(that.collection, "remove", renderCallback);
    that.listenTo(that.collection, "reset", renderCallback);
  },

  events: {
    "click button.delete-button": "destroy"
  },

  render: function() {
    var that = this;

    var ul = $("<ul></ul>");
    that.collection.each(function (post) {
      var button = $("<button class=delete-button id=" + post.id +">Delete Post</button>" );
      // console.log(button.html());
      ul.append($("<li id=" + post.id + ">" + "<a href='#posts/" + post.id + "'>" + post.get('title') + "</a></li>")).append(button);

      //$("li#" + post.id).append(button);
    });
    ul.append($("<br><a href='#/posts/new'>New Post</a>"));
    that.$el.html(ul);
    return that;
  },

  destroy: function(el){
    var that = this;
    var post = that.collection.get(el.target.id);
    post.destroy();
  },


});