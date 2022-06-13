<?php

use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Str;

class UserRoles extends Model
{
  protected $table = 'userroles';
  protected $modelIcon = 'UserExclamation';
  public $timestamps = false;
  protected $hasSoftDeletes = false;
  protected $ignoreSeeding = false;
  protected $adminSettings = [
    'layout' => 'simple',
  ];

  protected $casts = [
    'permissions' => 'array',

    'coeditors' => 'array',
  ];

  /**
   * Takes care of events
   */
  public static function boot()
  {
    parent::boot();

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

  protected $fillable = [
    'id',
    'label',
    'slug',
    'description',
    'permissions',
    'coeditors',
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

    'label' => [
      'required' => true,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'title' => 'Label',
      'type' => 'string',
    ],

    'slug' => [
      'required' => false,
      'editable' => false,
      'unique' => true,
      'hide' => false,
      'title' => 'Slug',
      'type' => 'slug',
      'of' => 'label',
    ],

    'description' => [
      'required' => false,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'type' => 'longText',
      'title' => 'Popisek',
    ],

    'permissions' => [
      'required' => false,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'title' => 'Permissions',
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
      'ownable' => false,
      'admin' => $this->adminSettings,
    ];
  }
}
