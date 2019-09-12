import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'agentTable';
  missmap = new Map();
  takeCountry;
  missionArray = [
    {agent: '007', country: 'Brazil', 
         address: 'Avenida Vieira Souto 168 Ipanema, Rio de Janeiro',
         date: 'Dec 17, 1995, 9:45:17 PM',isIsolate:false
    },
    {agent: '005', country: 'Poland', 
         address: 'Rynek Glowny 12, Krakow',
         date: 'Apr 5, 2011, 5:05:12 PM',isIsolate:false
    },
    {agent: '007', country: 'Morocco', 
         address: '27 Derb Lferrane, Marrakech',
         date: 'Jan 1, 2001, 12:00:00 AM',isIsolate:false
    },
    {agent: '005', country: 'Brazil', 
         address: 'Rua Roberto Simonsen 122, Sao Paulo',
         date: 'May 5, 1986, 8:40:23 AM',isIsolate:false
    },
    {agent: '011', country: 'Poland', 
         address: 'swietego Tomasza 35, Krakow',
         date: 'Sep 7, 1997, 7:12:53 PM',isIsolate:true
    },
    {agent: '003', country: 'Morocco', 
         address: 'Rue Al-Aidi Ali Al-Maaroufi, Casablanca',
         date: 'Aug 29, 2012, 10:17:05 AM',isIsolate:true
    },
    {agent: '008', country: 'Brazil', 
         address: 'Rua tamoana 418, tefe',
         date: 'Nov 10, 2005, 1:25:13 PM',isIsolate:true
    },
    {agent: '013', country: 'Poland', 
         address: 'Zlota 9, Lublin',
         date: 'Oct 17, 2002, 10:52:19 AM',isIsolate:true
    },
    {agent: '002', country: 'Morocco', 
         address: 'Riad Sultan 19, Tangier',
         date: 'Jan 1, 2017, 5:00:00 PM',isIsolate:true
    },
    {agent: '009', country: 'Morocco', 
         address: 'atlas marina beach, agadir',
         date: 'Dec 1, 2016, 9:21:21 PM',isIsolate:true
    }
 ];
     constructor(){
          this.sortData();
     }
    ngOnInit(){
        for(let i = 0; i < this.missionArray.length;i++){
            this.missmap.set(this.missionArray[i].country,{data:[this.missionArray[i]]});
        }
        this.startCHeck();
    } 
    startCHeck(){
        for(let i = 0; i < this.missionArray.length;i++){
            if(this.missmap.get(this.missionArray[i].country)){
                if(this.missmap.get(this.missionArray[i].country).data[0].agent != this.missionArray[i].agent){
                    this.missmap.get(this.missionArray[i].country).data.push(this.missionArray[i]);
                }
                
            }
           
        }
    }   
     sortData() {
     return this.missionArray.sort((a, b) => {
       return <any>new Date(b.date) - <any>new Date(a.date);
     });
   }  
}
