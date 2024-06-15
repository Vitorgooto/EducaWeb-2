document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const articleForm = document.getElementById('articleForm');
  
    if (loginForm) {
      loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
  
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
          window.location.href = 'articles.html';
        } else {
          alert('Invalid username or password');
        }
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
  });
  