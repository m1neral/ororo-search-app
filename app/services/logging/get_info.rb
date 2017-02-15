module Logging
  class GetInfo
    def self.info
      {
        'searches_count': Search.all.count,
        'average_results_count': Search.average(:results_count).to_i
      }
    end

    def self.do
      info
    end
  end
end