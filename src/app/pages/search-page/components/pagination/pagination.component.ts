import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { VideoPaginationData } from '../../models/interfaces';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {
  @Input() set paginationData(value: VideoPaginationData) {
    if (!value) {
      return;
    }
    this.paginationValue = value;
  }

  private paginationValue: VideoPaginationData;

  constructor(private ctrl: SearchService) { }

  prevPage(): void {
    if (!this.paginationValue ?.prevPageToken) {
      return;
    }

    this.ctrl.loadData(this.paginationValue.search, this.paginationValue.prevPageToken);
  }

  nextPage(): void {
    if (!this.paginationValue?.nextPageToken) {
      return;
    }

    this.ctrl.loadData(this.paginationValue.search, this.paginationValue.nextPageToken);
  }

  get canGetNextPage(): boolean {
    return !!(this.paginationValue && this.paginationValue.nextPageToken);
  }

  get canGetPreviousPage(): boolean {
    return !!(this.paginationValue && this.paginationValue.prevPageToken);
  }
}
