import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectCardComponent } from './project-card';
import { Project } from '../../core/models/project.model';

describe('ProjectCardComponent', () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;

  const mockProject: Project = {
    id: 1,
    title: 'PROJECTS.P1.TITLE',
    shortDescription: 'PROJECTS.P1.SHORT_DESC',
    businessImpact: 'PROJECTS.P1.IMPACT',
    techStack: ['Python', 'Docker'],
    links: {
      github: 'https://github.com/example/repo'
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardComponent, TranslateModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCardComponent);
    fixture.componentRef.setInput('project', mockProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have project input set', () => {
    expect(component.project()).toEqual(mockProject);
  });
});
