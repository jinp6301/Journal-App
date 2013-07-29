class PostsController < ApplicationController

  def create
    @post = Post.new(params[:post])
    if @post.save
      respond_to  do |format|
        format.json {render :json => @post}
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

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      render :nothing => true, :status => 200
    else
      render :nothing => true, :status => 500
    end

  end



end