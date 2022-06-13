<?php

use Illuminate\Database\Eloquent\Model;

class Files extends Model
{
  protected $table = 'files';
  protected $modelIcon = 'Folder';
  public $timestamps = true;
  protected $hasSoftDeletes = false;
  protected $ignoreSeeding = true;
  protected $adminSettings = [
    'layout' => 'simple',
  ];

  protected $casts = [
    'private' => 'boolean',
  ];

  protected $appends = ['path'];

  public function getPathAttribute()
  {
    return (PROM_URL_BASE ?? '') .
      "/api/entry-types/files/items/{$this->id}/raw";
  }

  protected $fillable = [
    'id',
    'filename',
    'description',
    'filepath',
    'private',
    'mimeType',
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

    'filename' => [
      'required' => true,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'title' => 'Filename',
      'type' => 'string',
    ],

    'description' => [
      'required' => false,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'title' => 'Description',
      'type' => 'string',
    ],

    'filepath' => [
      'required' => true,
      'editable' => false,
      'unique' => true,
      'hide' => false,
      'title' => 'Filepath',
      'type' => 'string',
    ],

    'private' => [
      'required' => true,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'title' => 'Is private',
      'type' => 'boolean',
    ],

    'mimeType' => [
      'required' => true,
      'editable' => false,
      'unique' => false,
      'hide' => false,
      'title' => 'Mime type',
      'type' => 'string',
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
      'isSharable' => false,
      'ownable' => true,
      'admin' => $this->adminSettings,
    ];
  }
}
