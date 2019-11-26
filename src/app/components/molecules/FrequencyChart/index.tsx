import React from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { FrequencyChartData } from 'app/store/Numbers/dataTypes';
import * as Style from './style';

export interface Props {
  data: FrequencyChartData,
  color: React.CSSProperties['color'],
};

const FrequencyChart: React.FC<Props> = ({
  data,
  color,
}) => (
  <Style.Wrapper>
    {data.length ? (
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            left: 16,
            bottom: 16,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
          />
          <XAxis dataKey="number" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="frequency" fill={color} />
        </BarChart>
      </ResponsiveContainer>
    ): null}
  </Style.Wrapper>
);

export default FrequencyChart;
