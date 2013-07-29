Routers = {};
Routers.PostsRouter = Backbone.Router.extend({

  initialize: function(posts) {
    this.posts = posts;
    $('body').append('<div class=sidebar style="float:left;"></div>');
    $('body').append('<div class=content style="float:right;"></div>');
  },

  routes: {
    "": "index",
    "posts/new": "new",
    "posts/:id": "show",
    "posts/:id/edit": "edit"

  },

  index: function(){
    var that = this;
    //index method
    // get collection
    var indexView = new Views.PostsIndex({collection: that.posts});
    // console.log(that.posts[0]);
    $('.sidebar').html(indexView.render().$el);
    // that.show(that.posts.0.get("id"));
  },

  show: function(id){
    var that = this;
    var post = that.posts.get(id);
    var newPostShow = new Views.PostShow(post);
    $('.content').html(newPostShow.render().$el);
  },

  edit: function(id){
    var that = this;
    var post = that.posts.get(id);
    console.log(post);
    var newEditPost = new Views.PostEdit(post);

    $('.content').html(newEditPost.render().$el);

  },

  new: function(){
    var that = this;
    var newPostNew = new Views.PostNew(that.posts);
    $('.content').html(newPostNew.render().$el)
  }

})
