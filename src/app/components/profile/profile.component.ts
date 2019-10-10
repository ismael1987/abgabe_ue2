import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Employee } from 'src/model/employee.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    trigger('photoState', [
      state('move', style({
        transform: 'translateX(-100%)',
      })),
      state('enlarge',   style({
        width: '600px',
        height:'400px'
      })),
      state('moveR', style({
        transform: 'translateX(+100%)',
      })),
      state('spin',   style({
        transform: 'rotateY(180deg) rotateZ(180deg)',
        width: '600px',
        height:'400px'
      })),
      transition('* => *', animate('500ms ease')),
    ])
  ]
})
export class ProfileComponent implements OnInit {
  employee : Employee[]=[];
  name : String;
  private LOGO = "../../assets/photo/photo-1.jpeg";
  constructor() {}
    postion : String;
   
    changPostion(newPostion: String){
         this.postion = newPostion
    }
    search(){
      if(this.name != ""){
         this.employee = this.employee.filter(res=>{
          return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
         })
      }else if (this.name == ""){
        this.ngOnInit();
      }
    }
  ngOnInit() {
    this.employee = [
      {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",  
      "phone": "1-770-736-8031 x56442",
      },
      {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "phone": "010-692-6593 x09125"
      },
      {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "phone": "1-463-123-4447"
      },
      {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "phone": "493-170-9623 x156"
      },
      {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "phone": "(254)954-1289"
      },
      {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "phone": "1-477-935-8478 x6430",
      },
      {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "phone": "210.067.6132"
      },
      {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "phone": "586.493.6943 x140",
      },
      {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "phone": "(775)976-6794 x41206"
      },
      {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "phone": "024-648-3804"
      }
      ];
  }

}
