<?php

use App\Database\Model;
use App\Database\ModelResult;
use Illuminate\Support\Str;

class UserRoles extends Model
{
  protected string $tableName = 'userroles';
  protected bool $timestamps = false;
  protected bool $softDelete = false;
  protected bool $translations = false;

  public static array $casts = [
    'permissions' => 'array',

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

    'label' => [
      'required' => true,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'translations' => true,
      'title' => 'Label',
      'type' => 'string',
    ],

    'slug' => [
      'required' => false,
      'editable' => false,
      'unique' => true,
      'hide' => false,
      'translations' => true,
      'title' => 'Slug',
      'type' => 'slug',
      'of' => 'label',
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

    'permissions' => [
      'required' => false,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'translations' => true,
      'title' => 'Permissions',
      'type' => 'json',
      'default' => '{}',
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
  ];

  static bool $ignoreSeeding = false;
  static string $modelIcon = 'UserExclamation';
  static $adminSettings = [
    'layout' => 'simple',
  ];

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
      'hasOrdering' => false,
      'isDraftable' => false,
      'isSharable' => true,
      'ownable' => false,
    ];
  }
}
