class UsersController < ApplicationController
    respond_to :json

    def index
        respond_with User.all
    end

    def create
        respond_with User.create(user_params)
    end

    private

    def user_params
        params.permit(:username, :password)
    end


end
