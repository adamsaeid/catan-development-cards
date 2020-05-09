Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/cards/draw', to: 'cards#draw'

  get '/players/:player_id', to: 'players#show'
end
