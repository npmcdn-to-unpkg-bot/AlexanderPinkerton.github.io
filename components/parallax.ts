//import the Component and bootsrtap from angular fw
import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';


@Component({
  selector: 'parallax',
  templateUrl: 'templates/parallax.html',
  styleUrls: ['css/parallax.css']
})


export class Parallax {
  constructor() {
    
  }

  moveLayers(event) {
    
    var OffsetY = -2500;
    var OffsetX = -800;
    var x = -(event.pageX + OffsetY);
    var y = -(event.pageY + OffsetX);

    $('.layer1').css('background-position', x / 20 + 'px ' + y / 20 + 'px');   
    $('.layer2').css('background-position', x / 10 + 'px ' + y / 10 + 'px');   
    $('.layer3').css('background-position', x / 5 + 'px ' + y / 5 + 'px');  
    $('.layer4').css('background-position', x / 2 + 'px ' + y / 2 + 'px');
  }

}


//bootstrap(Parallax);