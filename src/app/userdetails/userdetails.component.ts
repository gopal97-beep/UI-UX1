import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { HttpclientserviceService } from '../httpclientservice.service';
import { User } from '../user';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  id:string
  user:User
  constructor(private route:ActivatedRoute,private httpservice:HttpclientserviceService) { }

  ngOnInit() {

    this.id=this.route.snapshot.paramMap.get('id')
    this.httpservice.findprofile(this.id).subscribe((data)=>this.user=data)
  }

}
