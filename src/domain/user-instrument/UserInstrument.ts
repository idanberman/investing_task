export interface UserInstrumentProps {
  instrumentId: number;
  name: string;
  symbol: string;
  instrumentType: string;
}

export class UserInstrument {
  get instrumentId() {
    return this._instrumentId;
  }

  get name() {
    return this._name;
  }

  get symbol() {
    return this._symbol;
  }

  get instrumentType() {
    return this._instrumentType;
  }

  public static create(userInstrumentProps: any) {
    const cleanProps: UserInstrumentProps = {
      instrumentId: undefined,
      name: String(userInstrumentProps.name),
      symbol: String(userInstrumentProps.symbol),
      instrumentType: String(userInstrumentProps.instrumentType),
    };

    const { name, symbol, instrumentType } = cleanProps;

    const errorList = [];

    if (name.length === 0 || name.length > 50) {
      errorList.push(
        "'name' is required and must not contain more than 50 characters"
      );
    }

    if (symbol.length === 0 || symbol.length > 20) {
      errorList.push(
        "'symbol' is required and must not contain more than 20 characters"
      );
    }

    if (instrumentType.length === 0 || instrumentType.length > 10) {
      errorList.push(
        "'instrumentType' is required and must not contain more than 10 characters"
      );
    }

    if (errorList.length > 0) {
      throw new Error(
        "Invalid input, please correct the following errors " +
          errorList.join(", ")
      );
    }

    return new UserInstrument(userInstrumentProps);
  }

  public static createFromSource(rawData: object): UserInstrument {
    const userInstrument: UserInstrument = new UserInstrument(rawData);
    Object.assign(userInstrument, rawData);
    return userInstrument;
  }

  private _instrumentId: number;
  private _name: string;
  private _symbol: string;
  private _instrumentType: string;

  private constructor({
    instrumentId,
    name,
    symbol,
    instrumentType,
  }: UserInstrumentProps) {
    this._instrumentId = instrumentId;
    this._name = name;
    this._symbol = symbol;
    this._instrumentType = instrumentType;
  }
}
