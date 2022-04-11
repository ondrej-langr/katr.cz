<?php

use Illuminate\Database\Eloquent\Model;


class Contacts extends Model
{
  

  protected $table = 'contacts';
  protected $modelIcon = 'DeviceMobileIcon';
  public $timestamps = false;
  protected $hasSoftDeletes = false;
  protected $adminSettings = [
    "layout" => "simple"
  ];
  
  


  protected $tableColumns = [
    
       'id' => [
          'title' => 'ID', 'type' => 'number', 'editable' => false, 'autoIncrement' => true
        ],
    
       'position' => [
          'required' => true, 'editable' => true, 'unique' => true, 'hide' => false, 'type' => 'string', 'title' => 'Pozice'
        ],
    
       'category' => [
          'required' => true, 'editable' => true, 'unique' => false, 'hide' => false, 'type' => 'enum', 'title' => 'Kategorie', 'enum' => ['Úřední společnost', 'Účtárna', 'Obchod', 'Venkovní provozy', 'Lesní výroba', 'Servis', 'Doprava', 'Ostatní']
        ],
    
       'name' => [
          'required' => true, 'editable' => true, 'unique' => false, 'hide' => false, 'type' => 'string', 'title' => 'Jméno'
        ],
    
       'first_telephone' => [
          'required' => true, 'editable' => true, 'unique' => false, 'hide' => false, 'type' => 'string', 'title' => 'Telefon'
        ],
    
       'second_telephone' => [
          'required' => true, 'editable' => true, 'unique' => false, 'hide' => false, 'type' => 'string', 'title' => 'Telefon'
        ],
    
       'email' => [
          'required' => true, 'editable' => true, 'unique' => false, 'hide' => false, 'type' => 'string', 'title' => 'Email'
        ],
    
  ];

  
  protected $fillable = [
    'id', 'position', 'category', 'name', 'first_telephone', 'second_telephone', 'email'
  ];

  
  

  public function getSummary () {
      return (object)[
        "columns" => $this->tableColumns,
        "tableName" => $this->table,
        "icon" => $this->modelIcon,
        "hasTimestamps" => $this->timestamps,
        "hasSoftDelete" => $this->hasSoftDeletes,
        "admin" => $this->adminSettings
      ];
  }
}