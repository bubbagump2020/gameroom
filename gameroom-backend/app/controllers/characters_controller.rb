class CharactersController < ApplicationController
    respond_to :json

    def index
        puts @current_user
        respond_with Character.all
    end

    def new
    end

    def create
        respond_with Character.create(character_params)
    end

    private

    def character_params
        params.permit(
            :user_id,
            :character_name,
            :character_class,
            :character_level,
            :character_race,
            :str,
            :dex,
            :con,
            :int,
            :wis,
            :cha
        )
    end

end