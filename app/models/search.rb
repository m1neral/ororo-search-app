class Search < ApplicationRecord
  belongs_to :client_log, optional: true
  belongs_to :server_log, optional: true
end
