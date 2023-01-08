import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'vhs-home';
  activeComponent = 'home';

  switchComponent(componentToSwitchTo: string) {
    console.log('componentToSwitchTo: ', componentToSwitchTo);
    this.playAudio();
    this.activeComponent = componentToSwitchTo;
  }

  playAudio() {
    const audio = new Audio();
    audio.src = '../assets/audio/cassette-insert-sound-effect-1.mp3';
    audio.load();
    audio.play();
  }
}
