<?php

use Illuminate\Database\Eloquent\Model;

class Contacts extends Model
{
  protected $table = 'contacts';
  protected $modelIcon = 'Phone';
  public $timestamps = false;
  protected $hasSoftDeletes = false;
  protected $ignoreSeeding = false;
  protected $adminSettings = [
    'layout' => 'simple',
  ];

  protected $casts = [
    'coeditors' => 'array',
  ];

  protected $fillable = [
    'id',
    'position',
    'category',
    'name',
    'first_telephone',
    'second_telephone',
    'email',
    'coeditors',
    'created_by',
    'updated_by',
  ];

  public function category()
  {
    return $this->belongsTo(\Contact_positions::class, 'category', 'id');
  }

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

    'position' => [
      'required' => true,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'type' => 'string',
      'title' => 'Pozice',
    ],

    'category' => [
      'required' => true,
      'editable' => true,
      'unique' => false,
      'hide' => false,
      'multiple' => false,
      'foreignKey' => 'id',
      'fill' => false,
      'type' => 'relationship',
      'labelConstructor' => 'name',
      'targetModel' => 'contact_positions',
      'title' => 'Kategorie',
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
