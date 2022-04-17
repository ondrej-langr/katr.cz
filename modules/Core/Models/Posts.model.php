<?php

use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
  protected $table = 'posts';
  protected $modelIcon = 'Archive';
  public $timestamps = true;
  protected $hasSoftDeletes = false;
  protected $adminSettings = [
    'layout' => 'post-like',
  ];

  protected $casts = [
    'content' => 'array',
  ];

  protected $tableColumns = [
    'id' => [
      'title' => 'ID',
      'type' => 'number',
      'editable' => false,
      'autoIncrement' => true,
    ],

    'title' => [
      'required' => true,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'title' => 'Title',
      'type' => 'string',
    ],

    'content' => [
      'required' => true,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'title' => 'Content',
      'type' => 'json',
    ],

    'description' => [
      'required' => false,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'type' => 'longText',
      'title' => 'Popisek',
    ],
  ];

  protected $fillable = ['id', 'title', 'content', 'description'];

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
