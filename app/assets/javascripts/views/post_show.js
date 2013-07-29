Views.PostShow = Backbone.View.extend({
  initialize: function(post){
    this.post = post;

  },

  events: {
    "click button.back-button": "goback"
  },

  render: function(){
    var that = this;
    var title = $("<h2>" + that.post.get("title") + "</h2>");
    var body = $("<p>" + that.post.get("body") + "</p>");
    // that.$el.append(title).append(body).append("<button class=back-button>back</button>");
    that.$el.append(title).append(body).append("<a href='#'>Back</a>")
    that.$el.append(title).append(body).append("<a href='#posts/" + that.post.id + "/edit'>edit</a>")
    return that;
  }

  // goback: function(){
  //   if
  // }



});