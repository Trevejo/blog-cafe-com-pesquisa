---
title: '☕ Teoria das Filas'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 22 2022'
heroImage: '../../assets/blog-placeholder-2.jpg'
---

## Introdução

A **teoria das filas** é um dos métodos mais aplicados da **Pesquisa Operacional**, voltado para o estudo matemático de sistemas de espera. Desde sua origem com A.K. Erlang em 1908, na Dinamarca, para resolver problemas de congestionamento em sistemas telefônicos, a teoria evoluiu e passou a ser utilizada em diversos setores como logística, engenharia, saúde, manufatura e tecnologia da informação.

Seu objetivo principal é **analisar e prever o comportamento de filas**, permitindo o dimensionamento adequado de recursos, infraestrutura e processos, de forma a **minimizar o tempo de espera** e **maximizar a eficiência operacional**. A teoria das filas é essencial para a tomada de decisões estratégicas em ambientes onde a demanda por serviços excede a capacidade de atendimento.

## Conceitos Fundamentais

A teoria das filas é baseada em modelos matemáticos que descrevem o comportamento de sistemas de atendimento. Os principais componentes de um sistema de filas são:

- **Processo de chegada**: geralmente modelado por uma distribuição de Poisson, com taxa média de chegada $\lambda$.
- **Processo de atendimento**: frequentemente modelado por uma distribuição exponencial negativa, com taxa média de atendimento $\mu$.
- **Disciplina da fila**: define a ordem de atendimento dos clientes, como FIFO (First In First Out), LIFO (Last In First Out), SIRO (Serviço em Ordem Aleatória) e SPT (Menor Tempo de Processamento).
- **Estrutura do sistema**: pode variar entre canal único com fila única, canais múltiplos com fila única, canais múltiplos com múltiplas filas, entre outros.

A notação de **Kendall-Lee** é utilizada para classificar os sistemas de filas: A/B/m/C/K/N, onde:
- A: distribuição do tempo entre chegadas
- B: distribuição do tempo de serviço
- m: número de servidores
- C: capacidade do sistema
- K: limite da fila
- N: tamanho da população

## Aplicações Práticas

### 1. Supermercados

