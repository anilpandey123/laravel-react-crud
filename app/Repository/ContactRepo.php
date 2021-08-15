<?php
namespace App\Repository;

use App\Models\contact;

class ContactRepo implements InterfaceRepo{
    protected $con;
    public function __construct(contact $con){
        $this->con=$con;
    }

    public function createAllData(array $attributes){
        $this->con->create($attributes);
    }

    public function getAllData(){
        $data = contact::orderBy('created_at','DESC')->get();
        return $data;
      }
    
      public function getById($id){
        return $this->con->find($id);
      }

      public function updataData($id,array $attributes){
        $update=$this->con->find($id)->update($attributes);
        return $update;
      }
      public function deleteData($id){
        $this->con->find($id)->delete();
      }
      

}