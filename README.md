# Super Mario Corrida 🏁

Este é um projeto desenvolvido para a DIO (Digital Innovation One), simulando uma corrida divertida entre personagens clássicos do universo Mario, rodando diretamente no terminal!

## Como funciona o jogo?

- Dois jogadores escolhem seus personagens favoritos.
- A cada rodada, uma fase é sorteada aleatoriamente: **reta**, **curva** ou **confronto**.
- Cada fase utiliza um atributo diferente dos personagens (velocidade, manobrabilidade ou poder) somado ao resultado de um dado.
- Quem tiver o maior valor vence a rodada e ganha 1 ponto.
- O primeiro a atingir 3 pontos vence o campeonato!

## Personagens e Gifs

| Personagem    | Gif |
|--------------|-----|
| Mario        | ![](imagens/tumblr_bcce376166ab8d34791ee4f93340bcda_e8d91cb4_250.gif) |
| Luigi        | ![](imagens/tumblr_7b5a7c298ccd9f96baa31e86bd87f286_2d01d726_250.gif) |
| Bowser       | ![](imagens/tumblr_223096c933c903de745cc48e3899b1ef_1f99e762_250.gif) |
| Peach        | ![](imagens/8d772dc03b5f8c40dc0971bf3594d820_w200.gif) |
| Yoshi        | ![](imagens/tumblr_aadd2cfcc87f472f136d0d424cfe0440_a6b51914_250.webp) |
| Donkey Kong  | ![](imagens/tumblr_146091a4fb451c59c57c8139b5bb19a6_e0d5bf14_250.webp) |

## Atributos dos Personagens

| Personagem    | Velocidade | Manobrabilidade | Poder |
|--------------|:----------:|:---------------:|:-----:|
| Mario        |     4      |        3        |   3   |
| Luigi        |     3      |        4        |   4   |
| Bowser       |     5      |        2        |   5   |
| Peach        |     3      |        5        |   2   |
| Yoshi        |     2      |        4        |   3   |
| Donkey Kong  |     2      |        2        |   5   |

- **Velocidade**: usada nas fases de reta 🛣️
- **Manobrabilidade**: usada nas curvas 🌀
- **Poder**: usada nos confrontos ⚡

## Como rodar o projeto

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Baixe ou clone este repositório.
3. No terminal, navegue até a pasta do projeto:
   ```bash
   cd super-mario
   ```
4. Execute o jogo:
   ```bash
   node index.js
   ```
5. Siga as instruções na tela para escolher os personagens e se divertir!

## Dica de diversão

Chame um amigo, apostem quem será o campeão e vejam quem tem mais sorte (ou estratégia) nas corridas do Mario! 🎲🏆

---
Projeto criado para fins educacionais na DIO. 