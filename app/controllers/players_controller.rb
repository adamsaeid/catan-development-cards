class PlayersController < ApplicationController
  def draw
    drawn_card = Card.where(player_id: nil).sample
    drawn_card.update_attributes(player_id: params['player_id'])
  end
  def show
    @player = Player.find(params['player_id'])
  end
end
