class ClientLog < ApplicationRecord
  validates :query, presence: true
end
