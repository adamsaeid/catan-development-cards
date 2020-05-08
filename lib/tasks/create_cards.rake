task create_cards: :environment do
  Card.destroy_all
  Card.create(id: 1)
  Card.create(id: 2)
  Card.create(id: 3)
  Card.create(id: 4)
end
