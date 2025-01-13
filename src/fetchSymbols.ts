import { fetchUrl } from "./fetchUrl";
import {
  MarketType,
  TadawulResponse,
  RefResponse,
  TadawulSymbol,
} from "./types";

/**
 * Fetches an array of symbol data from a remote source based on the given market and locale.
 *
 * @param {MarketType} market - The specific market type (e.g., TASI, NOMUC).
 * @returns {Promise<TadawulSymbol[]>} A Promise that resolves to an array of SymbolData.
 * @throws Will throw an error if the fetch request fails or the response status is not OK.
 */
export async function fetchSymbols(
  market: MarketType,
): Promise<TadawulSymbol[]> {
  const urls = await fetchUrl(market);
  try {
    const refResponse = await fetch(urls[2]);
    if (!refResponse.ok)
      throw new Error(`Failed to ref symbols: ${refResponse.statusText}`);

    const referenceArray: RefResponse[] = await refResponse.json();

    const responseAr = await fetch(urls[0]);
    if (!responseAr.ok)
      throw new Error(`Failed to fetch symbols: ${responseAr.statusText}`);

    const responseEn = await fetch(urls[1]);
    if (!responseEn.ok)
      throw new Error(`Failed to fetch symbols: ${responseEn.statusText}`);

    const dataAr: TadawulResponse = await responseAr.json();
    const dataEn: TadawulResponse = await responseEn.json();

    const result = dataAr.data.map((row) => {
      const reference = referenceArray.find((el) => el.symbol === row.symbol);
      if (!reference)
        throw new Error(`Failed to find ref symbol: ${row.symbol}`);

      const elementEn = dataEn.data.find((el) => el.symbol === row.symbol);

      if (!elementEn)
        throw new Error(`Failed to find ref symbol: ${row.symbol}`);

      const {
        symbol,
        companyNameAR: nameAr,
        companyNameEN: nameEn,
        tradingNameAr,
        tradingNameEn,
        isin,
      } = reference;

      const result: TadawulSymbol = {
        symbol,
        nameAr,
        nameEn,
        tradingNameAr,
        tradingNameEn,
        sectorAr: row.sectorName,
        sectorEn: elementEn.sectorName,
        isin,
        marketType: market,
        profileUrl: new URL(row.companyURL, "https://www.saudiexchange.sa")
          .href,
      };

      return result;
    });
    return result;
  } catch (error) {
    throw new Error(`Failed to fetch symbols`);
  }
}
