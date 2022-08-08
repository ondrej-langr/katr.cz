<?php

use App\Database\Model;
use App\Database\ModelResult;
use Illuminate\Support\Str;

class Posts extends Model
{
  protected string $tableName = 'posts';
  protected bool $timestamps = true;
  protected bool $softDelete = false;
  protected bool $translations = true;

  public static array $casts = [
    'content' => 'array',

    'coeditors' => 'array',
  ];

  public static array $tableColumns = [
    'id' => [
      'required' => false,
      'editable' => false,
      'unique' => true,
      'hide' => false,
      'translations' => false,
      'autoIncrement' => true,
      'title' => 'ID',
      'type' => 'number',
    ],

    'title' => [
      'required' => true,
      'editable' => true,
      'unique' => true,
      'hide' => false,
      'translations' => true,
      'title' => 'Title',
      'type' => 'string',
    ],

    'content' => [
      'required' => false,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'translations' => true,
      'title' => 'Content',
      'type' => 'json',
      'default' => '{}',
    ],

    'slug' => [
      'required' => false,
      'editable' => false,
      'unique' => true,
      'hide' => false,
      'translations' => true,
      'title' => 'Zkratka',
      'type' => 'slug',
      'of' => 'title',
    ],

    'description' => [
      'required' => false,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'translations' => true,
      'type' => 'longText',
      'title' => 'Popisek',
    ],

    'is_published' => [
      'required' => false,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'translations' => false,
      'title' => 'Is published',
      'type' => 'boolean',
    ],

    'order' => [
      'required' => false,
      'editable' => false,
      'unique' => false,
      'hide' => false,
      'translations' => false,
      'autoIncrement' => true,
      'title' => 'Order',
      'type' => 'number',
      'adminHidden' => true,
    ],

    'coeditors' => [
      'required' => false,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'translations' => false,
      'title' => 'Coeditors',
      'type' => 'json',
      'default' => '{}',
    ],

    'created_by' => [
      'required' => false,
      'editable' => false,
      'unique' => false,
      'hide' => false,
      'translations' => false,
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
      'translations' => false,
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

  static bool $ignoreSeeding = false;
  static string $modelIcon = 'Archive';
  static $adminSettings = [
    'layout' => 'post-like',
  ];

  public static function afterCreate(ModelResult $entry): ModelResult
  {
    $entry->update(['order' => $entry->id]);

    return $entry;
  }

  public static function beforeCreate($entry): array
  {
    foreach (
      array_filter(static::$tableColumns, function ($col) {
        return $col['type'] === 'slug';
      })
      as $colKey => $col
    ) {
      if ($entry[$col['of']]) {
        $entry[$colKey] = Str::slug($entry[$col['of']]);
      }
    }

    return $entry;
  }

  public function getSummary()
  {
    return (object) [
      'icon' => self::$modelIcon,
      'ignoreSeeding' => self::$ignoreSeeding,
      'admin' => self::$adminSettings,
      'tableName' => $this->getTableName(),
      'hasTimestamps' => $this->hasTimestamps(),
      'hasSoftDelete' => $this->hasSoftDelete(),
      'columns' => static::$tableColumns,
      'hasOrdering' => true,
      'isDraftable' => true,
      'isSharable' => true,
      'ownable' => true,
    ];
  }
}
