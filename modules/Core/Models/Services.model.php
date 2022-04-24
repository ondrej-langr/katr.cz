<?php

use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Str;

class Services extends Model
{
  protected $table = 'services';
  protected $modelIcon = 'Briefcase';
  public $timestamps = false;
  protected $hasSoftDeletes = false;
  protected $adminSettings = [
    'layout' => 'post-like',
  ];

  protected $casts = [
    'content' => 'array',

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
      'isDraftable' => false,
      'hasPermissions' => true,
      'admin' => $this->adminSettings,
    ];
  }
}
