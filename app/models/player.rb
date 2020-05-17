class Player < ApplicationRecord
  has_many :cards
  
  def hand_size
    brick_count + grain_count + lumber_count + ore_count + wool_count
  end

  def valid_resource_change?(brick_change, grain_change, lumber_change, ore_change, wool_change)
    new_brick_count = brick_count + brick_change
    new_grain_count = grain_count + grain_change
    new_lumber_count = lumber_count + lumber_change
    new_ore_count = ore_count + ore_change
    new_wool_count = wool_count + wool_change

    [
      new_brick_count,
      new_grain_count,
      new_lumber_count,
      new_ore_count,
      new_wool_count
    ].all? { |count| count >= 0 }
  end

  def knight_count
    cards.where(player_id: id).where.not(played_at: nil).count
  end
end
