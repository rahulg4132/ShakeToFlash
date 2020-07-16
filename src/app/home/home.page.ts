import { Component, OnInit } from '@angular/core';
import {Flashlight} from '@ionic-native/flashlight/ngx';
import {Shake} from '@ionic-native/shake/ngx';
import {Vibration} from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{  

  flag = false;
  watch=this.shake.startWatch(60).subscribe(()=>{    
    this.flag=!this.flag;
    this.vibration.vibrate(500);    
    this.switching();    
  });

  constructor(private flash: Flashlight, private shake: Shake, private vibration: Vibration) {}

  switching(){
    if(this.flag){
      if(!this.flash.isSwitchedOn())
      this.flash.switchOn();
      //console.log("ac");
    }
    else{
      if(this.flash.isSwitchedOn())
      this.flash.switchOff();
      //console.log("a");
    }   
  }
}
