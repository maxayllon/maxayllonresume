Rails.application.routes.draw do
  root to: 'resumes#resume'

  get "cv", to: "resumes#cv"

  resources :emails, only: [:create]
end
