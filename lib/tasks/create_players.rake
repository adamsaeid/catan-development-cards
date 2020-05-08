task create_players: :environment do
  Player.create(id: 1)
  Player.create(id: 2)
  Player.create(id: 3)
  Player.create(id: 4)
end
