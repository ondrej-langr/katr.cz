<?php

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Pages extends Model
{
  use SoftDeletes;

  protected $table = 'pages';
  protected $modelIcon = 'Notebook';
  public $timestamps = true;
  protected $hasSoftDeletes = true;
  protected $adminSettings = [
    'layout' => 'post-like',
  ];

  protected $casts = [
    'content' => 'array',

    'is_published' => 'boolean',

    'permissions' => 'array',
  ];

  /**
   * Takes care of events
   */
  public static function boot()
  {
    parent::boot();

    static::created(function ($entry) {
      $entry->order = $entry->id;
      $entry->save();
    });

    static::saving(function ($entry) {
      // Take care of slugs
      foreach (
        array_filter(self::$tableColumns, function ($col) {
          return $col['type'] === 'slug';
        })
        as $colKey => $col
      ) {
        if ($entry->{$col['of']}) {
          $entry->{$colKey} = Str::slug($entry->{$col['of']});
        }
      }
    });
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

    'slug' => [
      'required' => false,
      'editable' => false,
      'unique' => true,
      'hide' => false,
      'title' => 'Zkratka',
      'type' => 'slug',
      'of' => 'title',
    ],

    'excerpt' => [
      'required' => false,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'type' => 'longText',
      'title' => 'Krátký popisek',
    ],

    'description' => [
      'required' => false,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'type' => 'longText',
      'title' => 'Popisek',
    ],

    'is_published' => [
      'required' => false,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'title' => 'Is published',
      'type' => 'boolean',
    ],

    'order' => [
      'required' => false,
      'editable' => false,
      'unique' => false,
      'hide' => false,
      'autoIncrement' => true,
      'title' => 'Order',
      'type' => 'number',
      'adminHidden' => true,
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

  protected $fillable = [
    'id',
    'title',
    'content',
    'slug',
    'excerpt',
    'description',
    'is_published',
    'order',
    'permissions',
  ];

  public function getSummary()
  {
    return (object) [
      'columns' => self::$tableColumns,
      'tableName' => $this->table,
      'icon' => $this->modelIcon,
      'hasTimestamps' => $this->timestamps,
      'hasSoftDelete' => $this->hasSoftDeletes,
      'hasOrdering' => true,
      'isDraftable' => true,
      'hasPermissions' => true,
      'admin' => $this->adminSettings,
    ];
  }
}
