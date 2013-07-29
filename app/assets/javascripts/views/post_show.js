Views.PostShow = Backbone.View.extend({

  events: {

  },

  render: function(){
    var that = this;
    var title = $("<h2>" + that.post.get("title") + "</h2>");
    var body = $("<p>" + that.post.get("body") + "</p>");
    $el.append(title).append(body);
  }





});