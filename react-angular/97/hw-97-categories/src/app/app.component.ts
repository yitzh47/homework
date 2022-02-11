import { Component, Output, Input } from '@angular/core';
import  Category  from './Category';
import Items from './Items';
import Item from './Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appCategories: Category[] = [
    { name: 'Phones', id: 1 },
    { name: 'Laptops', id: 2 },
    { name: 'Tablets', id: 3 },
  ];

  appItems: Items[] = [
    {
      id: 0, itms: [
        { name: "empty", price: 10 },
        { name: "samsung", price: 20 },
        { name: "xiaomi", price: 30 }
      ]
    },
    {
      id: 1, itms: [
        { name: "iphone", price: 10 }, 
        { name: "samsung", price: 20 },
        { name: "xiaomi", price: 30 }
      ]
    },
    { id: 2, itms: [
      { name: "mac", price: 1000 },
      { name: "lenovo", price: 2000 },
      { name: "surface", price: 3000 }
    ] 
  },
    { id: 3, itms:  [
      //{ name: "samsung tablet", price: 1000 },
      //{ name: "ipad", price: 2000 },
      //{ name: "amazon fire", price: 3000 }
    ] 
  },
  ];



  selectedCategory?: Item[] | undefined;

   selectedCategoryProcessor(index: number) {
    console.log(index, "hi");
    this.selectedCategory = this.appItems.find(item => item.id === index)?.itms;
  }
}


