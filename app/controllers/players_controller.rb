class PlayersController < ApplicationController
  def show
    @player = Player.find(params['player_id'])
  end
end
