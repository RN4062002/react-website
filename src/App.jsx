// src/App.js
import React, { useEffect, useState } from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import AppHeader from './components/Header';
import LandingPage from './components/LandingPage';
import BookCard from './components/BookCard';
import { fetchBooks } from './services/gutendexService';

function App() {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const loadBooks = async () => {
      if (selectedCategory) {
        const booksData = await fetchBooks(selectedCategory);
        setBooks(booksData);
      }
    };
    loadBooks();
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppHeader />
      <LandingPage onCategoryClick={handleCategoryClick} />
      {selectedCategory && (
        <div style={{ display: 'flex', gap: '10px', padding: '20px', flexWrap: 'wrap' }}>
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              imageUrl={book.imageUrl} // Pass the image URL here
            />
          ))}
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
