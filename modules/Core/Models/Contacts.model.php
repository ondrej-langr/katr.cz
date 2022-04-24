<?php

use Illuminate\Database\Eloquent\Model;

class Contacts extends Model
{
  protected $table = 'contacts';
  protected $modelIcon = 'Phone';
  public $timestamps = false;
  protected $hasSoftDeletes = false;
  protected $adminSettings = [
    'layout' => 'simple',
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

    'position' => [
      'required' => true,
      'editable' => true,
      'unique' => true,
      'hide' => false,
      'type' => 'string',
      'title' => 'Pozice',
    ],

    'category' => [
      'required' => true,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'type' => 'enum',
      'title' => 'Kategorie',
      'enum' => [
        'Úřední společnost',
        'Účtárna',
        'Obchod',
        'Venkovní provozy',
        'Lesní výroba',
        'Servis',
        'Doprava',
        'Ostatní',
      ],
    ],

    'name' => [
      'required' => true,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'type' => 'string',
      'title' => 'Jméno',
    ],

    'first_telephone' => [
      'required' => false,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'type' => 'string',
      'title' => 'Telefon',
    ],

    'second_telephone' => [
      'required' => false,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'type' => 'string',
      'title' => 'Druhý telefon',
    ],

    'email' => [
      'required' => false,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'type' => 'string',
      'title' => 'Email',
    ],
  ];

  protected $fillable = [
    'id',
    'position',
    'category',
    'name',
    'first_telephone',
    'second_telephone',
    'email',
  ];

  public function getSummary()
  {
    return (object) [
      'columns' => self::$tableColumns,
      'tableName' => $this->table,
      'icon' => $this->modelIcon,
      'hasTimestamps' => $this->timestamps,
      'hasSoftDelete' => $this->hasSoftDeletes,
      'hasOrdering' => false,
      'isDraftable' => false,
      'hasPermissions' => false,
      'admin' => $this->adminSettings,
    ];
  }
}
