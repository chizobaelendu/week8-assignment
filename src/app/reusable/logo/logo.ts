import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [NgClass],
  templateUrl: './logo.html',
  styleUrl: './logo.css',
})

export class Logo {
  logoSize = input.required<string>();
};
