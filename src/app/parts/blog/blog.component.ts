import { Component }   from '@angular/core';
import { OnInit }      from '@angular/core';

import { DataService } from '../../services/data.service';
import { Blog }        from '../../interfaces/blog.interface';

@Component({
  selector    : 'app-blog',
  templateUrl : './blog.component.html',
  styleUrls   : ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
  
  blog : Blog[];
  
  constructor(private dataService : DataService) { }

  ngOnInit() {

    this.dataService.getBlog().subscribe((data) => {
      this.blog  = data;
      console.log(data);
    });

  }
  
}
