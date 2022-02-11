import { Component, Input, Output, EventEmitter} from '@angular/core';
import  Category from '../Category';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  @Input() categories!: Category[];
  @Output() selectedCategory = new EventEmitter<number>();


  selectCategory(event: string) {
    this.selectedCategory.emit(parseInt(event));
  }
}
