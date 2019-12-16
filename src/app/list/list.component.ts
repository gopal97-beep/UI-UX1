import { Component, OnInit } from '@angular/core';
import { HttpclientserviceService } from '../httpclientservice.service';
import { User } from '../user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   user:User[]
  constructor(private httpservice:HttpclientserviceService) { }

  ngOnInit() {
    this.httpservice.getprofile().subscribe((data)=>this.user=data)

    
  }
   delete(id){
     this.httpservice.deleteprofile(id).subscribe(data=>{
       this.user=this.user.filter(u=>u.id!==id)
     })
   }  
}
