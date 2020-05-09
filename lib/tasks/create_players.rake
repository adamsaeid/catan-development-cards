task create_players: :environment do
  Player.destroy_all
  Player.create(id: 1, name: 'Adam', password: 'kitten')
  Player.create(id: 2, name: 'Sam', password: 'chicken')
  Player.create(id: 3, name: 'Lowell', password: 'lizard')
  Player.create(id: 4, name: 'Lauran', password: 'elephant')
end
