class PlayersController < ApplicationController
  before_action :setup, except: [:show, :play_card]

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

    brick_change = params['brick'].to_i
    grain_change = params['grain'].to_i
    lumber_change = params['lumber'].to_i
    ore_change = params['ore'].to_i
    wool_change = params['wool'].to_i
    valid_resource_change = player.valid_resource_change?(brick_change, grain_change, lumber_change, ore_change, wool_change)

    if (valid_resource_change)
      player.increment(:ore_count, ore_change)
      player.increment(:lumber_count, lumber_change)
      player.increment(:brick_count, brick_change)
      player.increment(:wool_count, wool_change)
      player.increment(:grain_count, grain_change)
      player.save
    else
      flash.now.alert = "Player doesn't have enough of a resource"
    end
    
    render :index
  end

  def steal
    thief = Player.find(params['thief_id'])
    victim = Player.find(params['victim_id'])

    resources_to_steal_from = []

    victim.brick_count.times { resources_to_steal_from << 'brick' }
    victim.grain_count.times { resources_to_steal_from << 'grain' }
    victim.lumber_count.times { resources_to_steal_from << 'lumber' }
    victim.ore_count.times { resources_to_steal_from << 'ore' }
    victim.wool_count.times { resources_to_steal_from << 'wool' }

    stolen_resource = resources_to_steal_from.sample
    
    thief.increment(:"#{stolen_resource}_count", 1)
    thief.save
    victim.decrement(:"#{stolen_resource}_count", 1)
    victim.save
    render :index
  end

  def show
    @player = Player.find(params['player_id'])

    @played_cards = Card.where.not(played_at: nil)

    # authenticate_or_request_with_http_basic do |name, password|
    #   name == @player.name && password == @player.password
    # end
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
