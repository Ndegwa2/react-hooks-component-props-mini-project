function Article({ title, date, preview }) {
    const minutes = Math.ceil(preview.length / 100); // Assuming 100 words per minute
    const readTime = minutes < 30 
      ? "☕️".repeat(Math.ceil(minutes / 5)) + ` ${minutes} min read`
      : "🍱".repeat(Math.ceil(minutes / 10)) + ` ${minutes} min read`;
  
    return (
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        <p>{readTime}</p>
      </article>
    );
  }
  
