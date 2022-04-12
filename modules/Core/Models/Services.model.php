<?php

use Illuminate\Database\Eloquent\Model;


class Services extends Model
{
  

  protected $table = 'services';
  protected $modelIcon = 'BriefcaseIcon';
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
    
       'title' => [
          'required' => true, 'editable' => true, 'unique' => false, 'hide' => false, 'title' => 'Title', 'type' => 'string'
        ],
    
       'content' => [
          'required' => true, 'editable' => true, 'unique' => false, 'hide' => false, 'title' => 'Content', 'type' => 'json'
        ],
    
  ];

  
  protected $fillable = [
    'id', 'descriptions', 'title', 'content'
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