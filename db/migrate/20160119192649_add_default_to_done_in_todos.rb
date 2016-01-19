class AddDefaultToDoneInTodos < ActiveRecord::Migration
  def change
    remove_column :todos, :done, :boolean
    add_column :todos, :done, :boolean, default: false
  end
end
