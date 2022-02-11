import { Component, Input } from '@angular/core';
import Items from '../Items';
import Item from '../Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent{
  @Input() categoryOfItems!: Item[] | undefined;



}
