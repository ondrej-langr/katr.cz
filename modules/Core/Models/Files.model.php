<?php

use App\Database\Model;
use App\Database\ModelResult;

class Files extends Model
{
  protected string $tableName = 'files';
  protected bool $timestamps = true;
  protected bool $softDelete = false;
  protected bool $translations = false;

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

    'filename' => [
      'required' => true,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'translations' => true,
      'title' => 'Filename',
      'type' => 'string',
    ],

    'description' => [
      'required' => false,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'translations' => true,
      'title' => 'Description',
      'type' => 'string',
    ],

    'filepath' => [
      'required' => true,
      'editable' => false,
      'unique' => true,
      'hide' => false,
      'translations' => true,
      'title' => 'Filepath',
      'type' => 'string',
    ],

    'private' => [
      'required' => false,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'translations' => true,
      'title' => 'Is private',
      'type' => 'boolean',
    ],

    'mimeType' => [
      'required' => true,
      'editable' => false,
      'unique' => false,
      'hide' => false,
      'translations' => true,
      'title' => 'Mime type',
      'type' => 'string',
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

  static bool $ignoreSeeding = true;
  static string $modelIcon = 'Folder';
  static $adminSettings = [
    'layout' => 'simple',
  ];

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
      'isSharable' => false,
      'ownable' => true,
    ];
  }
}
