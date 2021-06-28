import { Component,OnInit } from '@angular/core';
import { faChartPie,faChartLine,faFileAlt,faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedItem:any; 

  faPie = faChartPie;
  faLine = faChartLine;
  faFile = faFileAlt;
  faUser = faUser;

  sideBar(activelink){    
    this.selectedItem = activelink;  
    activelink.preventDefault();
  }

  constructor() { }

  ngOnInit(): void {
    
  }


}
