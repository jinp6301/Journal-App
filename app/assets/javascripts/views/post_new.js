Views.PostNew = Backbone.View.extend({
  initialize: function(posts){
    // that.listenTo(that.collection, "new", renderCallback);
    this.posts = posts;
  },

  events: {
    "click button.submit-new": "new"
  },

  render: function(){
    var that = this;
    var renderedContent = JST["posts/new_form"];
    that.$el.html(renderedContent);
    return that;
  },


  new: function(event){
    event.preventDefault();
    var that = this;
    var title = $('.title').val()
    var body = $('.body').val()
    var post = new Models.Post({title: title, body: body})

    post.save({}, {
      success: function(){
        that.posts.add(post);
        Backbone.history.navigate("#posts/" + post.id , true);
      }
    });
  }


});