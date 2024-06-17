document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const switchToRegisterLink = document.getElementById('switch-to-register');
  const switchToLoginLink = document.getElementById('switch-to-login');
  const searchBar = document.getElementById('search-bar');
  const filter = document.getElementById('filter');
  const articleForm = document.getElementById('articleForm');

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;

      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (data.success) {
        alert('Login successful');
        window.location.href = 'main.html';
      } else {
        alert('Invalid username or password');
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('register-username').value;
      const password = document.getElementById('register-password').value;

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (data.success) {
        alert('Registration successful');
        toggleForms();
      } else {
        alert('Error during registration');
      }
    });
  }

  if (switchToRegisterLink) {
    switchToRegisterLink.addEventListener('click', (e) => {
      e.preventDefault();
      toggleForms();
    });
  }

  if (switchToLoginLink) {
    switchToLoginLink.addEventListener('click', (e) => {
      e.preventDefault();
      toggleForms();
    });
  }

  if (searchBar) {
    searchBar.addEventListener('input', async (e) => {
      const query = e.target.value;
      const filterValue = filter.value;

      let url = `/api/articles?search=${query}`;
      if (filterValue !== 'all') {
        url += `&tag=${filterValue}`;
      }

      const response = await fetch(url);
      const articles = await response.json();

      const articleList = document.getElementById('article-list');
      articleList.innerHTML = '';
      articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
        articleList.appendChild(articleElement);
      });
    });
  }

  if (filter) {
    filter.addEventListener('change', async (e) => {
      const query = searchBar.value;
      const filterValue = e.target.value;

      let url = `/api/articles?search=${query}`;
      if (filterValue !== 'all') {
        url += `&tag=${filterValue}`;
      }

      const response = await fetch(url);
      const articles = await response.json();

      const articleList = document.getElementById('article-list');
      articleList.innerHTML = '';
      articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
        articleList.appendChild(articleElement);
      });
    });
  }

  if (articleForm) {
    articleForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;

      const response = await fetch('/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      const data = await response.json();
      if (data.success) {
        alert('Article submitted');
        loadArticles();
      } else {
        alert('Error submitting article');
      }
    });

    loadArticles();
  }

  async function loadQuestionsAndAnswers() {
    const response = await fetch('/api/questions-answers');
    const qaData = await response.json();
    const qaSection = document.getElementById('qa-section');
    qaSection.innerHTML = '';
    qaData.forEach(qa => {
      const qaElement = document.createElement('div');
      qaElement.innerHTML = `<h3>${qa.question}</h3><p>${qa.answer}</p>`;
      qaSection.appendChild(qaElement);
    });
  }

  async function loadArticles() {
    const response = await fetch('/api/articles');
    const articles = await response.json();
    const articleList = document.getElementById('articleList');
    articleList.innerHTML = '';
    articles.forEach(article => {
      const articleElement = document.createElement('div');
      articleElement.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
      articleList.appendChild(articleElement);
    });
  }

  function toggleForms() {
    if (loginForm.style.display === 'none') {
      loginForm.style.display = 'block';
      registerForm.style.display = 'none';
    } else {
      loginForm.style.display = 'none';
      registerForm.style.display = 'block';
    }
  }

  if (document.getElementById('qa-section')) {
    loadQuestionsAndAnswers();
  }
});
