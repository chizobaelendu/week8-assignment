import { NgClass, NgStyle } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link',
  imports: [NgClass, NgStyle, RouterLink],
  templateUrl: './link.html',
  styleUrl: './link.css',
})

export class Link {
  linkText = input.required<string>();
  clickEvent = output();

  onLinkClick(event: any) {
    event.preventDefault();
    this.clickEvent.emit();
  };
}
