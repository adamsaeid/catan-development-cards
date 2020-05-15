task create_players: :environment do
  Player.destroy_all
  Player.create(id: 1, name: 'Adam', password: 'kitten', ore_count: 0, lumber_count: 0, wool_count: 0, grain_count: 0, brick_count: 0)
  Player.create(id: 2, name: 'Sam', password: 'chicken', ore_count: 0, lumber_count: 0, wool_count: 0, grain_count: 0, brick_count: 0)
  Player.create(id: 3, name: 'Lowell', password: 'lizard', ore_count: 0, lumber_count: 0, wool_count: 0, grain_count: 0, brick_count: 0)
  Player.create(id: 4, name: 'Lauran', password: 'elephant', ore_count: 0, lumber_count: 0, wool_count: 0, grain_count: 0, brick_count: 0)
end
