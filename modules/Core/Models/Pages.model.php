<?php

use Illuminate\Database\Eloquent\Model;


class Pages extends Model
{
  

  protected $table = 'pages';
  protected $modelIcon = 'BookOpenIcon';
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
    
       'seoDescription' => [
          'required' => true, 'editable' => true, 'unique' => false, 'hide' => false, 'type' => 'longText', 'title' => 'SEO Description'
        ],
    
       'title' => [
          'required' => true, 'editable' => true, 'unique' => false, 'hide' => false, 'title' => 'Title', 'type' => 'string'
        ],
    
       'content' => [
          'required' => true, 'editable' => true, 'unique' => false, 'hide' => false, 'title' => 'Content', 'type' => 'json'
        ],
    
  ];

  
  protected $fillable = [
    'id', 'seoDescription', 'title', 'content'
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