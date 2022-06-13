<?php

use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
  protected $table = 'settings';
  protected $modelIcon = 'Settings';
  public $timestamps = false;
  protected $hasSoftDeletes = false;
  protected $ignoreSeeding = false;
  protected $adminSettings = [
    'layout' => 'simple',
  ];

  protected $casts = [
    'content' => 'array',

    'coeditors' => 'array',
  ];

  protected $fillable = [
    'id',
    'name',
    'label',
    'content',
    'coeditors',
    'created_by',
    'updated_by',
  ];

  public function created_by()
  {
    return $this->belongsTo(\User::class, 'created_by', 'id');
  }

  public function updated_by()
  {
    return $this->belongsTo(\User::class, 'updated_by', 'id');
  }

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
      'default' => '',
    ],

    'coeditors' => [
      'required' => false,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'title' => 'Coeditors',
      'type' => 'json',
      'default' => '',
    ],

    'created_by' => [
      'required' => false,
      'editable' => false,
      'unique' => false,
      'hide' => false,
      'multiple' => false,
      'foreignKey' => 'id',
      'fill' => false,
      'title' => 'Created by',
      'type' => 'relationship',
      'targetModel' => 'user',
      'labelConstructor' => 'name',
      'adminHidden' => true,
    ],

    'updated_by' => [
      'required' => false,
      'editable' => false,
      'unique' => false,
      'hide' => false,
      'multiple' => false,
      'foreignKey' => 'id',
      'fill' => false,
      'title' => 'Updated by',
      'type' => 'relationship',
      'targetModel' => 'user',
      'labelConstructor' => 'name',
      'adminHidden' => true,
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
      'isSharable' => true,
      'ownable' => true,
      'admin' => $this->adminSettings,
    ];
  }
}
