---
title: "Inferencia Bayesiana Aplicada a Modelos de Precificacao Dinamica"
description: "Modelagem probabilistica da elasticidade de demanda utilizando distribuicoes a priori e atualizacao bayesiana."
date: "2026-11-02"
published: true
featured: true
tags: ["datascience", "economics", "python", "statistics"]
canonical_url: "https://alcamargos.com/blog/inferencia-bayesiana-precificacao-dinamica"
devto_id: null
---

Modelos determinísticos de precificação costumam falhar ao ignorar a incerteza inerente à resposta do consumidor em cenários com poucas observações. A abordagem bayesiana incorpora conhecimento prévio do setor (*priors*) e calibra as distribuições à medida que novas vendas ocorrem.

## Formulacao Matematica

O teorema de Bayes nos fornece a distribuição a posteriori dos parâmetros de elasticidade \( \theta \) condicionados aos dados observados \( D \):

$$P(\theta \mid D) = \frac{P(D \mid \theta) P(\theta)}{P(D)} = \frac{P(D \mid \theta) P(\theta)}{\int P(D \mid \theta') P(\theta') d\theta'}$$

Em termos de elasticidade-preço da demanda \( \epsilon \), definimos a relação linear logarítmica:

$$\ln(Q) = \alpha + \epsilon \cdot \ln(P) + \nu$$

Com priors normais informativos baseados no histórico de categorias semelhantes:

$$\epsilon \sim \mathcal{N}(\mu_0, \sigma_0^2)$$

## Implementacao com Python e Numpy

Amostragem analítica simplificada via Conjugate Priors para parâmetros gaussianos:

```python
import numpy as np

def update_elasticity_posterior(prior_mean: float, prior_var: float, 
                                observed_data: np.ndarray, likelihood_var: float) -> tuple[float, float]:
    n = len(observed_data)
    sample_mean = np.mean(observed_data)
    
    post_var = 1.0 / (1.0 / prior_var + n / likelihood_var)
    post_mean = post_var * (prior_mean / prior_var + (n * sample_mean) / likelihood_var)
    
    return post_mean, post_var
```

A calibração contínua assegura decisões estáveis de margem mesmo diante de oscilações bruscas no volume de transações.
