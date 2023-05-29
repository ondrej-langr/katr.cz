<?php

use PromCMS\Core\Database\Model;
use PromCMS\Core\Database\SingletonModel;
use PromCMS\Core\Database\ModelResult;

class Dotations extends Model
{
  protected string $tableName = 'dotations';
  protected bool $softDelete = false;

  protected bool $timestamps = false;
  protected bool $translations = true;

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

    'date' => [
      'title' => 'Datum',
      'hide' => false,
      'required' => true,
      'unique' => true,
      'editable' => true,
      'translations' => true,
      'admin' => [
        'isHidden' => false,
        'editor' => ['placement' => 'main'],
        'fieldType' => 'normal',
      ],
      'type' => 'string',
    ],

    'title' => [
      'title' => 'Pozice',
      'hide' => false,
      'required' => true,
      'unique' => true,
      'editable' => true,
      'translations' => true,
      'admin' => [
        'isHidden' => false,
        'editor' => ['placement' => 'main'],
        'fieldType' => 'normal',
      ],
      'type' => 'string',
    ],

    'file' => [
      'title' => 'Soubor',
      'hide' => false,
      'required' => false,
      'unique' => false,
      'editable' => true,
      'translations' => false,
      'admin' => [
        'isHidden' => true,
        'editor' => ['placement' => 'main'],
        'fieldType' => 'normal',
      ],
      'type' => 'file',
      'multiple' => false,
    ],

    'openInNewTab' => [
      'title' => 'Otevřít soubor v novém okně',
      'hide' => false,
      'required' => false,
      'unique' => false,
      'editable' => true,
      'translations' => true,
      'admin' => ['isHidden' => false, 'editor' => ['placement' => 'main']],
      'type' => 'boolean',
      'default' => false,
    ],
  ];

  static bool $ignoreSeeding = false;

  static string $title = 'Dotace';

  static string $modelIcon = 'ReportMoney';
  static $adminSettings = [];

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
      'hasOrdering' => false,
      'isDraftable' => false,
      'isSharable' => true,
    ];
  }
}
