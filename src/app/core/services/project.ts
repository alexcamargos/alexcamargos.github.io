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
        title: 'Nexus Equity Graph',
        shortDescription: 'Multi-agent AI System for Autonomous Financial Analysis using LangGraph.',
        businessImpact: 'Orchestrated a team of specialized AI agents to analyze stock market data, reducing fundamental analysis time by 95%.',
        techStack: ['LangGraph', 'Python', 'LLMs', 'NetworkX'],
        links: {
          github: 'https://github.com/alexcamargos/nexus-equitygraph'
        }
      },
      {
        id: 2,
        title: 'Lastro.AI',
        shortDescription: 'Retrieval-Augmented Generation (RAG) system for unstructured document analysis.',
        businessImpact: 'Built an intelligent document processing engine that extracts insights from complex PDF contracts with high accuracy.',
        techStack: ['RAG', 'Vector DB', 'OpenAI API', 'Streamlit'],
        links: {
          github: 'https://github.com/alexcamargos/Lastro.AI'
        }
      },
      {
        id: 3,
        title: 'Bacen Regulatory ETL',
        shortDescription: 'Automated Data Pipeline for Central Bank of Brazil (IF.data) regulatory reporting.',
        businessImpact: 'Engineered a resilient scraping engine that eliminates 100% of manual data collection for financial market intelligence.',
        techStack: ['Python', 'Selenium', 'ETL', 'Automation'],
        links: {
          github: 'https://github.com/alexcamargos/bacen-ifdata-scraper'
        }
      },
      {
        id: 4,
        title: 'PySGS SDK',
        shortDescription: 'Official-grade Python Wrapper for the Central Bank Time Series Management System.',
        businessImpact: 'Developed an open-source tool simplifying access to 20,000+ economic indicators for the Brazilian data science community.',
        techStack: ['Python', 'API Development', 'PyPI', 'Open Source'],
        links: {
          github: 'https://github.com/alexcamargos/pysgs-bcb',
          live: 'https://pypi.org/project/pysgs-bcb/'
        }
      },
      {
        id: 5,
        title: 'PyFundamentus API',
        shortDescription: 'High-performance API for accessing B3 fundamentalist market data.',
        businessImpact: 'Democratized access to financial valuations, supporting data-driven investment strategies for thousands of users.',
        techStack: ['Python', 'Pandas', 'Web Scraping', 'Microservices'],
        links: {
          github: 'https://github.com/alexcamargos/pyFundamentus'
        }
      },
      {
        id: 6,
        title: 'Economic Intelligence Suite',
        shortDescription: 'Predictive modeling suite for Brazilian macroeconomic indicators (GDP, Selic).',
        businessImpact: 'Implemented ARIMA and Machine Learning models to forecast economic trends with high precision for strategic planning.',
        techStack: ['Time Series', 'Statsmodels', 'Scikit-Learn', 'Jupyter'],
        links: {
          github: 'https://github.com/alexcamargos/EconomicAnalysis'
        }
      }
    ];

    return of(projects);
  }
}
