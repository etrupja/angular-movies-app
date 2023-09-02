import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/data/model/Feedback';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { emailDomainValidator } from 'src/app/validators/email.validator';
import { inappropriateKeywordsValidator } from 'src/app/validators/keywords.validator';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  
  // feedback: Feedback = new Feedback('','',8,'','');
  feedbackForm!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.feedbackForm = new FormGroup({
      emailAddress: new FormControl('', [Validators.required, Validators.email, emailDomainValidator('@trupja.com')]),

      phoneNumber: new FormControl('', [Validators.required]),
      rate: new FormControl(8, [Validators.min(0), Validators.max(10)]),
      feedbackTitle: new FormControl('', [Validators.required]),
      
      feedback:new FormControl('',[Validators.required, inappropriateKeywordsValidator(['spam','bot'])])
    })
  }

  submitFeedback(){
    // console.log('Feedback form [Submit] - ', this.feedback)
    console.log('Feedback form [Submit] - ', this.feedbackForm.value)
  }

}
