---
title: '🎒 Problema da Mochila'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 15 2022'
heroImage: '../../assets/blog-placeholder-4.jpg'
---

## Introdução

O **Problema da Mochila** (Knapsack Problem) é um dos problemas clássicos da **otimização combinatória** e da **pesquisa operacional**. Ele consiste em selecionar um subconjunto de itens, cada um com um peso e um valor, de forma que a soma dos pesos não ultrapasse a capacidade de uma mochila e o valor total seja maximizado. Esse problema é amplamente estudado devido à sua aplicabilidade em áreas como logística, finanças, engenharia e ciência da computação. Além disso, é um problema **NP-completo**, o que significa que não existe um algoritmo polinomial conhecido para resolvê-lo em todos os casos, tornando-o um desafio teórico e prático relevante.

[Imagem ilustrativa mostrando uma mochila com itens de diferentes pesos e valores.]

---

## Conceitos Fundamentais

O problema da mochila pode ser formalizado da seguinte forma:

Dado um conjunto de \( n \) itens, cada item \( i \) possui:
- Um valor \( v_i \)
- Um peso \( w_i \)

Deseja-se escolher um subconjunto desses itens para maximizar:

$$
\text{Maximizar } Z = \sum_{i=1}^{n} v_i x_i
$$

Sujeito a:

$$
\sum_{i=1}^{n} w_i x_i \leq W, \quad x_i \in \{0,1\}
$$

Onde:
- \( W \) é a capacidade máxima da mochila.
- \( x_i = 1 \) se o item \( i \) é incluído, e \( 0 \) caso contrário.

### Variações do Problema
- **Mochila 0/1**: Cada item pode ser incluído ou não.
- **Mochila Fracionária**: Permite incluir frações de itens.
- **Mochila Limitada**: Cada item tem quantidade limitada.
- **Mochila Ilimitada**: Quantidade infinita de cada item.
- **Múltiplas Mochilas**: Mais de uma mochila com restrições próprias.

[Imagem ilustrativa mostrando a formulação matemática do problema.]

---

## Aplicações Práticas

### 1. Logística e Transporte
Empresas de transporte utilizam o problema da mochila para determinar quais cargas transportar em veículos com capacidade limitada, maximizando o valor da carga transportada. Isso é essencial para reduzir custos e aumentar a eficiência operacional.

### 2. Seleção de Investimentos
No setor financeiro, o problema é aplicado na seleção de projetos ou ativos que maximizem o retorno esperado, respeitando um orçamento limitado. Essa abordagem é comum em fundos de investimento e planejamento estratégico.

[Imagem ilustrativa mostrando um caminhão com capacidade limitada e itens de diferentes valores.]

---

## Exemplo Resolvido Passo a Passo

Considere:
- Capacidade da mochila \( W = 10 \)
- Itens:  
  1. Peso = 5, Valor = 4  
  2. Peso = 4, Valor = 6  
  3. Peso = 3, Valor = 5  
  4. Peso = 2, Valor = 3  
  5. Peso = 1, Valor = 1  

### Passo 1: Estruturação do Problema
$$
\text{Maximizar } Z = 4x_1 + 6x_2 + 5x_3 + 3x_4 + 1x_5
$$
Sujeito a:
$$
5x_1 + 4x_2 + 3x_3 + 2x_4 + 1x_5 \leq 10, \quad x_i \in \{0,1\}
$$

### Passo 2: Aplicando Programação Dinâmica
Criamos uma matriz com linhas representando itens e colunas representando capacidades (0 a 10). Preenchemos a tabela considerando:
$$
G(i,j) = \max(G(i-1,j), G(i-1,j - w_i) + v_i)
$$

Após preencher a tabela, obtemos:
$$
\text{Valor máximo } = 14
$$
Com a combinação: Itens 2, 3 e 4 (pesos 4+3+2 = 9, valores 6+5+3 = 14).

[Imagem ilustrativa mostrando a tabela de programação dinâmica preenchida.]

---

## Conclusão

O problema da mochila é um exemplo clássico de como a pesquisa operacional contribui para a tomada de decisões em ambientes com recursos limitados. Sua relevância está na ampla aplicabilidade e na complexidade computacional, que desafia pesquisadores a desenvolver métodos eficientes. No entanto, sua principal limitação é a escalabilidade, pois instâncias grandes exigem heurísticas ou algoritmos aproximados para soluções viáveis em tempo razoável.

---

## Referências

- Souza, É. L., & Rafael, E. A. L. (2009). **Abordagens para resolver o problema da mochila 0/1**. Revista IGAPÓ. Disponível em: https://igapo.ifam.edu.br  
- AcademiaLab. **Problema da Mochila**. Disponível em: https://academia-lab.com  
- Estatística Fácil. **O que é Knapsack - Entenda o Problema da Mochila**. Disponível em: https://estatisticafacil.org  
- Universidade Estadual de Campinas. **Formulações para o Problema da Mochila**. Disponível em: [https://www.ime.unicampbr  
- Pitombeira, A. **Programação Linear Inteira: Problema da Mochila**. UFC.  
- Taha, H. A. (2017). **Pesquisa Operacional** (8ª ed.). Pearson.  