Um estudo realizado em um supermercado de Conselheiro Lafaiete-MG aplicou a teoria das filas para analisar o atendimento nos caixas. Utilizando simulação computacional com o software Arena®, foi possível identificar gargalos e propor melhorias no número de atendentes e na organização das filas. O resultado foi uma **redução significativa no tempo de espera dos clientes**, aumentando a satisfação e eficiência do serviço.[1](https://www.researchgate.net/profile/Icaro-Cunha-4/publication/385908003_APLICACAO_DA_TEORIA_DE_FILAS_ESTUDO_DE_CASO_EM_UM_SUPERMERCADO/links/673b727b88177c79e83120b3/APLICACAO-DA-TEORIA-DE-FILAS-ESTUDO-DE-CASO-EM-UM-SUPERMERCADO.pdf)

[Imagem ilustrativa mostrando o modelo de simulação de filas em um supermercado com múltiplos caixas.]

### 2. Logística e Manufatura

Na indústria, a teoria das filas é aplicada para **otimizar processos de produção**, como o fluxo de materiais entre máquinas, o despacho de produtos e o controle de estoques. Um exemplo é o uso da teoria para dimensionar o número de empilhadeiras em um centro de distribuição, garantindo que o tempo de espera para carregamento seja minimizado sem superdimensionar os recursos.[2](https://fecilcam.br/anais/vii_eepa/data/uploads/artigos/3-03.pdf)

[Imagem ilustrativa mostrando o fluxo de atendimento em um centro logístico com múltiplos canais e fases.]

## Exemplo Resolvido: Modelo M/M/1

Vamos resolver um exemplo clássico de fila M/M/1, que representa um sistema com chegada de clientes segundo uma distribuição de Poisson e atendimento exponencial, com um único servidor.

**Dados:**
- Taxa média de chegada: $\lambda = 25$ clientes por hora
- Taxa média de atendimento: $\mu = 30$ clientes por hora

**Cálculos:**

1. **Utilização do sistema:**
   $$
   \rho = \frac{\lambda}{\mu} = \frac{25}{30} = 0{,}833
   $$

2. **Número médio de clientes no sistema (NS):**
   $$
   NS = \frac{\rho}{1 - \rho} = \frac{0{,}833}{1 - 0{,}833} = 5
   $$

3. **Número médio de clientes na fila (NF):**
   $$
   NF = \frac{\rho^2}{1 - \rho} = \frac{(0{,}833)^2}{1 - 0{,}833} \approx 4{,}17
   $$

4. **Tempo médio no sistema (TS):**
   $$
   TS = \frac{1}{\mu - \lambda} = \frac{1}{30 - 25} = 0{,}2 \text{ horas} = 12 \text{ minutos}
   $$

5. **Tempo médio na fila (TF):**
   $$
   TF = TS - \frac{1}{\mu} = 0{,}2 - \frac{1}{30} \approx 0{,}167 \text{ horas} = 10 \text{ minutos}
   $$

**Tabela Resumo:**

| Métrica                  | Valor         |
|--------------------------|---------------|
| Utilização do sistema    | 83,3%         |
| Clientes no sistema (NS) | 5             |
| Clientes na fila (NF)    | 4,17          |
| Tempo no sistema (TS)    | 12 minutos    |
| Tempo na fila (TF)       | 10 minutos    |

[Imagem ilustrativa mostrando o diagrama de um sistema M/M/1 com fluxo de chegada e atendimento.]

## Conclusão

A teoria das filas é uma ferramenta poderosa da Pesquisa Operacional, permitindo a modelagem e análise de sistemas de espera em diversos contextos. Sua aplicação contribui para a **eficiência operacional**, **redução de custos** e **melhoria na experiência do usuário**. No entanto, suas limitações incluem a necessidade de **assumir distribuições probabilísticas** e **simplificações do mundo real**, o que pode afetar a precisão dos modelos em sistemas complexos.

Ainda assim, com o apoio de simulações e softwares especializados, como o Arena®, é possível obter resultados robustos e aplicáveis em ambientes reais.

## Referências

- Cunha, Í. G. F. et al. (2019). *Aplicação da Teoria de Filas: Estudo de Caso em um Supermercado*. XXXIX ENEGEP. [Link para o artigo](https://www.researchgate.net/profile/Icaro-Cunha-4/publication/385908003_APLICACAO_DA_TEORIA_DE_FILAS_ESTUDO_DE_CASO_EM_UM_SUPERMERCADO/links/673b727b88177c79e83120b3/APLICACAO-DA-TEORIA-DE-FILAS-ESTUDO-DE-CASO-EM-UM-SUPERMERCADO.pdf)[1](https://www.researchgate.net/profile/Icaro-Cunha-4/publication/385908003_APLICACAO_DA_TEORIA_DE_FILAS_ESTUDO_DE_CASO_EM_UM_SUPERMERCADO/links/673b727b88177c79e83120b3/APLICACAO-DA-TEORIA-DE-FILAS-ESTUDO-DE-CASO-EM-UM-SUPERMERCADO.pdf)

- Alves, L. F. P. et al. (2008). *Teoria das Filas: Conceitos e Aplicações*. XV SIMPEP. [Link para o artigo](https://fecilcam.br/anais/vii_eepa/data/uploads/artigos/3-03.pdf)[2](https://fecilcam.br/anais/vii_eepa/data/uploads/artigos/3-03.pdf)

- Pedroso, P. (2014). *Teoria de Filas – Resumo e Exercícios*. Universidade Federal do Paraná. [Link para o artigo](https://www.eletrica.ufpr.br/pedroso/2014/TE816/Filas-Resumo-Exercicios.pdf)[3](https://www.eletrica.ufpr.br/pedroso/2014/TE816/Filas-Resumo-Exercicios.pdf)
