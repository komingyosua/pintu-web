export interface IPriceChanges {
  payload: Array<Record<string, number>>;
}

interface DataTypeIcon {
  image: string;
  color: string;
}

export interface DataType {
  key: string;
  icon: DataTypeIcon;
  crypto: string;
  symbols: string;
  price: string;
  hour: string;
  week: string;
  month: string;
  year: string;
}
