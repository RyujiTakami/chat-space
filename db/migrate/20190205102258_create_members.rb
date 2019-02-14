class CreateMembers < ActiveRecord::Migration[5.0]
  def change
    create_table :members do |t|
      t.references      :user,  null: false, foreing_key: true
      t.references      :group, null: false, foreing_key: true

      t.timestamps
    end
  end
end
