# 🧮 Calculadora Simples

Este é um projeto de **Calculadora Simples** feito com **HTML**, **CSS** e **JavaScript**. A calculadora permite realizar operações matemáticas básicas de forma intuitiva e com uma interface amigável.

## 📷 Preview

<img src="assets/images/PreviewCalculadora.gif" alt="Preview da Calculadora" width="600"/>

## 🚀 Funcionalidades

- Operações básicas: adição, subtração, multiplicação e divisão
- Limpar todos os valores (`AC`)
- Apagar o último dígito (`DEL`)
- Teclado responsivo com efeitos de hover
- Formatação de números com separador decimal

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3 (com grid layout)
- JavaScript puro (sem bibliotecas)

## 💡 Como usar

Entre no site:
![Calculadora Preview](https://calculadoraers.netlify.app)

OU

1. Clone o repositório ou baixe o .zip do projeto:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. Navegue até a pasta do projeto

3. Abra o arquivo index.html no navegador.

## ✨ Layout

A interface da calculadora foi criada com `CSS Grid`, pensada para ser clara e objetiva. Os botões são destacados com cores vibrantes, proporcionando uma melhor experiência visual e de usabilidade.

## 🧠 Lógica por trás

A lógica da calculadora está encapsulada na classe `Calculator`, que realiza as seguintes funções:

- Armazena os valores digitados e a operação selecionada
- Realiza os cálculos com base nos operandos
- Atualiza o display formatando os números no padrão brasileiro (`,` ao invés de `.`)
- Lida com cliques dos botões, incluindo `AC`, `DEL`, e `=`
