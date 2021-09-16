class CreateMaps < ActiveRecord::Migration[5.2]
  def change
    create_table :maps do |t|
      t.string :title,null: false
      t.string :name,null: false
      t.text :body, null: false
      t.jsonb :jsonb_data,null: false

      t.timestamps
    end
  end
end
