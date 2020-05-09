task create_players: :environment do
  Player.destroy_all
  Player.create(id: 1, name: 'Adam', password: 'password')
  Player.create(id: 2, name: 'Sam', password: 'password')
  Player.create(id: 3, name: 'Lowell', password: 'password')
  Player.create(id: 4, name: 'Lauran', password: 'password')
end
