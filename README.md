# toDoList

Este é um projeto de lista de tarefas desenvolvido com TypeScript, React e Class Components.

## Funcionalidades

- Adicionar novas tarefas à lista.
- Remover tarefas existentes.
- Atualizar o status das tarefas (pendente/concluída).
- Marcar uma tarefa como concluída.

## Instalação

Para executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:

   ```
   git clone https://github.com/BrunaSpaniol/toDoList.git
   ```

2. Instale as dependências:

   ```
   cd toDoList
   npm install
   ```

3. Inicie a aplicação:

   ```
   npm start
   ```

A aplicação estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte maneira:

```
toDoList/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── TaskList.tsx
│   │   ├── TaskForm.tsx
│   │   └── ...
│   ├── types/
│   │   ├── Task.ts
│   │   └── ...
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── package.json
└── ...
```

## Componentes Principais

### `TaskForm.tsx`

Este componente permite adicionar novas tarefas à lista.

### `TaskList.tsx`

Exibe a lista de tarefas, permitindo a remoção e atualização do status das mesmas.

## Tipos de Dados

### `Task.ts`

Define a estrutura de dados de uma tarefa, incluindo propriedades como `id`, `title`, `completed`, entre outras.

## Contribuindo

Sinta-se à vontade para contribuir com melhorias neste projeto! Abra uma issue ou envie um pull request.

## Autor

Desenvolvido por [Bruna Spaniol](https://github.com/BrunaSpaniol).
