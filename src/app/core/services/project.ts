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
        title: 'PROJECTS.P1.TITLE',
        shortDescription: 'PROJECTS.P1.SHORT_DESC',
        businessImpact: 'PROJECTS.P1.IMPACT',
        techStack: ['LangGraph', 'Python', 'LLMs', 'NetworkX'],
        links: {
          github: 'https://github.com/alexcamargos/nexus-equitygraph'
        }
      },
      {
        id: 2,
        title: 'PROJECTS.P2.TITLE',
        shortDescription: 'PROJECTS.P2.SHORT_DESC',
        businessImpact: 'PROJECTS.P2.IMPACT',
        techStack: ['RAG', 'Vector DB', 'OpenAI API', 'Streamlit'],
        links: {
          github: 'https://github.com/alexcamargos/Lastro.AI'
        }
      },
      {
        id: 3,
        title: 'PROJECTS.P3.TITLE',
        shortDescription: 'PROJECTS.P3.SHORT_DESC',
        businessImpact: 'PROJECTS.P3.IMPACT',
        techStack: ['Python', 'Selenium', 'Polars', 'DuckDB', 'Pandera'],
        links: {
          github: 'https://github.com/alexcamargos/bacen-ifdata-scraper',
          live: 'https://pypi.org/project/bacen-ifdata-scraper/'
        }
      },
      {
        id: 4,
        title: 'PROJECTS.P4.TITLE',
        shortDescription: 'PROJECTS.P4.SHORT_DESC',
        businessImpact: 'PROJECTS.P4.IMPACT',
        techStack: ['Python', 'API Development', 'PyPI', 'Open Source'],
        links: {
          github: 'https://github.com/alexcamargos/pysgs-bcb',
          live: 'https://pypi.org/project/pysgs-bcb/'
        }
      },
      {
        id: 5,
        title: 'PROJECTS.P5.TITLE',
        shortDescription: 'PROJECTS.P5.SHORT_DESC',
        businessImpact: 'PROJECTS.P5.IMPACT',
        techStack: ['Python', 'Pandas', 'Web Scraping', 'Microservices'],
        links: {
          github: 'https://github.com/alexcamargos/pyFundamentus'
        }
      },
      {
        id: 6,
        title: 'PROJECTS.P6.TITLE',
        shortDescription: 'PROJECTS.P6.SHORT_DESC',
        businessImpact: 'PROJECTS.P6.IMPACT',
        techStack: ['Time Series', 'Statsmodels', 'Scikit-Learn', 'Jupyter'],
        links: {
          github: 'https://github.com/alexcamargos/EconomicAnalysis'
        }
      }
    ];

    return of(projects);
  }
}
