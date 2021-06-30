Rails.application.routes.draw do
  root to: 'resumes#resume'

  get "cv", to: "resumes#cv"
end
