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
    'state',
    'role',
  ];

  public function role()
  {
    return $this->belongsTo(\UserRoles::class, 'role', 'id');
  }

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

    'state' => [
      'required' => true,
      'editable' => false,
      'unique' => false,
      'hide' => false,
      'title' => 'State',
      'type' => 'enum',
      'enum' => ['active', 'invited', 'blocked', 'password-reset'],
    ],

    'role' => [
      'required' => true,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'multiple' => false,
      'foreignKey' => 'id',
      'fill' => false,
      'type' => 'relationship',
      'targetModel' => 'userRoles',
      'title' => 'Role',
      'adminHidden' => true,
      'labelConstructor' => 'label',
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
      'isSharable' => false,
      'ownable' => false,
      'admin' => $this->adminSettings,
    ];
  }
}
