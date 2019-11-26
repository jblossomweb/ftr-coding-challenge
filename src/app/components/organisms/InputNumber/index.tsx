import React from 'react';
import { Input } from 'semantic-ui-react';
import * as Style from './style';

export interface Props {
  min: number,
  max: number,
  dataExists: boolean,
  disabled?: boolean,
  onSubmit: (n: number) => void,
};

export interface State {
  value?: number,
};

class InputNumber extends React.Component<Props, State> {
  state = {
    value: undefined,
  };

  inputRef = React.createRef<Input>();

  componentDidUpdate() {
    const { current } = this.inputRef;
    current && current.focus();
  }

  submitValue = () => {
    const { onSubmit, min, max } = this.props;
    const { value } = this.state;
    if (
      typeof value !== 'undefined' &&
      value! >= min &&
      value! <= max
    ) {
      onSubmit(value!);
    }
    this.setState({
      value: undefined,
    });
  };

  handleInputChange = (
    { target: { value } }: React.ChangeEvent<HTMLInputElement>,
  ) => this.setState({
    value: value ? Number(value) : undefined,
  });

  handleInputActionClick = (
    _event: React.MouseEvent<HTMLButtonElement>,
  ) => this.submitValue();

  handleInputKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.submitValue();
    }
    if (event.key === 'Escape') {
      this.setState({
        value: undefined,
      });
    }
  };

  render() {
    const { dataExists, disabled, min, max } = this.props;
    const { value } = this.state;
    return (
      <Style.Wrapper>
        <h3>
          Please enter the {dataExists ? 'next': 'first'} number
        </h3>
        <Input
          ref={this.inputRef}
          action={{
            icon: 'save',
            content: 'Save',
            onClick: this.handleInputActionClick,
            color: 'blue',
            disabled,
          }}
          min={min}
          max={max}
          placeholder={`Input a number...`}
          type={`number`}
          value={value || ''}
          onChange={this.handleInputChange}
          onKeyDown={this.handleInputKeyDown}
          autoFocus
          tabIndex={0}
          disabled={disabled}
        />
      </Style.Wrapper>
    );
  }
}

export default InputNumber;
