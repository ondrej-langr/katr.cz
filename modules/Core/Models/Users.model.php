<?php

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
  protected $table = 'users';
  protected $modelIcon = 'Users';
  public $timestamps = false;
  protected $hasSoftDeletes = false;
  protected $ignoreSeeding = false;
  protected $adminSettings = [
    'layout' => 'simple',
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
      'enum' => ['admin', 'maintainer', 'editor'],
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

  public function getSummary()
  {
    return (object) [
      'columns' => self::$tableColumns,
      'tableName' => $this->table,
      'icon' => $this->modelIcon,
      'ignoreSeeding' => $this->ignoreSeeding,
      'hasTimestamps' => $this->timestamps,
      'hasSoftDelete' => $this->hasSoftDeletes,
      'hasOrdering' => false,
      'isDraftable' => false,
      'hasPermissions' => false,
      'admin' => $this->adminSettings,
    ];
  }
}
