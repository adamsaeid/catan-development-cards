class Player < ApplicationRecord
  has_many :cards
  
  def hand_size
    brick_count + grain_count + lumber_count + ore_count + wool_count
  end
end
