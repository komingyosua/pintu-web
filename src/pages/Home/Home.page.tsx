import React from 'react';
import { useQuery } from 'react-query';

import { Input, Table, Typography } from 'antd';

import { getPriceChanges } from '../../core/actions/trade.action';
import { getSupportedCurrencies } from '../../core/actions/wallet.action';
import { Container, Tag } from '../../stories/components';
import config from './Home.page.config';
import { HOME_CONSTANTS, currenciesColumn } from './Home.page.constants';
import './Home.page.styles.scss';
import { mapCurrency } from './Home.page.utils';

const Home: React.FC = () => {
  const { tagCategories } = HOME_CONSTANTS;

  const [resultData, setResultData] = React.useState([]);
  const [search, setSearch] = React.useState('');

  const supportedCurrencies = useQuery(
    'supportedCurrencies',
    getSupportedCurrencies,
  );
  const priceChanges = useQuery('priceChanges', getPriceChanges);

  const [
    { isLoading: loadingSupportedCurrencies, data: supportedCurrenciesData },
    { isLoading: loadingPriceChanges, data: priceChangesData },
  ] = [supportedCurrencies, priceChanges];

  const filterIDR = (value: { currencySymbol: string }) =>
    value.currencySymbol !== 'Rp';

  const getData = React.useMemo(
    () =>
      !loadingSupportedCurrencies &&
      !loadingPriceChanges &&
      supportedCurrenciesData.payload
        .filter(filterIDR)
        .map(mapCurrency(priceChangesData)),
    [
      loadingSupportedCurrencies,
      loadingPriceChanges,
      supportedCurrenciesData,
      priceChangesData,
    ],
  );

  React.useEffect(() => {
    if (loadingSupportedCurrencies && loadingPriceChanges) return;
    setResultData(getData);
  }, [loadingSupportedCurrencies, loadingPriceChanges, getData]);

  const handleOnChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let data = [];

      data = getData.filter((value: { crypto: string }) =>
        Object.values(value)
          .join('')
          .toLowerCase()
          .includes(e.target.value.toLowerCase()),
      );

      setSearch(e.target.value);
      setResultData(data);
    },
    [getData],
  );

  return (
    <div className="home">
      <Container>
        <div className="home__title-wrapper">
          <Typography.Title level={3} className="home__title">
            Harga Crypto dalam Rupiah Hari Ini
          </Typography.Title>
          <div>
            <Input
              placeholder="Cari aset di Pintu..."
              value={search}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="home__filter">
          {tagCategories.map((tag, index) => (
            <Tag key={tag} index={index} label={tag} checked={false} />
          ))}
        </div>
        <Table
          columns={currenciesColumn}
          dataSource={resultData}
          pagination={false}
        />
      </Container>
    </div>
  );
};

Home.propTypes = config.propTypes;
Home.defaultProps = config.defaultProps;
Home.displayName = config.displayName;

export default React.memo(Home);
