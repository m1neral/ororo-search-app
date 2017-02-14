module Logging
  class AddLog
    attr_reader :params, :results_count, :is_client_log

    def initialize(params, results_count, is_client_log: false)
      @params = params
      @results_count = results_count
      @is_client_log = is_client_log
    end

    def perform
      log = {}.tap do |log|
        if is_client_log
          log[:client_log] = ClientLog.new(params)
        else
          log[:server_log] = ServerLog.new(params)
        end
      end
      search = Search.new(results_count: results_count, **log)

      search.save
    end
  end
end
