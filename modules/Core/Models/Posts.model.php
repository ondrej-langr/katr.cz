<?php

use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Str;

class Posts extends Model
{
  protected $table = 'posts';
  protected $modelIcon = 'Archive';
  public $timestamps = true;
  protected $hasSoftDeletes = false;
  protected $ignoreSeeding = false;
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

  public function scopeOnlyPublished($query)
  {
    return $query->where('is_published', 1);
  }

  protected $fillable = [
    'id',
    'title',
    'content',
    'slug',
    'description',
    'is_published',
    'order',
    'permissions',
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

    'title' => [
      'required' => true,
      'editable' => true,
      'unique' => true,
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
      'default' => '',
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
      'default' => '',
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
      'hasOrdering' => true,
      'isDraftable' => true,
      'hasPermissions' => true,
      'admin' => $this->adminSettings,
    ];
  }
}
