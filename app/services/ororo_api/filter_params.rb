module OroroApi
  class FilterParams
    def self.do(params, is_client_params: false)
      {}.tap do |filtered_params|
        filtered_params[:genres] = params['genres'] || nil
        filtered_params[:order] = params['order'] || nil
        filtered_params[:query] = params['query'] if is_client_params
      end
    end
  end
end
