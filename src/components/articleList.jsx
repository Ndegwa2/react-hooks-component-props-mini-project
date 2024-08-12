function ArticleList({ articles }) {
    return (
      <main>
        {articles.map(article => (
          <Article 
            key={article.id} 
            title={article.title} 
            date={article.date || "January 1, 1970"} 
            preview={article.preview} 
          />
        ))}
      </main>
    );
  }
  
