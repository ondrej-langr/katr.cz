<?php

use Illuminate\Database\Eloquent\Model;


class Posts extends Model
{
  

  protected $table = 'posts';
  protected $modelIcon = 'ArchiveIcon';
  public $timestamps = true;
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
    
       'description' => [
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
    'id', 'description', 'seoDescription', 'title', 'content'
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