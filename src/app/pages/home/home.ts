import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectService } from '../../core/services/project';
import { ProjectCardComponent } from '../../components/project-card/project-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule, ProjectCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private projectService = inject(ProjectService);
  projects = toSignal(this.projectService.getProjects(), { initialValue: [] });
  skills = [
    {
      category: 'SKILLS.LANGUAGES_TOOLS',
      colorClass: 'text-indigo-600 dark:text-indigo-400',
      bgClass: 'bg-indigo-500',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      items: [
        { name: 'Languages', value: 'Python, R, SQL' },
        { name: 'Processing Libraries', value: 'PySpark, Pandas, Polars, NumPy, DuckDB' },
        { name: 'Visualization Libraries', value: 'Matplotlib, Seaborn, Plotly' },
        { name: 'Business Intelligence', value: 'DAX, Power Query M' }
      ]
    },
    {
      category: 'SKILLS.MODELING_ML',
      colorClass: 'text-emerald-600 dark:text-emerald-400',
      bgClass: 'bg-emerald-500',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      items: [
        { name: 'Libraries', value: 'Scikit-learn, Statsmodels' },
        { name: 'Techniques', value: 'Classification, Regression, Clustering, Random Forest, SVM, Gradient Boosting (AdaBoost, XGBoost)' },
        { name: 'Model Validation', value: 'Cross-validation, Performance Metrics (Accuracy, Precision, Recall, F1-Score, AUC-ROC)' }
      ]
    },
    {
      category: 'SKILLS.VISUALIZATION_STORYTELLING',
      colorClass: 'text-amber-600 dark:text-amber-400',
      bgClass: 'bg-amber-500',
      icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z',
      items: [
        { name: 'BI Tools', value: 'Power BI, Tableau, Looker Studio' },
        { name: 'Code Dashboards', value: 'Streamlit, Rill, Evidence' },
        { name: 'Techniques', value: 'Data Storytelling, Stakeholder Communication' }
      ]
    },
    {
      category: 'SKILLS.ENGINEERING_DB',
      colorClass: 'text-sky-600 dark:text-sky-400',
      bgClass: 'bg-sky-500',
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
      items: [
        { name: 'SQL Databases', value: 'PostgreSQL, MySQL, MariaDB, SQL Server' },
        { name: 'NoSQL Databases', value: 'MongoDB' },
        { name: 'Access Tools', value: 'Datagrip, DBeaver' }
      ]
    },
    {
      category: 'SKILLS.CLOUD_PIPELINES',
      colorClass: 'text-purple-600 dark:text-purple-400',
      bgClass: 'bg-purple-500',
      icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
      items: [
        { name: 'Cloud Platforms', value: 'AWS, Azure, Oracle Cloud' },
        { name: 'Data Platforms', value: 'Databricks, MotherDuck' },
        { name: 'Deployment', value: 'Vercel, Netlify, Linode' }
      ]
    }
  ];

  education = [
    {
      degree: 'EDUCATION.MBA_DS',
      school: 'EDUCATION.USP',
      year: '2027',
      status: 'Forecast'
    },
    {
      degree: 'EDUCATION.POS_STATS',
      school: 'EDUCATION.ANHANGUERA',
      year: '2025',
      status: 'Completed'
    },
    {
      degree: 'EDUCATION.MBA_BI',
      school: 'EDUCATION.ANHANGUERA',
      year: '2024',
      status: 'Completed'
    },
    {
      degree: 'EDUCATION.BSC_ECON',
      school: 'EDUCATION.UNICESUMAR',
      year: '2024',
      status: 'Completed'
    },
    {
      degree: 'EDUCATION.BSC_ADMIN',
      school: 'EDUCATION.UNINTER',
      year: '2016',
      status: 'Completed'
    }
  ];
}
