class User < ApplicationRecord
    validates :username, uniqueness: true, presence: true
    validates :password, length: { in: 6..20 }
    has_secure_password
    has_many :characters
end
