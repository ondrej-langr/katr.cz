<?php

use Illuminate\Database\Eloquent\Model;


class Positions extends Model
{
  

  protected $table = 'positions';
  protected $modelIcon = 'AcademicCapIcon';
  public $timestamps = false;
  protected $hasSoftDeletes = false;
  protected $adminSettings = [
    "layout" => "post-like"
  ];
  
  
    protected $casts = [
      
        'content' => 'array',
       
    ];
  


  protected $tableColumns = [
    
       'id' => [
          'title' => 'ID', 'type' => 'number', 'editable' => false, 'autoIncrement' => true
        ],
    
       'descriptions' => [
          'required' => false, 'editable' => true, 'unique' => false, 'hide' => false, 'type' => 'longText', 'title' => 'Popisek'
        ],
    
       'seoDescription' => [
          'required' => false, 'editable' => true, 'unique' => false, 'hide' => false, 'type' => 'longText', 'title' => 'SEO Popisek'
        ],
    
       'title' => [
          'required' => true, 'editable' => true, 'unique' => false, 'hide' => false, 'title' => 'Title', 'type' => 'string'
        ],
    
       'content' => [
          'required' => true, 'editable' => true, 'unique' => false, 'hide' => false, 'title' => 'Content', 'type' => 'json'
        ],
    
  ];

  
  protected $fillable = [
    'id', 'descriptions', 'seoDescription', 'title', 'content'
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