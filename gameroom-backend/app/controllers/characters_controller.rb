class CharactersController < ApplicationController
    respond_to :json

    def index
        puts @current_user
        respond_with Character.all
    end

    def new
    end

    def create
        @character = Character.new(character_params)
        if @character.save
            render json: { status: :created, character: @character }
        else
            render json: {
                status: 500,
                errors: @character.errors.full_messages
            }
        end
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
