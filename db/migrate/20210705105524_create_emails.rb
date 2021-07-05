class CreateEmails < ActiveRecord::Migration[6.1]
  def change
    create_table :emails do |t|
      t.string :name
      t.string :phone
      t.string :mail
      t.text :message

      t.timestamps
    end
  end
end
