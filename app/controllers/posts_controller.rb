class PostsController < ApplicationController

  def create
    @post = Post.new(params[:post])
    if @post.save
      respond_to  do |format|
        format.json :json => @post
      end
    else
      render :json => @post.errors, :status => 422
    end


  end


  def index
    @posts = Post.all

    respond_to  do |format|
      format.json {render :json => @posts}
      format.html {render :index}
    end
  end



end