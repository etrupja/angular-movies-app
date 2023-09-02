import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/data/model/Feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  
  feedback: Feedback = new Feedback('','',8,'','');

  ngOnInit(): void {
  }

  submitFeedback(){
    console.log('Feedback form [Submit] - ', this.feedback);
  }

}
