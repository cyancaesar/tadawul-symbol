# TadawulSymbol

TadawulSymbol is a TypeScript library for fetching up to date symbols from the Saudi Exchange (Tadawul).

External data sources that provide market data for the Saudi Stock Exchange often overlook critical details, such as whether a company has been delisted, acquired, or transitioned between markets, such as moving from the Parallel Market (Nomu) to the Main Market (Tadawul).

Using [Saudi Exchange](https://www.saudiexchange.sa/) "UNOFFICIAL API" to fetch the current listed and tradable symbols directly from the exchange website.

## Features

- Fetch market symbols for `TASI` and `NOMUC` markets.
- Support for both Arabic and English.

## Installation (Package Manager)

Use Yarn to install the package:

```bash
yarn add tadawul-symbol
```

Or with npm:

```bash
npm install tadawul-symbol
```

## Installation (Cloning Repository)

### Clone the Repository

To set up the project locally, first clone the repository:

```bash
git clone https://github.com/cyancaesar/tadawul-symbol.git
cd tadawul-symbol
```

### Install Dependencies

Install the required dependencies using Yarn:

```bash
yarn install
```

### Build

```bash
yarn build
```

### Run

```
yarn tsx index.ts
```

## Usage

```ts
import { fetchSymbols } from "tadawul-symbol";

// Fetch all Main Market "TASI" symbols
const tasiSymbols = await fetchSymbols("TASI");

// Fetch all Parallel Market "NOMUC" symbols
const nomucSymbols = await fetchSymbols("NOMUC");

/* 
Symbols are returned in this shape:
{
  symbol: string;
  nameAr: string;
  nameEn: string;
  tradingNameAr: string;
  tradingNameEn: string;
  sectorAr: string;
  sectorEn: string;
  isin: string;
  marketType: MarketType;
  profileUrl: string;
}[]
*/
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Author

[cyancaesar](https://github.com/cyancaesar)
