import React from 'react';
import { shallow, ReactWrapper } from 'enzyme';
import forEach from 'lodash/forEach';
import { Input } from 'semantic-ui-react';
import { getTestScenes, mountScenes } from 'core/test';
import { scenes } from './stories';
import InputNumber from '.';
import * as Style from './style';

// hacky suppress recharts width/height warnings (I would normally not do this)
console.warn = () => {};

const randomInteger = (
  from: number,
  to: number,
) => Math.floor(Math.random() * to) + from;

const testScenes = getTestScenes(
  mountScenes(scenes),
  InputNumber,
  component => ({
    styleWrapper: component
      .find(Style.Wrapper),
    h3: component
      .find(Style.Wrapper)
      .find('h3'),
    input: component
      .find(Style.Wrapper)
      .find(Input),
}));

describe('components/InputNumber', () => {
  // describe('inputRef', () => {
  //   it(`should always be a ref for a Semantic Input component`, () => {
  //     forEach(testScenes, scene => {
  //       const instance: any = scene.component.instance();
  //       expect(instance.inputRef).toEqual(React.createRef<Input>());
  //     });
  //   });
  // });
  describe('componentDidUpdate', () => {
    it(`should focus on Input component`, () => {
      forEach(testScenes, scene => {
        const instance: any = scene.component.instance();
        const { current } = instance.inputRef;
        const focus = jest.spyOn(current, 'focus');
        expect(focus).not.toHaveBeenCalled();
        instance.componentDidUpdate();
        expect(focus).toHaveBeenCalled();

      });
    });
  });
  describe('submitValue', () => {
    it(`should call props.onSubmit if value is within range`, () => {
      forEach(testScenes, scene => {
        const { min, max } = scene.props;
        const onSubmit = jest.spyOn(scene.props, 'onSubmit');
        const value: number = randomInteger(min, max); // fuzzy test
        const instance: any = scene.component.instance();
        expect(onSubmit).not.toHaveBeenCalled();
        instance.setState({ value });
        instance.submitValue();
        expect(onSubmit).toHaveBeenCalledWith(value);
      });
    });
  });
  describe('render', () => {
    it(`always mounts the InputNumber component`, () => {
      forEach(testScenes, scene => {
        expect(scene.component.length).toBe(1);
      });
    });
    it(`always mounts a Style.Wrapper component`, () => {
      forEach(testScenes, scene => {
        expect(scene.elements.styleWrapper.length).toBe(1);
      });
    });
    it(`always renders h3 element inside Style.Wrapper component`, () => {
      forEach(testScenes, scene => {
        expect(scene.elements.h3.length).toBe(1);
      });
    });
    it(`renders expected text inside h3 element when data exists`, () => {
      forEach(testScenes, scene => {
        if (scene.props.dataExists) {
          const expected: string = `Please enter the next number`;
          expect(scene.elements.h3.text()).toEqual(expected);
        }
      });
    });
    it(`renders expected text inside h3 element when data does not exist`, () => {
      forEach(testScenes, scene => {
        if (!scene.props.dataExists) {
          const expected: string = `Please enter the first number`;
          expect(scene.elements.h3.text()).toEqual(expected);
        }
      });
    });
    it(`always mounts semantic Input component inside Style.Wrapper component`, () => {
      forEach(testScenes, scene => {
        expect(scene.elements.input.length).toBe(1);
      });
    });
    // it(`always applies its inputRef as ref prop for semantic Input component`, () => {
    //   forEach(testScenes, scene => {
    //     const { input } = scene.elements;
    //     const { inputRef }: any = scene.component.instance();
    //     expect(input.props().ref).toEqual(inputRef);
    //   });
    // });
    it(`always applies its handleInputActionClick as Input action.onClick prop`, () => {
      forEach(testScenes, scene => {
        const { input } = scene.elements;
        const { handleInputActionClick }: any = scene.component.instance();
        expect(input.props().action.onClick).toEqual(handleInputActionClick);
      });
    });
    it(`always applies props.min as Input min prop`, () => {
      forEach(testScenes, scene => {
        const { min } = scene.props;
        const { input } = scene.elements;
        expect(input.props().min).toEqual(min);
      });
    });
    it(`always applies props.max as Input max prop`, () => {
      forEach(testScenes, scene => {
        const { max } = scene.props;
        const { input } = scene.elements;
        expect(input.props().max).toEqual(max);
      });
    });
    it(`always renders expected text in Input placeholder prop`, () => {
      forEach(testScenes, scene => {
        const { input } = scene.elements;
        const expected: string = `Input a number...`;
        expect(input.props().placeholder).toEqual(expected);
      });
    });
    it(`always renders 'number' as Input type prop`, () => {
      forEach(testScenes, scene => {
        const { input } = scene.elements;
        expect(input.props().type).toEqual('number');
      });
    });
    it(`initializes blank string as Input value prop`, () => {
      forEach(testScenes, scene => {
        const { input } = scene.elements;
        expect(input.props().value).toEqual('');
      });
    });
    // it(`manages value state change as Input value prop`, () => {
    //   forEach(testScenes, scene => {
    //     const { input } = scene.elements;
    //     const value: string = '12345';
    //     // const instance: any = scene.component.instance();
    //     expect(input.props().value).not.toEqual(value);
    //     console.log(scene.component.state());
    //     console.log(input.debug());
    //     scene.component.setState({ value });
    //     input.update();
    //     console.log(scene.component.state());
    //     console.log(input.debug());
    //     // expect(input.props().value).toEqual(value);
    //   });
    // });
  });
});
