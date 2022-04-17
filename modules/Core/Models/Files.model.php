<?php

use Illuminate\Database\Eloquent\Model;

class Files extends Model
{
  protected $table = 'files';
  protected $modelIcon = 'Folder';
  public $timestamps = true;
  protected $hasSoftDeletes = false;
  protected $adminSettings = [
    'layout' => 'simple',
  ];

  protected $tableColumns = [
    'id' => [
      'title' => 'ID',
      'type' => 'number',
      'editable' => false,
      'autoIncrement' => true,
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
  ];

  protected $fillable = [
    'id',
    'filename',
    'description',
    'filepath',
    'private',
  ];

  public function getSummary()
  {
    return (object) [
      'columns' => $this->tableColumns,
      'tableName' => $this->table,
      'icon' => $this->modelIcon,
      'hasTimestamps' => $this->timestamps,
      'hasSoftDelete' => $this->hasSoftDeletes,
      'admin' => $this->adminSettings,
    ];
  }
}
