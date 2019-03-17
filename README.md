## usersテーブル
|Column|Type|Opitons|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, unique: true|

### Association
- has_many :members
- has_many :groups,   through: :members
- has_many :messeges

## groupsテーブル
|Column|Type|Opitons|
|------|----|-------|
|name|string|null: false, unique: true|

### Association
- has_many :members
- has_many :users,    through: :members
- has_many :messeges


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreing_key: true|
|group_id|references|null: false, foreing_key: true|

### Association
- belongs_to :user
- belongs_to :group


## messegesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group_id|references|null: false, foreng_key: true|
|user_id|references|null: false, foring_key: true|

### Association
- belongs_to :user
- belongs_to :group

hello wpld!
