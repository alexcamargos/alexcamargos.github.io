import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { ProjectService } from './project';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return projects observable', async () => {
    const projects = await firstValueFrom(service.getProjects());
    expect(projects).toBeDefined();
    expect(projects.length).toBeGreaterThan(0);
  });
});
