import SVG from 'react-inlinesvg';
import { NumericFormat } from 'react-number-format';

import type { ColumnsType } from 'antd/es/table';

import { DataType } from './Home.page.types';
import { renderPercentage } from './Home.page.utils';

export const HOME_CONSTANTS = Object.freeze({
  tagCategories: [
    'Terbaru',
    'DeFi',
    'NFT Gaming',
    'CEX',
    'DEX',
    'Layer-1',
    'Infrastructure',
    'Lending',
    'Layer-2',
    'Stablecoin',
  ],
});

export const currenciesColumn: ColumnsType<DataType> = [
  {
    title: '',
    dataIndex: 'icon',
    key: 'icon',
    width: '5%',
    render: value => (
      <SVG
        src={value.image}
        preProcessor={code =>
          code.replace(/fill=".*?"/g, 'fill="' + value.color + '"')
        }
      />
    ),
    responsive: ['xs', 'sm', 'md', 'lg'],
  },
  {
    title: 'Crypto',
    dataIndex: 'crypto',
    key: 'crypto',
    width: '25%',
    sorter: (a, b) => {
      return a.crypto.localeCompare(b.crypto);
    },
    responsive: ['xs', 'sm', 'md', 'lg'],
  },
  {
    title: '',
    dataIndex: 'symbols',
    key: 'symbols',
    width: '10%',
    responsive: ['xs', 'sm', 'md', 'lg'],
  },
  {
    title: 'Harga',
    dataIndex: 'price',
    key: 'price',
    sorter: (a, b) => Number(a.price) - Number(b.price),
    render: value => (
      <NumericFormat
        value={value}
        displayType="text"
        allowLeadingZeros={false}
        thousandSeparator="."
        decimalSeparator=","
        fixedDecimalScale
        prefix="Rp "
      />
    ),
    responsive: ['xs', 'sm', 'md', 'lg'],
  },
  {
    title: '24 JAM',
    dataIndex: 'hour',
    key: 'hour',
    sorter: (a, b) => Number(a.hour) - Number(b.hour),
    render: renderPercentage,
    responsive: ['sm', 'md', 'lg'],
  },
  {
    title: '1 MGG',
    dataIndex: 'week',
    key: 'week',
    sorter: (a, b) => Number(a.week) - Number(b.week),
    render: renderPercentage,
    responsive: ['md', 'lg'],
  },
  {
    title: '1 BLN',
    dataIndex: 'month',
    key: 'month',
    sorter: (a, b) => Number(a.month) - Number(b.month),
    render: renderPercentage,
    responsive: ['md', 'lg'],
  },
  {
    title: '1 THN',
    dataIndex: 'year',
    key: 'year',
    sorter: (a, b) => Number(a.year) - Number(b.year),
    render: renderPercentage,
    responsive: ['md', 'lg'],
  },
];
