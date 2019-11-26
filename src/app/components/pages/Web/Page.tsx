import React from 'react';
import { FrequencyChartData } from 'app/store/Numbers/dataTypes';
import Template from 'app/components/templates/LightMenu';
import InputNumber from 'app/components/organisms/InputNumber';
import FrequencyChart from 'app/components/molecules/FrequencyChart';
import FibonacciModal from 'app/components/molecules/FibonacciModal';
import palette from 'app/palette';
import * as Style from './style';

export interface Props {
  chartData: FrequencyChartData,
  fibSequence: number[],
  fibModal?: number,
  saveNumber: (n: number) => void,
  openModal: (n: number) => void,
  closeModal: () => void,
};

const Page: React.FC<Props> = ({
  chartData,
  fibSequence,
  fibModal,
  saveNumber,
  openModal,
  closeModal,
}) => {
  const min: number = fibSequence[0];
  const max: number = fibSequence[fibSequence.length - 1];
  const onSubmit = (n: number) => {
    saveNumber(n);
    fibSequence.includes(n) && openModal(n);
  };

  return (
    <Template>
      <Style.Wrapper>
        <InputNumber
          min={min}
          max={max}
          dataExists={!!chartData.length}
          disabled={!!fibModal}
          onSubmit={onSubmit}
        />
        <FrequencyChart
          data={chartData}
          color={palette.red}
        />
        {fibModal && (
          <FibonacciModal
            isOpen={!!fibModal}
            number={fibModal}
            onClose={closeModal}
          />
        )}
      </Style.Wrapper>
    </Template>
  );
};

export default Page;
