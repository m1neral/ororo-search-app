class Api::V1::ClientSearchQueriesController < ApplicationController
  protect_from_forgery prepend: true

  def create
    filtered_params = OroroApi::FilterParams.do(client_search_query_params, is_client_params: true)
    results_count = client_search_query_params[:results_count]

    Logging::AddLog.new(filtered_params, results_count, is_client_log: true).perform

    render json: Logging::GetInfo.do
  end

  private

  def client_search_query_params
    params.require(:client_search_query).permit(:results_count, :query, :order, genres: [])
  end
end
