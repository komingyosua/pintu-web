import { CaretDownFilled, CaretUpFilled } from '@ant-design/icons';

import { IPriceChanges } from './Home.page.types';

export const mapCurrency =
  (priceChangesData: IPriceChanges) =>
  (
    value: {
      logo: string;
      color: string;
      name: string;
      currencySymbol: string;
    },
    index: number,
  ) => ({
    key: index + 1,
    icon: {
      image: value.logo,
      color: value.color,
    },
    crypto: value.name,
    symbols: value.currencySymbol,
    price: priceChangesData.payload[index].latestPrice,
    hour: priceChangesData.payload[index].day,
    week: priceChangesData.payload[index].week,
    month: priceChangesData.payload[index].month,
    year: priceChangesData.payload[index].year,
  });

export const renderPercentage = (value: string | number) => {
  const isBelowZero = Number(value) < 0;
  return (
    <div className={isBelowZero ? 'negative' : 'positive'}>
      {isBelowZero ? <CaretDownFilled /> : <CaretUpFilled />} {value}%
    </div>
  );
};
