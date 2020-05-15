class PlayersController < ApplicationController
  def draw
    drawn_card = Card.where(player_id: nil).sample
    drawn_card.update_attributes(player_id: params['player_id'])
  end

  def play_card
    card = Card.find(params['card_id'])
    card.update_attributes(played_at: Time.now)
  end

  def give
    player = Player.find(params['player_id'])
    player.increment(:ore_count, params['ore'].to_i)
    player.increment(:lumber_count, params['lumber'].to_i)
    player.increment(:brick_count, params['brick'].to_i)
    player.increment(:wool_count, params['wool'].to_i)
    player.increment(:grain_count, params['grain'].to_i)
    player.save
  end

  def show
    @player = Player.find(params['player_id'])

    @played_cards = Card.where.not(played_at: nil)

    authenticate_or_request_with_http_basic do |name, password|
      name == @player.name && password == @player.password
    end
  end

  def index
    authenticate_or_request_with_http_basic do |name, password|
      name == 'admin' && password == 'tetriscookie'
    end

    @players = Player.all
  end
end
