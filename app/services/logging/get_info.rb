module Logging
  class GetInfo
    def self.perform
      {
        searches_count: Search.all.count,
        average_results_count: Search.average(:results_count).to_i
      }
    end
  end
end