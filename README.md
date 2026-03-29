# Atividade de Fixação: Rotas e Componentes em React

Este é um projeto acadêmico desenvolvido como Atividade de Fixação para demonstrar o conhecimento prático na construção de rotas, componentes de layout global e roteamento dinâmico utilizando **React** e **React Router DOM**. O foco do projeto também engloba técnicas de alta performance, como o *Lazy Loading*.

## 🚀 Tecnologias e Bibliotecas Utilizadas

- **[React 18](https://react.dev/)**: Biblioteca javascript para construção de interfaces.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build de alta performance.
- **[React Router DOM v6](https://reactrouter.com/)**: Gerenciamento de rotas e navegação no cliente (SPA).
- **CSS Vanilla (Dark/Glassmorphism)**: Estilização moderna e responsiva de alto nível visual sem dependência de bibliotecas CSS adicionais.

## 🎯 Principais Funcionalidades Implementadas

1. **Roteamento Base (SPA):** Configuração completa do `<BrowserRouter>` eliminando recarregamentos da página no navegador.
2. **Layout Inteligente:** Todos os componentes globais (Header de navegação superior, Sidebar lateral e Footer) foram componentizados e envelopam as páginas da aplicação usando o `<Outlet />`.
3. **Performance (Lazy Load):** Implementação de carregamento sob demanda (`React.lazy()` e `<Suspense>`) para as páginas `Home`, `About`, `Contact`, `UserProfile` e `NotFound`. Garantindo que apenas o código necessário seja requisitado do servidor.
4. **Rotas Dinâmicas:** A rota de Perfil de Usuário mapeia interações na URL via parâmetros (`/user/:id`), validando os dados na tela antes da exibição utilizando os React Hooks (`useParams` e `useEffect`).
5. **Tratamento de Rota Inválida:** Página elegante e exclusiva atuando sob rotas inexistentes (Erro 404 Not Found, Rota `*`).

## 📁 Estrutura do Projeto

A lógica principal encontra-se na pasta raiz `src/`:

```
src/
├── components/          # Componentes globais de layout
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   └── LoadingSpinner.jsx
├── pages/               # Todas as Views da nossa aplicação (Lazy-loaded)
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── UserProfile.jsx  # Rota com o ID dinâmico
│   └── NotFound.jsx     # Página 404
├── App.jsx              # Definição e agrupamento de toda a hierarquia de rotas e o fallback do Suspense.
├── main.jsx             # Porta de entrada da aplicação.
└── index.css            # Variáveis globais do Glassmorphism e Dark Mode.
```

## 🛠️ Como Instalar e Rodar Localmente

Certifique-se de que possui o **Node.js** instalado na sua máquina.

1. Baixe os arquivos do projeto ou faça o clone via terminal:
   ```bash
   git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   ```

2. Entre na pasta raiz do projeto:
   ```bash
   cd atividade-de-fixacao-rotas-e-componentes-em-react
   ```

3. Instale as dependências essenciais:
   ```bash
   npm install
   ```

4. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

O console do terminal exibirá o seu endereço local (normalmente `http://localhost:5173/`). Cole isso no seu navegador para testar a aplicação!

## 🎓 Desenvolvedor

Esta atividade foi projetada e documentada especialmente para a Fixação por **Sarah Rique** para a matéria lecionada pelo Professor **Gusmão**.
