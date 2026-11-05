import { Component } from '@angular/core';
import { Button } from '../reusable/button/button';
import { Router } from '@angular/router';
import { Logo } from '../reusable/logo/logo';
import { Card } from '../reusable/card/card';
import { eventList } from '../eventList';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [Button, Logo, Card, NgStyle],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {
  eventList = eventList; 
  constructor(private router: Router) {}

  videoId = 't8QNiGy4eOI';

  navigateToAbout() {
    this.router.navigate(["/about"]);
  };

  navigateToEvents() {
    this.router.navigate(["/events"]);
  };

  navigateToMedia() {
    this.router.navigate(["/media"]);
  };
};
