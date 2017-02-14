class  Api::V1::ShowsController < ApplicationController
  def index
    permited_params = params.permit!.to_h

    render json: OroroApi::GetShows.new(permited_params).perform
  end
end
