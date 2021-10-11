import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { VideoData } from 'src/app/shared/models';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchCardComponent {
  @Input() videoData: VideoData;
}
