require 'net/http'
require 'json'

class GetGenres
  attr_reader :shows

  SHOWS_URL = 'https://ororo.tv/api/frontend/shows'

  def initialize
    @shows = get_shows
  end

  def do
    get_separated_genres
  end

  private

  def get_shows
    uri = URI(SHOWS_URL)
    response = Net::HTTP.get(uri)

    JSON.parse(response)['shows']
  end

  def get_separated_genres
    shows.reduce([]) { |acc, show| acc | show['array_genres'] }
  end
end