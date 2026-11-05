import { Component, input, output } from '@angular/core';
import { NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Link } from '../link/link';
import { eventList } from '../../eventList';
import { yraObjectives } from '../../yra-objectives';
import { yraSubscriptions } from '../../yra-subscription';
import { Button } from '../button/button';

@Component({
  selector: 'app-card',
  imports: [NgClass, UpperCasePipe, TitleCasePipe, NgStyle, RouterLink, Link, Button],
  templateUrl: './card.html',
  styleUrl: './card.css',
})

export class Card {
  constructor(private router: Router) {}
  eventList = eventList;
  yraObjectives = yraObjectives;
  yraSubscriptions = yraSubscriptions;
  cardType = input.required<string>();

  getBgColor(eventHeading: string) {
    if (eventHeading === "research bootcamp" || eventHeading === "data analysis") {
      return {'background-color': 'blue'};
    } else {
      return {'background-color': 'orange'};
    };
  };

  getTextColor(eventHeading: string) {
    if (eventHeading === "research bootcamp" || eventHeading === "data analysis") {
      return {'color': 'blue'};
    } else {
      return {'color': 'orange'};
    };
  };

  getObjTextColor(objInitial: string) {
    if (objInitial === "p" || objInitial === "i" ) {
      return {'color': 'blue'};
    } else {
      return {'color': 'orange'};
    };
  };

  getSubTextColor(subInitial: string) {
    if (subInitial === "f") {
      return {'color': 'blue'};
    } else {
      return {'color': 'orange'};
    };
  };

  navigateToRegPage() {
    this.router.navigate(["/signup"]);
  };

  navigateToExplorationPage() {
    this.router.navigate(["/exploration"]);
  };

  navigateToResourcePage(event: any) {
    event.preventDefault();
    this.router.navigate(["/resources"]);
  };

};
