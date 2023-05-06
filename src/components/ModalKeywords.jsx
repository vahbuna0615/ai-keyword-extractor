import { 
  Modal, 
  Text, 
  Button, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalFooter, 
  ModalBody,
  ModalCloseButton,
  CircularProgress
 } from "@chakra-ui/react";

const ModalKeywords = ({ keywords, loading, isOpen, closeModal }) => {
  return (
    <>
      <Modal isOpen={ isOpen } onClose={ closeModal }>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Keywords
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" alignItems='center' justifyContent="center">
            {loading ? (
              <CircularProgress isIndeterminate color="gray" />
            ) : (
              <Text>
                { keywords }
              </Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalKeywords;