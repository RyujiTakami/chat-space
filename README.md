# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


## usersテーブル
|Column|Type|Opitons|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, unique: true|

### Association
- has_many :members
- has_many :groups,   :through  => members
- has_many :messeges, :through  => members

## groupsテーブル
|Column|Type|Opitons|
|------|----|-------|
|group_name|string|null: false, unique: true|

### Association
- has_many :members
- has_many :users,    :through => members
- has_many :messeges, :through => members


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
- belongs_to :member
