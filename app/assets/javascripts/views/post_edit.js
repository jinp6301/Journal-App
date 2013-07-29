Views.PostEdit = Backbone.View.extend({

  initialize: function(post){
    this.post = post;
  },

  events:{
    "click button.submit-edit": "edit"

  },

  render: function(){
    var that = this;
    var renderedContent = JST["posts/form"]({post: that.post});
    that.$el.html(renderedContent);
    return that;
  },

  edit: function(event){
    event.preventDefault();
    var formData = $('.edit-post')
    console.log(formData);
    var title = $('.title').val()
    var body = $('.body').val()
    this.post.set({title: title, body: body})
    this.post.save({},
      {success: function(){
        console.log("success");
        Backbone.history.navigate("/", true);
      }
      })
  }




})