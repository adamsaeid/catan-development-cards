Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/players/:player_id/draw', to: 'players#draw'

  get '/players/:player_id', to: 'player_app#show'
  post '/players/:player_id/play_card', to: 'players#play_card'
  get 'players/:player_id/resources', to: 'players#resources'
  
  get '/players', to: 'players#index'
  post '/players/give', to: 'players#give'

  post '/steal', to: 'players#steal'
  post '/trade', to: 'players#trade'
end
