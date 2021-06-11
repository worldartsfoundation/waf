class CreateArchiveItems < ActiveRecord::Migration[6.1]
  def change
    create_table :archive_items do |t|
      t.string :title
      t.string :medium
      t.integer :year
      t.string :location
      t.string :credit

      t.timestamps
    end
  end
end
