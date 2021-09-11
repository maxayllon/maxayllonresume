Rails.application.routes.draw do
  root to: 'resumes#resume'

  get "cv", to: "resumes#cv"
  get "cvenglish", to: "resumes#cvenglish"
  get "cvfr", to: "resumes#cvfr"

  resources :emails, only: [:create]
end
