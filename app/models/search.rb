class Search < ApplicationRecord
  # logs are optional, but one of the two must be
  belongs_to :client_log, optional: true
  belongs_to :server_log, optional: true

  validates :results_count, presence: true
  validate :client_log_or_server_log

  private

  def client_log_or_server_log
    unless (client_log && client_log.valid?) || (server_log && server_log.valid?)
      errors.add(:base, 'One of the logs must exist and valid')
    end
  end
end
