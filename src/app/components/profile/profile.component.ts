import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  log = 'log';
conversation:any=[
  {image:'../../../assets/team-4.jpg',name:'Peterson',lastMessage:'Have a great afternoon..'},
  {image:'../../../assets/marie.jpg',name:'Marie',lastMessage:'Awesome work, can you..'},
  {image:'../../../assets/ivana-square.jpg',name:'Ivanna',lastMessage:'About files I can..'},
  {image:'../../../assets/team-3.jpg',name:'Nick Daniel',lastMessage:'Hi! I need more information..'},
  {image:'../../../assets/Sophie.jpg',name:'Sophie B.',lastMessage:'Hi! I need more information..'},
  {image:'../../../assets/me.jpg',name:'Ziad Almorsy',lastMessage:'السلام عليكم ورحمة الله و بركاته'},
]
projects:any=[
  {image:'../../../assets/home-decor-2.jpg',name:'Scandinavian',desc:'As Uber works through a huge amount of internal management turmoil.',id:'Project1'},
  {image:'../../../assets/home-decor-1.jpg',name:'Modern',desc:'Music is something that every person has his or her own specific opinion about.',id:'Project2'},
  {image:'../../../assets/home-decor-3.jpg',name:'Minimalist',desc:'Different people have different taste, and various types of music..',id:'Project3'},
]

viewer:any=[
  {image:'../../../assets/team-4.jpg'},
  {image:'../../../assets/marie.jpg'},
  {image:'../../../assets/ivana-square.jpg'},
  {image:'../../../assets/team-3.jpg'},
  {image:'../../../assets/me.jpg'},
  {image:'../../../assets/Sophie.jpg'}
]
  change(event: any) {
    (<HTMLInputElement>document.getElementById('btn1'))?.classList.replace(
      'after',
      'btnStyle'
    );
    (<HTMLInputElement>document.getElementById('btn2'))?.classList.replace(
      'after',
      'btnStyle'
    );
    (<HTMLInputElement>document.getElementById('btn3'))?.classList.replace(
      'after',
      'btnStyle'
    );
    (<HTMLInputElement>(
      document.getElementById(`${event.target.offsetParent.id}`)
    ))?.classList.replace('btnStyle', 'after');
  }

  active(event: any, div: any) {
    for (let i = 0; i < div.children.length; i++) {
      const element = div.children[i];
      element.classList.remove('active');
    }
    event.target.classList.value = 'active';
  }
  active1(event: any, div: any) {
    for (let i = 0; i < div.children.length; i++) {
      const element = div.children[i];
      element.classList.remove('active1');
    }
    event.target.classList.value = 'active1';
  }
}
