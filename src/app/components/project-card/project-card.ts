import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './project-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCardComponent {
  project = input.required<Project>();
}
