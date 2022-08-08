<?php

use App\Database\Model;
use App\Database\ModelResult;

class Contacts extends Model
{
  protected string $tableName = 'contacts';
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

    'position' => [
      'required' => true,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'translations' => true,
      'type' => 'string',
      'title' => 'Pozice',
    ],

    'category' => [
      'required' => true,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'translations' => false,
      'multiple' => false,
      'foreignKey' => 'id',
      'fill' => false,
      'type' => 'relationship',
      'labelConstructor' => 'name',
      'targetModel' => 'contactPositions',
      'title' => 'Kategorie',
    ],

    'name' => [
      'required' => true,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'translations' => true,
      'type' => 'string',
      'title' => 'Jméno',
    ],

    'first_telephone' => [
      'required' => false,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'translations' => false,
      'type' => 'string',
      'title' => 'Telefon',
    ],

    'second_telephone' => [
      'required' => false,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'translations' => false,
      'type' => 'string',
      'title' => 'Druhý telefon',
    ],

    'email' => [
      'required' => false,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'translations' => true,
      'type' => 'string',
      'title' => 'Email',
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
  static string $modelIcon = 'Phone';
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
      'isSharable' => true,
      'ownable' => true,
    ];
  }
}
