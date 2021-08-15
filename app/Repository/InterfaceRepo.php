<?php
namespace App\Repository;

interface InterfaceRepo{
    public function CreateAllData(array $attributes);
    public function getAllData();
    public function getById($id);
    public function updataData($id,array $attributes);
    public function deleteData($id);
}