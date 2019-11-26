import React from 'react';

import {
  Button,
  Header,
  Icon,
  Modal,
} from 'semantic-ui-react';

export interface Props {
  number: number,
  isOpen: boolean,
  onClose: () => void,
}

const FibonacciModal: React.FC<Props> = ({
  number,
  isOpen,
  onClose,
}) => (
  <Modal
    open={isOpen}
    size={`small`}
    onClose={onClose}
  >
    <Header icon='exclamation' content='Fibonacci Number' />
    <Modal.Content>
      <p>
        {number.toString()} is one of the numbers in the Fibonacci Sequence!
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button
        color={`blue`}
        onClick={onClose}
        autoFocus
      >
        <Icon name='checkmark' /> Ok
      </Button>
    </Modal.Actions>
  </Modal>
);

export default FibonacciModal;
