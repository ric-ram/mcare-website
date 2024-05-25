import { ModalProps, ModalTypes } from '@/app/types/componentTypes';
import { MODALMESSAGES } from '@/data/modalMessages';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';

const getMessageParagraphsByType = (type: ModalTypes, success: boolean) => {
  const index = MODALMESSAGES.findIndex(
    (item) => item.type === type && item.success === success,
  );
  return MODALMESSAGES[index].paragraphs;
};

export function SubmitModal({ onClose, isOpen, success, type }: ModalProps) {
  const paragraphs = getMessageParagraphsByType(type, success);

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{success ? 'Obrigado!' : 'Opss...'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {paragraphs.map((paragraph, index) => (
            <Text key={index}>{paragraph}</Text>
          ))}
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Fechar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
export { ModalTypes };
