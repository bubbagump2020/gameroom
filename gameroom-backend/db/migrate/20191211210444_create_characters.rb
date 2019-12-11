class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.belongs_to :user, foreign_key: true
      t.string :character_name
      t.integer :character_level
      t.string :character_race
      t.string :character_class

      t.timestamps
    end
  end
end
