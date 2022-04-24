<?php

use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
  protected $table = 'settings';
  protected $modelIcon = 'Settings';
  public $timestamps = false;
  protected $hasSoftDeletes = false;
  protected $adminSettings = [
    'layout' => 'simple',
  ];

  protected $casts = [
    'content' => 'array',

    'permissions' => 'array',
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
      'unique' => true,
      'hide' => false,
      'title' => 'Name',
      'type' => 'string',
    ],

    'label' => [
      'required' => true,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'title' => 'Label',
      'type' => 'string',
    ],

    'content' => [
      'required' => true,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'title' => 'content',
      'type' => 'json',
    ],

    'permissions' => [
      'required' => false,
      'editable' => false,
      'unique' => false,
      'hide' => false,
      'title' => 'permissions',
      'type' => 'json',
    ],
  ];

  protected $fillable = ['id', 'name', 'label', 'content', 'permissions'];

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
      'hasPermissions' => true,
      'admin' => $this->adminSettings,
    ];
  }
}
