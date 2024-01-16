<?php


namespace App\DTO;

class StockDTO
{
    public $productName;
    public $description;
    public $id;
    public $size;
    public $price;
    public $kitsType;
    public $imageList;
    public $team_id;
    public $timestamps;
    
    

    public function __construct($productName, $description, $id, $size, $price, $kitsType, $imageList, $team_id, $timestamps)
    {
        $this->productName = $productName;
        $this->description = $description;
        $this->id = $id;
        $this->size = $size;
        $this->price = $price;
        $this->kitsType = $kitsType;
        $this->imageList = $imageList;
        $this->team_id = $team_id;
        $this->timestamps = $timestamps;
        

    }
}