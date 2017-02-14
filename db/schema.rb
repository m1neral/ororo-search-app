# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170213202713) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "client_logs", force: :cascade do |t|
    t.string   "query"
    t.string   "order"
    t.string   "genres",                  array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "searches", force: :cascade do |t|
    t.integer  "server_log_id"
    t.integer  "client_log_id"
    t.integer  "results_count"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["client_log_id"], name: "index_searches_on_client_log_id", using: :btree
    t.index ["server_log_id"], name: "index_searches_on_server_log_id", using: :btree
  end

  create_table "server_logs", force: :cascade do |t|
    t.string   "order"
    t.string   "genres",                  array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "searches", "client_logs"
  add_foreign_key "searches", "server_logs"
end
