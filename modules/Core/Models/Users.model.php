<?php

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
  protected $table = 'users';
  protected $modelIcon = 'Users';
  public $timestamps = false;
  protected $hasSoftDeletes = false;
  protected $adminSettings = [
    'layout' => 'simple',
  ];

  protected static $tableColumns = [
    'id' => [
      'required' => false,
      'editable' => false,
      'unique' => true,
      'hide' => false,
      'autoIncrement' => true,
      'title' => 'ID',
      'type' => 'number',
    ],

    'name' => [
      'required' => true,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'title' => 'Name',
      'type' => 'string',
    ],

    'password' => [
      'required' => true,
      'editable' => true,
      'unique' => false,
      'hide' => true,
      'title' => 'Password',
      'type' => 'password',
    ],

    'email' => [
      'required' => true,
      'editable' => true,
      'unique' => true,
      'hide' => false,
      'title' => 'Email',
      'type' => 'string',
    ],

    'avatar' => [
      'required' => false,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'title' => 'Avatar',
      'type' => 'string',
    ],

    'role' => [
      'required' => true,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'title' => 'Role',
      'type' => 'enum',
      'enum' => ['Admin', 'Maintainer', 'Editor'],
    ],

    'state' => [
      'required' => true,
      'editable' => false,
      'unique' => false,
      'hide' => false,
      'title' => 'State',
      'type' => 'enum',
      'enum' => ['active', 'invited', 'blocked', 'password-reset'],
    ],
  ];

  protected $fillable = [
    'id',
    'name',
    'password',
    'email',
    'avatar',
    'role',
    'state',
  ];

  protected $hidden = ['password'];

  public function getSummary()
  {
    return (object) [
      'columns' => self::$tableColumns,
      'tableName' => $this->table,
      'icon' => $this->modelIcon,
      'hasTimestamps' => $this->timestamps,
      'hasSoftDelete' => $this->hasSoftDeletes,
      'hasOrdering' => false,
      'isDraftable' => false,
      'hasPermissions' => false,
      'admin' => $this->adminSettings,
    ];
  }
}
