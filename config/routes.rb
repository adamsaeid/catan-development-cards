Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/players/:player_id/draw', to: 'players#draw'

  get '/players/:player_id', to: 'players#show'
  get '/players', to: 'players#index'
end
