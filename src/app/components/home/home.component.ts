import { Component } from '@angular/core';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private ServService:ServService ){}
ngOnInit(): void {
  this.ServService.product().subscribe((data:any)=>{
    console.log(data);

  })
}
}
