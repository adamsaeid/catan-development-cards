class PlayersController < ApplicationController
  before_action :setup, only: [:index, :give, :draw]

  def draw
    drawn_card = Card.where(player_id: nil).sample
    drawn_card.update_attributes(player_id: params['player_id'])
    render :index
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

    render :index
  end

  def show
    @player = Player.find(params['player_id'])

    @played_cards = Card.where.not(played_at: nil)

    authenticate_or_request_with_http_basic do |name, password|
      name == @player.name && password == @player.password
    end
  end

  private

  def setup
    @players = Player.all.order(:id)
    setup_bank_resources
  end

  def setup_bank_resources
    @brick_left_in_bank = 19 - Player.sum(:brick_count)
    @grain_left_in_bank = 19 - Player.sum(:grain_count)
    @lumber_left_in_bank = 19 - Player.sum(:lumber_count)
    @ore_left_in_bank = 19 - Player.sum(:ore_count)
    @wool_left_in_bank = 19 - Player.sum(:wool_count)
  end
end
