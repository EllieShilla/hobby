import { Component, OnInit } from '@angular/core';
import { WeirdoHobby } from '../hobbyModel';
import {EditService} from '../edit.service';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css'],
  providers:[EditService]
})
export class HobbyComponent implements OnInit {
hobby:WeirdoHobby={
	title:"",  
	about:""
}
img1:string='/assets/image/one.jfif';
img2:string='/assets/image/two.jpg';
newInf:string="";

  constructor(private editService:EditService) { }

  ngOnInit(): void {
    this.hobby=this.editService.getHobby();
    var sd=document.getElementById("sd") as HTMLElement;
    sd.nodeValue=this.editService.getHobby().about;
  }

  editInform(text:string)
  {
    this.editService.editInf(text);
  }

  getHobby()
  {
    var dinNone=document.getElementById("DivInf") as HTMLElement;
    var AboutHobby=document.getElementById("AboutHobby") as HTMLInputElement;
    AboutHobby.value=this.editService.getHobby().about;


    if(dinNone.style.display=="block")
    dinNone.style.display="none";
  else
  dinNone.style.display="block";
  }
}
