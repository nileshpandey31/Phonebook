import { Component, OnInit } from '@angular/core';

//  created on 22/3/21 by nilesh
// version 1:
// all feaure working need improvment
//no validation done



//contact class

class Contacts
{
    id:number;
    fname:string;
    lname:string;
    num:number;
   
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
//list of variable used

  showModal:boolean=false;
  showeditModal:boolean=false;
  id:number = 0;
  ufname:string;
  ulname:string;
  unum:number;
  uid:number;
  scontact:string;
  temp:any;
 
  
  allContacts : Contacts[] = [
  {id:++this.id,fname : "Nilesh", lname:"pandey", num : 689365},
  {id:++this.id,fname : "Babu", lname:"Bhai", num :5689465},
  {id:++this.id,fname : "Hindistani", lname:"bhau", num : 75455429875},
  {id:++this.id,fname : "munna", lname:"bhaiya", num : 654985270},
  {id:++this.id,fname : "guddu", lname:"pandit", num :6594549}];


//function to delete contact

delete(con:Contacts):void{
  let indx = this.allContacts.indexOf(con);
  this.allContacts.splice(indx, 1);    // .splice method 
}



//function to add new contact

addcontact(data):void{
 
 this.allContacts.push({id:++this.id,fname:data.fn,lname:data.ln,num:data.cn});
 this.showModal=false;
 alert("New Contact Added Successfully");

}


//this function will display by default content in input field when we click on edit button

editmodal(con:Contacts):void{
  this.showeditModal=true;
this.ufname=con.fname;
this.ulname=con.lname;
this.unum=con.num;
this.uid=con.id;

}

//function to update
//glitch:all field as to be edited

updatecontact(data):void{
  this.allContacts.forEach(element => {
    if(element.id==this.uid)
    {
     
       element.fname=data.fn;
     
       element.lname=data.ln;
     
      element.num=data.cn;

      
      
    }
   
    
  });
  alert("contact updated!!")
  this.showeditModal=false;

}

//function to sort contact from a-z

ascend():void{
  this.allContacts.sort(function(a, b) {
    var nameA = a.fname.toUpperCase(); // ignore upper and lowercase
    var nameB = b.fname.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
}


//function to sort contact from z-a

descend():void{
  this.allContacts.sort(function(a, b) {
    var nameA = a.fname.toUpperCase(); // ignore upper and lowercase
    var nameB = b.fname.toUpperCase(); // ignore upper and lowercase
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
}


//function to filter contact based on fname
//need improveent

search():any
{  
  this.temp=this.allContacts;
  this.allContacts=this.allContacts.filter(a=>a.fname.toLowerCase().startsWith(this.scontact.toLowerCase()));
  console.log(this.allContacts[0].fname);
  
}
afsearch():void{
  this.allContacts=this.temp;
}

 

  constructor() { 
   
    
  }

  ngOnInit(): void {
   
    
  }

}
