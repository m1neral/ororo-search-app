class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def filtered_params(permitted_params, is_client_params: false)
    if is_client_params
      permitted_params.to_h.symbolize_keys.slice(:query, :genres, :order)
    else
      permitted_params.to_h.symbolize_keys.slice(:genres, :order)
    end
  end
end
