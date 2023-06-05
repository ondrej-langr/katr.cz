<?php

use PromCMS\Core\Database\Model;
use PromCMS\Core\Database\SingletonModel;
use PromCMS\Core\Database\ModelResult;
use Illuminate\Support\Str;

class Pages extends Model
{
  protected string $tableName = 'pages';
  protected bool $softDelete = false;

  protected bool $timestamps = true;
  protected bool $translations = true;

  public static array $casts = [
    'content' => 'array',

    'coeditors' => 'array',
  ];

  public static array $tableColumns = [
    'id' => [
      'title' => 'ID',
      'hide' => false,
      'required' => false,
      'unique' => true,
      'editable' => false,
      'translations' => false,
      'admin' => ['isHidden' => false, 'editor' => ['placement' => 'main']],
      'type' => 'number',
      'autoIncrement' => true,
    ],

    'title' => [
      'title' => 'Title',
      'hide' => false,
      'required' => true,
      'unique' => true,
      'editable' => true,
      'translations' => true,
      'admin' => [
        'isHidden' => false,
        'editor' => ['placement' => 'main'],
        'fieldType' => 'heading',
      ],
      'type' => 'string',
    ],

    'content' => [
      'title' => 'Content',
      'hide' => false,
      'required' => false,
      'unique' => false,
      'editable' => true,
      'translations' => true,
      'admin' => [
        'isHidden' => false,
        'editor' => ['placement' => 'main'],
        'fieldType' => 'blockEditor',
      ],
      'type' => 'json',
    ],

    'slug' => [
      'title' => 'Slug',
      'hide' => false,
      'required' => false,
      'unique' => true,
      'editable' => false,
      'translations' => true,
      'admin' => ['isHidden' => false, 'editor' => ['placement' => 'main']],
      'type' => 'slug',
      'of' => 'title',
    ],

    'showInMenu' => [
      'title' => 'Zobrazit v menu',
      'hide' => false,
      'required' => false,
      'unique' => false,
      'editable' => true,
      'translations' => false,
      'admin' => ['isHidden' => false, 'editor' => ['placement' => 'aside']],
      'type' => 'boolean',
      'default' => false,
    ],

    'hero_image' => [
      'title' => 'Úvodní obrázek',
      'hide' => false,
      'required' => false,
      'unique' => false,
      'editable' => true,
      'translations' => false,
      'admin' => [
        'isHidden' => false,
        'editor' => ['placement' => 'aside'],
        'fieldType' => 'big-image',
      ],
      'type' => 'file',
      'multiple' => false,
      'typeFilter' => 'image',
    ],

    'excerpt' => [
      'title' => 'Krátký popisek',
      'hide' => false,
      'required' => false,
      'unique' => false,
      'editable' => true,
      'translations' => true,
      'admin' => ['isHidden' => false, 'editor' => ['placement' => 'aside']],
      'type' => 'longText',
    ],

    'description' => [
      'title' => 'Popisek',
      'hide' => false,
      'required' => false,
      'unique' => false,
      'editable' => true,
      'translations' => true,
      'admin' => ['isHidden' => false, 'editor' => ['placement' => 'aside']],
      'type' => 'longText',
    ],

    'is_published' => [
      'title' => 'Is published',
      'hide' => false,
      'required' => false,
      'unique' => false,
      'editable' => true,
      'translations' => false,
      'admin' => ['isHidden' => false, 'editor' => ['placement' => 'main']],
      'type' => 'boolean',
    ],

    'order' => [
      'title' => 'Order',
      'hide' => false,
      'required' => false,
      'unique' => false,
      'editable' => false,
      'translations' => false,
      'admin' => ['isHidden' => true, 'editor' => ['placement' => 'main']],
      'type' => 'number',
      'autoIncrement' => true,
    ],

    'coeditors' => [
      'title' => 'Coeditors',
      'hide' => false,
      'required' => false,
      'unique' => false,
      'editable' => true,
      'translations' => false,
      'admin' => [
        'isHidden' => false,
        'editor' => ['placement' => 'main'],
        'fieldType' => 'jsonEditor',
      ],
      'type' => 'json',
    ],

    'created_by' => [
      'title' => 'Created by',
      'hide' => false,
      'required' => false,
      'unique' => false,
      'editable' => false,
      'translations' => false,
      'admin' => ['isHidden' => true, 'editor' => ['placement' => 'main']],
      'type' => 'relationship',
      'targetModel' => 'user',
      'labelConstructor' => 'name',
      'multiple' => false,
      'fill' => false,
      'foreignKey' => 'id',
    ],

    'updated_by' => [
      'title' => 'Updated by',
      'hide' => false,
      'required' => false,
      'unique' => false,
      'editable' => false,
      'translations' => false,
      'admin' => ['isHidden' => true, 'editor' => ['placement' => 'main']],
      'type' => 'relationship',
      'targetModel' => 'user',
      'labelConstructor' => 'name',
      'multiple' => false,
      'fill' => false,
      'foreignKey' => 'id',
    ],
  ];

  static bool $ignoreSeeding = false;

  static string $title = 'Stránky';

  static string $modelIcon = 'Notebook';
  static $adminSettings = [];

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
      if (isset($entry[$col['of']]) && $entry[$col['of']]) {
        $entry[$colKey] = Str::slug($entry[$col['of']]);
      }
    }

    return $entry;
  }

  public function getSummary()
  {
    return (object) [
      'isSingleton' => $this instanceof SingletonModel,
      'tableName' => $this->getTableName(),
      'icon' => self::$modelIcon,
      'title' => isset(self::$title) ? self::$title : null,
      'ignoreSeeding' => self::$ignoreSeeding,
      'admin' => self::$adminSettings,
      'columns' => static::$tableColumns,
      'hasTimestamps' => $this->hasTimestamps(),
      'hasSoftDelete' => $this->hasSoftDelete(),
      'ownable' => true,
      'hasOrdering' => true,
      'isDraftable' => true,
      'isSharable' => true,
    ];
  }
}
