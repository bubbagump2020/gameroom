class SessionController < ApplicationController
    def create
      user = User.find_by({ username: params[:username]})
      
      if( user && user.authenticate(params[:password]))
        session[:user_id] = user.email
        render json: {
          success: true, 
          username: user.username
        }
      else
        render json: { success: false, id: nil }
      end
    end

    def is_logged_in?
        if logged_in? && current_user
          render json: {
            logged_in: true,
            user: current_user
          }
        else
          render json: {
            logged_in: false,
            message: 'no such user'
          }
        end
    end

    def destroy
        logout!
        render json: {
          status: 200,
          logged_out: true
        }
      end
end
