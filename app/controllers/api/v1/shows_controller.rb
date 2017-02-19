class  Api::V1::ShowsController < ApplicationController
  def index
    filtered_params = filtered_params(params.permit!)
    results = OroroApi::GetShows.new(filtered_params).perform
    results_count = results['shows'].count

    Logging::AddLog.new(filtered_params, results_count).perform

    render json: results.merge(Logging::GetInfo.perform)
  end
end
