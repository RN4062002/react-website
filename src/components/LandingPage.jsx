import React from 'react';
import styled from 'styled-components';

// Define the main container and button styles
const Container = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #f8f7ff;
`;

const Title = styled.h1`
  color: #5e56e7;
  font-size: 48px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #333333;
  font-size: 16px;
  margin-bottom: 40px;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  width: 200px;
  background-color: #ffffff;
  border: 2px solid #eaeaea;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(211, 209, 238, 0.5);
  font-size: 16px;
  font-weight: 600;
  color: #5e56e7;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(211, 209, 238, 0.8);
  }
`;

const categories = [
  { name: 'Fiction', query: 'fiction' },
  { name: 'Drama', query: 'drama' },
  { name: 'Humour', query: 'humour' },
  { name: 'Politics', query: 'politics' },
  { name: 'Philosophy', query: 'philosophy' },
  { name: 'History', query: 'history' },
  { name: 'Adventure', query: 'adventure' },
];

export default function LandingPage({ onCategoryClick }) {
  return (
    <Container>
      <Title>Gutenberg Project</Title>
      <Subtitle>
        A social cataloging website that allows you to freely search its database of books, annotations, and reviews.
      </Subtitle>
      <CategoriesContainer>
        {categories.map((category) => (
          <CategoryButton key={category.name} onClick={() => onCategoryClick(category.query)}>
            {category.name} <span>→</span>
          </CategoryButton>
        ))}
      </CategoriesContainer>
    </Container>
  );
}
