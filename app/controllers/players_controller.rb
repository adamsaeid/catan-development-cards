class PlayersController < ApplicationController
  before_action :setup, except: [:play_card]

  def draw
    drawn_card = Card.where(player_id: nil).sample
    drawn_card.update_attributes(player_id: params['player_id'])
    render :index
  end

  def show
    player = Player.find(params['player_id'])
    
    resources = {
      brick: player.brick_count,
      grain: player.grain_count,
      lumber: player.lumber_count,
      ore: player.ore_count,
      wool: player.wool_count
    }

    development_cards = Card.where(player_id: params['player_id']).where(played_at: nil)
    
    player_json = {
      resources: resources,
      development_cards: development_cards
    }.to_json
    
    render json: player_json
  end

  def play_card
    card = Card.find(params['card_id'])
    card.update_attributes(played_at: Time.now)
  end

  def give
    player = Player.find(params['give']['player_id'])

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
    
    setup_bank_resources
    render :index
  end

  def steal
    thief = Player.find(params['steal']['thief_id'])
    victim = Player.find(params['steal']['victim_id'])

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

  def trade
    player_1 = Player.find(params['trade']['player_1_id'])
    player_2 = Player.find(params['trade']['player_2_id'])

    from_player_1_results = [
      transfer_resource(player_1, player_2, 'brick', params['player_1_brick'].to_i),
      transfer_resource(player_1, player_2, 'grain', params['player_1_grain'].to_i),
      transfer_resource(player_1, player_2, 'lumber', params['player_1_lumber'].to_i),
      transfer_resource(player_1, player_2, 'ore', params['player_1_ore'].to_i),
      transfer_resource(player_1, player_2, 'wool', params['player_1_wool'].to_i)
    ]

    from_player_2_results = [
      transfer_resource(player_2, player_1, 'brick', params['player_2_brick'].to_i),
      transfer_resource(player_2, player_1, 'grain', params['player_2_grain'].to_i),
      transfer_resource(player_2, player_1, 'lumber', params['player_2_lumber'].to_i),
      transfer_resource(player_2, player_1, 'ore', params['player_2_ore'].to_i),
      transfer_resource(player_2, player_1, 'wool', params['player_2_wool'].to_i)
    ]

    messages = []

    if !from_player_1_results.all?
      flash.now.alert = "#{player_1.name} doesn't have enough of a resource"
    end

    if !from_player_2_results.all?
      flash.now.alert = "#{player_2.name} doesn't have enough of a resource"
    end

    if from_player_1_results.all? && from_player_2_results.all?
      player_1.save
      player_2.save
    end

    render :index
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

  def transfer_resource(from_player, to_player, resource, amount)
    return false if from_player.send("#{resource}_count") < amount
    from_player.decrement(:"#{resource}_count", amount)
    to_player.increment(:"#{resource}_count", amount)
    true
  end
end
