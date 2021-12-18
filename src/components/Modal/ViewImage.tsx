import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent maxHeight="600px" maxWidth="900px" boxSize="min-content">
        <ModalBody p={0}>
          <Image src={imgUrl} maxHeight="600px" maxWidth="900px" />
        </ModalBody>

        <ModalFooter bgColor="pGray.800">
          <Link href={imgUrl} target="_blank" isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
