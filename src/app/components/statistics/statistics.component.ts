import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Statistics } from 'src/app/models/statistics'; 

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [NgFor],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {
label!: string;
value!: number;
@Input() titlePage!: string;
@Input() statisticsData: Statistics[] = [];

constructor() {}

}