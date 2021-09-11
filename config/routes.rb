Rails.application.routes.draw do
  root to: 'resumes#resume'

  get "cv", to: "resumes#cv"
  get "cvenglish", to: "resumes#cvenglish"

  resources :emails, only: [:create]
end
