<?php

use App\Database\Model;
use App\Database\ModelResult;
use Illuminate\Support\Str;

class ContactPositions extends Model
{
  protected string $tableName = 'contactPositions';
  protected bool $timestamps = false;
  protected bool $softDelete = false;
  protected bool $translations = true;

  public static array $casts = [
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

    'name' => [
      'required' => true,
      'editable' => true,
      'unique' => true,
      'hide' => false,
      'translations' => true,
      'type' => 'string',
      'title' => 'Název',
    ],

    'slug' => [
      'required' => false,
      'editable' => false,
      'unique' => true,
      'hide' => false,
      'translations' => true,
      'type' => 'slug',
      'of' => 'name',
      'title' => 'Slug',
      'adminHidden' => true,
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
  static string $modelIcon = 'Speakerphone';
  static $adminSettings = [
    'layout' => 'simple',
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
      'isDraftable' => false,
      'isSharable' => true,
      'ownable' => true,
    ];
  }
}
