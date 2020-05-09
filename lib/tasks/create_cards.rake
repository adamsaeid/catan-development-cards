task create_cards: :environment do
  Card.destroy_all
  Card.create(id: 1, image_url: 'https://miro.medium.com/max/1400/1*dH9-b8I3uOeSXVjsr5P2RA.jpeg')
  Card.create(id: 2, image_url: 'https://miro.medium.com/max/1400/1*Cb9BkAFiW_8tkaj4-kAz3g.jpeg')
  Card.create(id: 3, image_url: 'https://miro.medium.com/max/1400/1*vMcYA4HL58Cui3f-_1_p7g.jpeg')
  Card.create(id: 4, image_url: 'https://miro.medium.com/max/1400/1*CUcpK3BDp6nlwWSNd0Y9FQ.jpeg')
end
