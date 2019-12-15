class User < ApplicationRecord
    validates :username, uniqueness: true, presence: true
    validates :username, length: { minimum: 5 }
    validates :password, length: { in: 6..20 }
    validates :email, presence: true, uniqueness: true
    validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
    has_secure_password
    has_many :characters
end
