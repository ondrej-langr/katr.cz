<?php

use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Str;

class Contact_positions extends Model
{
  protected $table = 'contact_positions';
  protected $modelIcon = 'Speakerphone';
  public $timestamps = false;
  protected $hasSoftDeletes = false;
  protected $ignoreSeeding = false;
  protected $adminSettings = [
    'layout' => 'simple',
  ];

  protected $casts = [
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
    'name',
    'slug',
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
      'type' => 'string',
      'title' => 'Název',
    ],

    'slug' => [
      'required' => true,
      'editable' => false,
      'unique' => true,
      'hide' => false,
      'type' => 'slug',
      'of' => 'name',
      'title' => 'Slug',
      'adminHidden' => true,
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
