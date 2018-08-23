import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MoodService {
  mood = "Happy";

  updateMood(mood) {
    this.mood = mood;
    console.log('change to ', mood);
  }
}
