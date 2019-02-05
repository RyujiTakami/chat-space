class CreateMesseges < ActiveRecord::Migration[5.0]
  def change
    create_table :messeges do |t|
      t.text        :body
      t.string      :image
      t.references  :user_id,  null: false, foreng_key: true
      t.references  :group_id, null: false, foreng_key: true

      t.timestamps
    end
  end
end
