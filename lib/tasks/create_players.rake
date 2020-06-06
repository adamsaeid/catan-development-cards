task create_players: :environment do
  Player.destroy_all
  Player.create(id: ENV['PLAYER_1_ID'], name: 'Adam', password: 'kitten', ore_count: 0, lumber_count: 0, wool_count: 0, grain_count: 0, brick_count: 0)
  Player.create(id: ENV['PLAYER_2_ID'], name: 'Sam', password: 'chicken', ore_count: 0, lumber_count: 0, wool_count: 0, grain_count: 0, brick_count: 0)
  Player.create(id: ENV['PLAYER_3_ID'], name: 'Lowell', password: 'lizard', ore_count: 0, lumber_count: 0, wool_count: 0, grain_count: 0, brick_count: 0)
  Player.create(id: ENV['PLAYER_4_ID'], name: 'Lauran', password: 'elephant', ore_count: 0, lumber_count: 0, wool_count: 0, grain_count: 0, brick_count: 0)
end
