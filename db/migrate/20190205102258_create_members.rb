class CreateMembers < ActiveRecord::Migration[5.0]
  def change
    create_table :members do |t|
      t.references      :user_id,  null: false, foreing_key: true
      t.references      :group_id, null: false, foreing_key: true

      t.timestamps
    end
  end
end