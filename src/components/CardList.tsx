import { Box, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [url, setUrl] = useState('');

  function handleViewImage(selectedImageUrl: string): void {
    setUrl(selectedImageUrl);
    onOpen();
  }

  return (
    <>
      <SimpleGrid columns={3} gap="10">
        {cards.map(card => (
          <Card
            key={card.id}
            data={card}
            viewImage={selectedImageUrl => handleViewImage(selectedImageUrl)}
          />
        ))}
      </SimpleGrid>

      <ModalViewImage imgUrl={url} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
