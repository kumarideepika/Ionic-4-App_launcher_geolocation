import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { Platform } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private iab: InAppBrowser,
    public geolocation: Geolocation,
    private launchNavigator: LaunchNavigator,public platform:Platform,public device:Device) {

  }
  navigateLocation(){
    let source: any =''; // source lat,long
    // let des=this.Chmdetails[0].LATITUDE+','+this.Chmdetails[0].LONGITUDE;
    let destination: any = this.latitude+','+this.longitude;
    let options: LaunchNavigatorOptions = {
      start: source,
      app:this.launchNavigator.APP.GOOGLE_MAPS,
   };
   
    this.launchNavigator.navigate(destination, options)
      .then(
       success => alert('Launched navigator'),
       error => alert('Error launching navigator: ' + error)
    );
  }
  latitude:any;
  longitude:any;
  ionViewDidLoad(){
    this.geolocation.getCurrentPosition().then(position =>{
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
      },error=>{
          console.log('error',error);
      });
  }
}
