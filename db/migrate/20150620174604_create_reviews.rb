class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.references :user, null: false
      t.references :author, null: false
      t.integer :rating, null: false
      t.timestamps null: false
    end
  end
end
