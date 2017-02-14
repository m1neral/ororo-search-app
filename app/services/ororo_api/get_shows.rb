module OroroApi
  class GetShows
    attr_reader :params

    SHOWS_API = {
      GET_SHOWS: 'https://ororo.tv/api/frontend/shows'
    }

    def initialize(params)
      @params = {
        genres: params['genres'] || nil,
        order: params['order'] || nil
      }
    end

    def perform
      uri = URI(SHOWS_API[:GET_SHOWS])
      uri.query = params.to_query

      Net::HTTP.get(uri)
    end
  end
end
