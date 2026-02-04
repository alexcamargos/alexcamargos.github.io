import { Component, inject, ChangeDetectionStrategy, signal } from '@angular/core';
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

  displayedCode = signal('');

  private fullCodeSnippet = `
<p><span class="text-pink-400">import</span> pandas <span class="text-pink-400">as</span> pd</p>
<p><span class="text-pink-400">from</span> sklearn.ensemble <span class="text-pink-400">import</span> RandomForestClassifier</p>
<br>
<p class="text-slate-500"># Loading monetary correction indexes</p>
<p>df = pd.read_parquet(<span class="text-green-400">'s3://datalake/ipca_series.parquet'</span>)</p>
<br>
<p class="text-slate-500"># Predicting credit risk</p>
<p>model = RandomForestClassifier(n_estimators=<span class="text-orange-400">100</span>)</p>
<p>model.fit(X_train, y_train)</p>
<br>
<p><span class="text-blue-400">print</span>(<span class="text-green-400">f"Business Impact: <span class="text-yellow-300">{model.score(X_test, y_test):.2%}</span> accuracy"</span>)</p>
`;

  skills = [
    {
      category: 'SKILLS.LANGUAGES_TOOLS',
      colorClass: 'text-indigo-600 dark:text-indigo-400',
      bgClass: 'bg-indigo-500',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      items: [
        { name: 'Languages', tags: ['Python', 'R', 'SQL'] },
        { name: 'Processing Libraries', tags: ['PySpark', 'Pandas', 'Polars', 'NumPy', 'DuckDB'] },
        { name: 'Visualization Libraries', tags: ['Matplotlib', 'Seaborn', 'Plotly'] },
        { name: 'Business Intelligence', tags: ['DAX', 'Power Query M'] }
      ]
    },
    {
      category: 'SKILLS.MODELING_ML',
      colorClass: 'text-emerald-600 dark:text-emerald-400',
      bgClass: 'bg-emerald-500',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      items: [
        { name: 'Libraries', tags: ['Scikit-learn', 'Statsmodels'] },
        { name: 'Techniques', tags: ['Classification', 'Regression', 'Clustering', 'Random Forest', 'SVM', 'Gradient Boosting (AdaBoost, XGBoost)'] },
        { name: 'Model Validation', tags: ['Cross-validation', 'Performance Metrics (Accuracy, Precision, Recall, F1-Score, AUC-ROC)'] }
      ]
    },
    {
      category: 'SKILLS.VISUALIZATION_STORYTELLING',
      colorClass: 'text-amber-600 dark:text-amber-400',
      bgClass: 'bg-amber-500',
      icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z',
      items: [
        { name: 'BI Tools', tags: ['Power BI', 'Tableau', 'Looker Studio'] },
        { name: 'Code Dashboards', tags: ['Streamlit', 'Rill', 'Evidence'] },
        { name: 'Techniques', tags: ['Data Storytelling', 'Stakeholder Communication'] }
      ]
    },
    {
      category: 'SKILLS.ENGINEERING_DB',
      colorClass: 'text-sky-600 dark:text-sky-400',
      bgClass: 'bg-sky-500',
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
      items: [
        { name: 'SQL Databases', tags: ['PostgreSQL', 'MySQL', 'MariaDB', 'SQL Server'] },
        { name: 'NoSQL Databases', tags: ['MongoDB'] },
        { name: 'Access Tools', tags: ['Datagrip', 'DBeaver'] }
      ]
    },
    {
      category: 'SKILLS.CLOUD_PIPELINES',
      colorClass: 'text-purple-600 dark:text-purple-400',
      bgClass: 'bg-purple-500',
      icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
      items: [
        { name: 'Cloud Platforms', tags: ['AWS', 'Azure', 'Oracle Cloud'] },
        { name: 'Data Platforms', tags: ['Databricks', 'MotherDuck'] },
        { name: 'Deployment', tags: ['Vercel', 'Netlify', 'Linode'] }
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

  constructor() {
    this.typeWriterEffect();
  }

  private typeWriterEffect() {
    let i = 0;
    const intervalId = setInterval(() => {
      if (i >= this.fullCodeSnippet.length) {
        clearInterval(intervalId);
        return;
      }

      // Check if we are at the start of an HTML tag
      if (this.fullCodeSnippet[i] === '<') {
        // Find the end of the tag
        const tagEnd = this.fullCodeSnippet.indexOf('>', i);
        if (tagEnd !== -1) {
          // Append the entire tag at once so we don't break HTML structure
          this.displayedCode.update(current => current + this.fullCodeSnippet.substring(i, tagEnd + 1));
          i = tagEnd + 1;
        } else {
          // Fallback just in case
          this.displayedCode.update(current => current + this.fullCodeSnippet[i]);
          i++;
        }
      } else {
        // Normal character - append it
        this.displayedCode.update(current => current + this.fullCodeSnippet[i]);
        i++;
      }
    }, 15); // Adjust speed here (lower = faster)
  }
}
