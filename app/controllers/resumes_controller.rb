class ResumesController < ApplicationController
  def resume
    @email = Email.new
  end

  def cv
    @email = Email.new
  end

  def cvenglish
  end

  def cvfr
  end
end
