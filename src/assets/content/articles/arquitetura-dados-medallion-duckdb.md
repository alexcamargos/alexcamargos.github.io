---
title: "Arquitetura Medallion com DuckDB e Parquet para Pipelines Locais"
description: "Como estruturar camadas Bronze, Silver e Gold em ambientes analíticos compactos utilizando DuckDB e formato colunar Parquet."
date: "2026-11-04"
published: true
featured: true
tags: ["datascience", "python", "dataengineering", "duckdb"]
canonical_url: "https://alcamargos.com/blog/arquitetura-dados-medallion-duckdb"
devto_id: null
---

A organização de dados em camadas analíticas consolidadas resolve gargalos clássicos de rastreabilidade e governança. O padrão Medallion divide o ciclo de vida da informação em três estágios físicos e conceituais bem definidos: Bronze (dados brutos imutáveis), Silver (dados limpos e estruturados) e Gold (modelos analíticos agregados para consumo).

Neste artigo, avaliamos como o DuckDB em conjunto com arquivos Parquet viabiliza a execução local dessas transformações sem a necessidade de infraestrutura de nuvem pesada durante as fases de experimentação e validação.

## Estrutura Física das Camadas

A segregação das pastas deve seguir rigorosamente a unidirecionalidade do fluxo de dados:

* `data/raw/`: Armazena os dados originais recebidos de APIs ou sistemas transacionais em seu estado nativo.
* `data/interim/`: Dados tipados, com esquema validado e nulos tratados.
* `data/processed/`: Tabelas agregadas no formato Parquet, otimizadas para leitura analítica de alta performance.

## Pipeline com DuckDB em Python

O código a seguir demonstra a consolidação dos dados da camada intermediária para a camada analítica final:

```python
import duckdb
from pathlib import Path

def process_gold_layer(source_dir: Path, output_file: Path) -> None:
    con = duckdb.connect()
    query = f"""
        COPY (
            SELECT 
                date_trunc('month', transaction_date) AS harvest_month,
                category_id,
                count(*) AS total_transactions,
                sum(amount) AS total_revenue,
                avg(amount) AS average_ticket
            FROM read_parquet('{source_dir}/*.parquet')
            WHERE status = 'confirmed'
            GROUP BY 1, 2
            ORDER BY 1 DESC, 4 DESC
        ) TO '{output_file}' (FORMAT PARQUET, COMPRESSION ZSTD);
    """
    con.execute(query)
    con.close()
```

## Análise de Compressão e Custo Computacional

A eficiência do armazenamento colunar pode ser expressa pela razão de compressão \( R_c \):

$$R_c = \frac{S_{raw} - S_{parquet}}{S_{raw}} \times 100\%$$

Onde \( S_{raw} \) representa o volume em bytes dos arquivos brutos (geralmente CSV ou JSON) e \( S_{parquet} \) representa o tamanho dos arquivos compactados com algoritmo Zstandard. Em conjuntos de dados analíticos típicos, reduções superiores a 75% são rotineiras, enquanto o tempo de varredura (*scan time*) diminui em até dez vezes.
