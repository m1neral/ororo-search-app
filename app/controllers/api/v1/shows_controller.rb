class  Api::V1::ShowsController < ApplicationController
  def index
    filtered_params = OroroApi::FilterParams.do(params.permit!.to_h)
    results = OroroApi::GetShows.new(filtered_params).perform
    results_count = results['shows'].count

    Logging::AddLog.new(filtered_params, results_count).perform

    render json: results.merge(Logging::GetInfo.do)
  end
end
