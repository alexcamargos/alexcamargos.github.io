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
