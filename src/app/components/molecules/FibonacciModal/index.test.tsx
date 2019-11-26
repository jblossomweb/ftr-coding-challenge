import forEach from 'lodash/forEach';
import {
  Button,
  Header,
  Icon,
  Modal,
} from 'semantic-ui-react';
import { getTestScenes, mountScenes } from 'core/test';
import { scenes } from './stories';
import FibonacciModal from '.';

// const spies = {
//   editField: jest.spyOn(mockProps, 'editField'),
// }

const testScenes = getTestScenes(
  mountScenes(scenes),
  FibonacciModal,
  component => ({
    modal: component
      .find(Modal),
    modalHeader: component
      .find(Modal)
      .find(Header),
    modalContent: component
      .find(Modal)
      .find(Modal.Content),
    modalActions: component
      .find(Modal)
      .find(Modal.Actions),
    modalActionButton: component
      .find(Modal)
      .find(Modal.Actions)
      .find(Button),
    modalActionButtonIcon: component
      .find(Modal)
      .find(Modal.Actions)
      .find(Button)
      .find(Icon),
}))

describe('components/FibonacciModal', () => {
  it(`always mounts the FibonacciModal component`, () => {
    forEach(testScenes, scene => {
      expect(scene.component.length).toBe(1);
    });
  });
  it(`always mounts a Modal component`, () => {
    forEach(testScenes, scene => {
      expect(scene.elements.modal.length).toBe(1);
    });
  });
  it(`always passes isOpen prop to Modal open prop`, () => {
    forEach(testScenes, scene => {
      const { modal } = scene.elements;
      expect(modal.props().open).toEqual(scene.props.isOpen);
    });
  });
  it(`always passes 'small' to Modal size prop`, () => {
    forEach(testScenes, scene => {
      const { modal } = scene.elements;
      expect(modal.props().size).toEqual('small');
    });
  });
  it(`always passes onClose prop to Modal onClose prop`, () => {
    forEach(testScenes, scene => {
      const { modal } = scene.elements;
      expect(modal.props().onClose).toEqual(scene.props.onClose);
    });
  });
  it(`always mounts a Header component inside Modal component`, () => {
    forEach(testScenes, scene => {
      expect(scene.elements.modalHeader.length).toBe(1);
    });
  });
  it(`always passes 'exclamation' to Header icon prop`, () => {
    forEach(testScenes, scene => {
      const { modalHeader } = scene.elements;
      expect(modalHeader.props().icon).toEqual('exclamation');
    });
  });
  it(`always passes 'Fibonacci Number' to Header content prop`, () => {
    forEach(testScenes, scene => {
      const { modalHeader } = scene.elements;
      expect(modalHeader.props().content).toEqual('Fibonacci Number');
    });
  });
  it(`always mounts a Modal.Content component inside Modal component`, () => {
    forEach(testScenes, scene => {
      expect(scene.elements.modalContent.length).toBe(1);
    });
  });
  it(`always mounts a p element inside Modal.Content component`, () => {
    forEach(testScenes, scene => {
      const { modalContent } = scene.elements;
      const p = modalContent.find('p');
      expect(p.length).toBe(1);
    });
  });
  it(`always renders expected text inside p element`, () => {
    forEach(testScenes, scene => {
      const { modalContent } = scene.elements;
      const p = modalContent.find('p');
      const numberString = scene.props.number.toString();
      const expected = `${numberString} is one of the numbers in the Fibonacci Sequence!`;
      expect(p.text()).toEqual(expected);
    });
  });
  it(`always mounts a Modal.Actions component inside Modal component`, () => {
    forEach(testScenes, scene => {
      expect(scene.elements.modalActions.length).toBe(1);
    });
  });
  it(`always mounts a Button component inside Modal.Actions component`, () => {
    forEach(testScenes, scene => {
      expect(scene.elements.modalActionButton.length).toBe(1);
    });
  });
  it(`always passes 'blue' to Button color prop`, () => {
    forEach(testScenes, scene => {
      const { modalActionButton } = scene.elements;
      expect(modalActionButton.props().color).toEqual('blue');
    });
  });
  it(`always passes onClose prop to Button onClick prop`, () => {
    forEach(testScenes, scene => {
      const { modalActionButton } = scene.elements;
      const { onClose } = scene.props;
      expect(modalActionButton.props().onClick).toEqual(onClose);
    });
  });
  it(`always passes true to Button autoFocus prop`, () => {
    forEach(testScenes, scene => {
      const { modalActionButton } = scene.elements;
      expect(modalActionButton.props().autoFocus).toEqual(true);
    });
  });
  it(`always mounts an Icon component inside Button component`, () => {
    forEach(testScenes, scene => {
      expect(scene.elements.modalActionButtonIcon.length).toBe(1);
    });
  });
  it(`always passes 'checkmark' to Icon name prop`, () => {
    forEach(testScenes, scene => {
      const { modalActionButtonIcon } = scene.elements;
      expect(modalActionButtonIcon.props().name).toEqual('checkmark');
    });
  });
  it(`always renders ' Ok' inside Button component`, () => {
    forEach(testScenes, scene => {
      const { modalActionButton } = scene.elements;
      expect(modalActionButton.text()).toEqual(' Ok');
    });
  });
});
