import { Component, OnInit } from '@angular/core';
import { WeirdoHobby } from '../hobbyModel';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {
hobby:WeirdoHobby={
	title:"Мычание", 
	about:"Коровье мычание, как оказалось так же может стать хобби. Конечно, это может показаться странным, но некоторые люди на самом деле практикуют коровье мычание. У них есть даже свой конкурс на ежегодной ярмарке в штате Висконсин. 10-летний Остин Сиок смог перемычать 80 человек и заслужить победу в конкурсе. Остин много мычал,  начиная с детского сада, а когда его семья прочла о конкурсе, мальчик захотел в нем участвовать. Он тренировался  по несколько раз в день, поэтому и победил."
}
img1:string='/assets/image/one.jfif';
img2:string='/assets/image/two.jpg';
  constructor() { }

  ngOnInit(): void {

 

  }

}
