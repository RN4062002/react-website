// src/components/BookCard.js
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${({ theme }) => theme.secondaryColor};
  box-shadow: 0 2px 5px rgba(211, 209, 238, 0.5);
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  width: 114px;
  height: 162px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: cover;
  background-position: center;
  color: ${({ theme }) => theme.primaryTextColor};
`;

const BookTitle = styled.h3`
  font-size: 12px;
  font-weight: normal;
  color: ${({ theme }) => theme.greyDark};
 // background: rgba(255, 255, 255, 0.7); /* Semi-transparent background for text */
  padding: 2px 5px;
  border-radius: 4px;
`;

const Author = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.greyDark};
  background: rgba(255, 255, 255, 0.7); /* Semi-transparent background for text */
  padding: 2px 5px;
  border-radius: 4px;
  margin-top: 4px;
`;

export default function BookCard({ title, author, imageUrl }) {
  // Placeholder image URL if the actual book image is not available
  const placeholderImage = 'https://via.placeholder.com/114x162?text=No+Image';

  return (
    <Card style={{ backgroundImage: `url(${imageUrl || placeholderImage})` }}>
      <BookTitle>{title}</BookTitle>
      <Author>{author || 'Unknown Author'}</Author>
    </Card>
  );
}
