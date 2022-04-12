<?php

use Illuminate\Database\Eloquent\Model;


class Users extends Model
{
  

  protected $table = 'users';
  protected $modelIcon = 'UserGroupIcon';
  public $timestamps = false;
  protected $hasSoftDeletes = false;
  protected $adminSettings = [
    "layout" => "simple"
  ];
  
  


  protected $tableColumns = [
    
       'id' => [
          'title' => 'ID', 'type' => 'number', 'editable' => false, 'autoIncrement' => true
        ],
    
       'name' => [
          'required' => true, 'editable' => true, 'unique' => false, 'hide' => false, 'title' => 'Name', 'type' => 'string'
        ],
    
       'password' => [
          'required' => true, 'editable' => true, 'unique' => false, 'hide' => true, 'title' => 'Password', 'type' => 'password'
        ],
    
       'email' => [
          'required' => true, 'editable' => true, 'unique' => true, 'hide' => false, 'title' => 'Email', 'type' => 'string'
        ],
    
       'avatar' => [
          'required' => false, 'editable' => true, 'unique' => false, 'hide' => false, 'title' => 'Avatar', 'type' => 'string'
        ],
    
       'role' => [
          'required' => true, 'editable' => true, 'unique' => false, 'hide' => false, 'title' => 'Role', 'type' => 'enum', 'enum' => ['Admin', 'Maintainer', 'Editor']
        ],
    
  ];

  
  protected $fillable = [
    'id', 'name', 'password', 'email', 'avatar', 'role'
  ];

  
  
  protected $hidden = [
    'password'
  ];
  

  public function getSummary () {
      return (object)[
        "columns" => $this->tableColumns,
        "tableName" => $this->table,
        "icon" => $this->modelIcon,
        "hasTimestamps" => $this->timestamps,
        "hasSoftDelete" => $this->hasSoftDeletes,
        "admin" => $this->adminSettings
      ];
  }
}