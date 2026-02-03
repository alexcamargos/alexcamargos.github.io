import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    const projects: Project[] = [
      {
        id: 1,
        title: 'Credit Risk Modeling',
        shortDescription: 'Developed a predictive model to assess credit risk for loan applicants.',
        businessImpact: 'Reduced default rates by 15% using Random Forest',
        techStack: ['Python', 'Scikit-Learn', 'FastAPI'],
        links: {
          github: 'https://github.com/alexcamargos/credit-risk-model'
        }
      },
      {
        id: 2,
        title: 'Distributed ETL Pipeline',
        shortDescription: 'Architected a scalable ETL pipeline for processing massive transaction logs.',
        businessImpact: 'Processed 2TB/day of transaction logs with 99.9% uptime',
        techStack: ['Apache Spark', 'AWS EMR', 'Airflow'],
        links: {
          github: 'https://github.com/alexcamargos/etl-pipeline'
        }
      },
      {
        id: 3,
        title: 'Market Basket Analysis',
        shortDescription: 'Analyzed customer purchase patterns to identify cross-selling opportunities.',
        businessImpact: 'Increased cross-selling revenue by 8%',
        techStack: ['R', 'Shiny', 'SQL'],
        links: {}
      }
    ];

    return of(projects);
  }
}
