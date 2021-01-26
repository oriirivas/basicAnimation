import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.changeAnimation()
    
  }
  
  public changeAnimation() {
    const pelota = document.getElementById('pelotaTres');
    pelota?.addEventListener('animationend', (event) => {
      console.log(event);
      if(event.animationName === 'rebote'){
        console.log('entre en rebote');
        pelota.style.animationName='pelota, escalera, color'
        pelota.style.animationDuration='3s'
        pelota.style.animationIterationCount='infinite, 2, infinite'
      }
      if(event.animationName === 'escalera'){
        console.log('entre en escalera');
        pelota.style.animationName='pelota, rebote, color'
        pelota.style.animationDuration='3s, .3s, 1s'
        pelota.style.animationIterationCount='infinite, 20'
      }
    })
  }

}
