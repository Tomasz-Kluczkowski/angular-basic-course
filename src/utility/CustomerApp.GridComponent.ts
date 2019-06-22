import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-grid-ui',
  templateUrl: './CustomerApp.Grid.html'
})
export class GridComponent {
  gridColumns: Array<object> = new Array<object>();
  gridData: Array<object> = new Array<object>();

  @Input('grid-columns')
  set setGridColumns(gridColumns: Array<object>) {
    this.gridColumns = gridColumns;
  }

  @Input('grid-data')
  set setGridData(gridData: Array<object>) {
    this.gridData = gridData;
  }

  @Output('grid-selected')
  eventEmitter: EventEmitter<object> = new EventEmitter<object>();

  selectGrid(selected: object) {
    this.eventEmitter.emit(selected);
  }
}
