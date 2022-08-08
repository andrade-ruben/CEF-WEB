import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  Bible: any[] = [
    {
      "name": "John 3:14-18",
    },
  ]


  messages: any[] =[
    {
      "name": "Pastor Doug",
      "text": "Hey everyone! Don’t forget to wear your new Shirts tomorrow!"
    },
    {
      "name": "Hannah B",
      "text": "5-Day Club Invitations are printed and in the office. Stop by and grab a stack!"
    },
    {
      "name": "Lucas Q.",
      "text": "Volunteers Needed! Please consider volunteering to help with a club this summer. You can email me for more information about getting involved."
    },
    {
      "name": "Elajah",
      "text": "Please keep Lisa M. in your prayers as she is going into surgery this morning to have the cancer removed from her neck. She will be in recovery for several weeks and her family will need support through this time so be sure to let them know you are thinking of them and consider signing up to provide a meal for them"
    },
  ]

  prayers: any[] =[
    {
      "name": "Lisa M",
      "text": "Surgery today to have cancer removed from her neck."
    },
    {
      "name": "Joey P",
      "text": "Mother in hospital with Covid."
    },
    {
      "name": "Chester F",
      "text": "Sister's salvation."
    },
    {
      "name": "Lucas Q",
      "text": "Guidance on the next steps for his and his family as they move to minister in Mexico."
    },
  ]

  praises : any[] =[
    {
      "name": "Elajah",
      "text": "Baby's doctor visit went well."
    },
    {
      "name": "Lucas Q",
      "text": "Many children have accepted Christ during the first few weeks of clubs!"
    },
    {
      "name": "Chester F",
      "text": "Praise the Lord for a great Sunday and for his provisions throughout the week!"
    },
    {
      "name": "Lucas Q",
      "text": "Baby’s doctor visit went well."
    },
  ]

constructor() {}

  ngOnInit(): void {
  }

}