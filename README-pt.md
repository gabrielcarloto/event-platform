![](https://ik.imagekit.io/698xlahbaqz/Capa_EerBEpvUs.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656940547894)

## :clipboard: Sobre

Este projeto foi desenvolvido durante o evento _Ignite Lab da RocketSeat_. O objetivo era criar uma plataforma de eventos que consome dados com GraphQL.

### :sparkles: Melhorias

- [X] Impedir a entrada em aulas ainda não disponíveis
  - [X] Remover o link para que não possam ser acessadas pelo *sidebar*
  - [X] Redirecionar para a página principal ao tentar entrar em uma aula indisponível pela URL
- [X] Tela de loading (skeleton)
- [X] Redirecionar usuários que entram em `/event` para a primeira aula disponível
- [ ] Design responsivo
- [ ] Autenticação com Github
  - [ ] Redirecionar usuários deslogados para a tela de login 

### :computer: Tecnologias

- [X] [Vite](vitejs.dev/)
- [X] [React](https://pt-br.reactjs.org/)
- [X] [TailwindCSS](https://tailwindcss.com/)
- [X] [GraphQL](https://graphql.org/)
  - [X] [GraphCMS](https://graphcms.com/)
  - [X] [GraphQL Codegen](https://www.graphql-code-generator.com/)
  - [X] [Apollo](https://www.apollographql.com/)

## :file_folder: Como rodar o projeto localmente

```bash
# Clone o repositório
git clone 

# Entre na pasta
cd event-platform

# Instale as dependências
pnpm i

# Rode
pnpm dev
```