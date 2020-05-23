# frozen_string_literal: true

class PlayerAppController < ApplicationController
  layout "player_app"

  def show
    player = Player.find(params['player_id'])
    @player_app_props = { name: player.name }
  end
end
