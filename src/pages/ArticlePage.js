import React from 'react';
import articleContent from './article-content';
function ArticlePage({ match }) {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
    </>
  );
}

export default ArticlePage;
