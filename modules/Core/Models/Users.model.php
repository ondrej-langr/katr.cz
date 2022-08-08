<?php

use App\Database\Model;
use App\Database\ModelResult;

class Users extends Model
{
  protected string $tableName = 'users';
  protected bool $timestamps = false;
  protected bool $softDelete = false;
  protected bool $translations = false;

  public static array $tableColumns = [
    'id' => [
      'required' => false,
      'editable' => false,
      'unique' => true,
      'hide' => false,
      'translations' => false,
      'autoIncrement' => true,
      'title' => 'ID',
      'type' => 'number',
    ],

    'name' => [
      'required' => true,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'translations' => true,
      'title' => 'Name',
      'type' => 'string',
    ],

    'password' => [
      'required' => true,
      'editable' => true,
      'unique' => false,
      'hide' => true,
      'translations' => true,
      'title' => 'Password',
      'type' => 'password',
    ],

    'email' => [
      'required' => true,
      'editable' => true,
      'unique' => true,
      'hide' => false,
      'translations' => true,
      'title' => 'Email',
      'type' => 'string',
    ],

    'avatar' => [
      'required' => false,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'translations' => true,
      'title' => 'Avatar',
      'type' => 'string',
    ],

    'state' => [
      'required' => true,
      'editable' => false,
      'unique' => false,
      'hide' => false,
      'translations' => true,
      'title' => 'State',
      'type' => 'enum',
      'enum' => ['active', 'invited', 'blocked', 'password-reset'],
    ],

    'role' => [
      'required' => true,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'translations' => true,
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

  static bool $ignoreSeeding = false;
  static string $modelIcon = 'Users';
  static $adminSettings = [
    'layout' => 'simple',
  ];

  public function getSummary()
  {
    return (object) [
      'icon' => self::$modelIcon,
      'ignoreSeeding' => self::$ignoreSeeding,
      'admin' => self::$adminSettings,
      'tableName' => $this->getTableName(),
      'hasTimestamps' => $this->hasTimestamps(),
      'hasSoftDelete' => $this->hasSoftDelete(),
      'columns' => static::$tableColumns,
      'hasOrdering' => false,
      'isDraftable' => false,
      'isSharable' => false,
      'ownable' => false,
    ];
  }
}
