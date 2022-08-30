<?php
namespace App\Database\Concerns;

trait Properties
{
  /**
   * Current config of table columns
   */
  static array $tableColumns = [];

  /**
   * Casts
   */
  static array $casts = [];

  /**
   * Default language
   */
  static string $defaultLanguage;

  /**
   * The name of table in database
   */
  protected string $tableName;

  /**
   * If current model has timestamps set
   */
  protected bool $timestamps = false;

  /**
   * If current model has soft delete enabled
   */
  protected bool $softDelete = false;

  /**
   * If current model has translations
   */
  protected bool $translations = true;

  /**
   * Getter of table name
   */
  public function getTableName(): string
  {
    return $this->tableName;
  }

  /**
   * Getter of all columns
   */
  public function getColumns(): array
  {
    return static::$tableColumns;
  }

  /**
   * Getter of all columns
   */
  public function hasTranslationsEnabled(): bool
  {
    return $this->translations;
  }

  /**
   * Getter of timestamps
   */
  public function hasTimestamps(): bool
  {
    return $this->timestamps;
  }

  /**
   * Getter of softDelete property
   */
  public function hasSoftDelete(): bool
  {
    return $this->softDelete;
  }

  public function getFieldKeys(): array
  {
    $keys = array_values(array_keys(static::$tableColumns));

    if ($this->hasTimestamps()) {
      $keys = array_merge($keys, ['created_at', 'updated_at']);
    }

    return $keys;
  }

  /**
   * Gets the name of unique fields
   */
  public static function getUniqueFields(): array
  {
    return array_values(
      array_filter(
        array_keys(
          array_filter(static::$tableColumns, function ($item) {
            return $item['unique'];
          })
        ),
        function ($itemKey) {
          return $itemKey !== 'id';
        }
      )
    );
  }

  public static function getHiddenFields()
  {
    return array_values(
      array_filter(
        array_keys(
          array_filter(static::$tableColumns, function ($item) {
            return $item['hide'];
          })
        ),
        function ($itemKey) {
          return $itemKey !== 'id';
        }
      )
    );
  }

  public function getInternationalizedFields(): array
  {
    $neutralFields = array_values(
      array_keys(
        array_filter(static::$tableColumns, function ($item) {
          return $item['translations'] === false;
        })
      )
    );

    if ($this->hasTimestamps()) {
      $neutralFields = array_merge($neutralFields, [
        'created_at',
        'updated_at',
      ]);
    }

    $intlFields = array_values(
      array_keys(
        array_filter(static::$tableColumns, function ($item) {
          return $item['translations'] === true;
        })
      )
    );

    return [$neutralFields, $intlFields];
  }

  public static function getCasts(): array
  {
    return static::$casts;
  }
}
