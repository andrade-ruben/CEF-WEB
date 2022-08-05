import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  list= [
    {
      routeLink: 'message',
      icon: 'fa fa-comment-alt',
      label: 'Message Board'
  },
  {
      routeLink: 'email',
      icon: 'fa fa-envelope',
      label: 'Email'
  },
  {
      routeLink: 'forms',
      icon: 'fa fa-file',
      label: 'Forms'
  },
  {
      routeLink: 'events',
      icon: 'fa fa-calendar',
      label: 'Events'
  },
  {
      routeLink: 'donations',
      icon: 'fas fa-coins',
      label: 'Donations'
  },
  {
      routeLink: 'media',
      icon: 'fa fa-video',
      label: 'Media'
  },
  {
      routeLink: 'resources',
      icon: 'fa-solid fa-folder',
      label: 'Resources'
  },
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}


  ngOnInit(): void {
  }

}
