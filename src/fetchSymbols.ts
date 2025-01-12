import { fetchUrl } from "./fetchUrl";
import { MarketType, Locale, TadawulResponse } from "./types";

/**
 * Fetches an array of symbol data from a remote source based on the given market and locale.
 *
 * @param {MarketType} market - The specific market type (e.g., TASI, NOMUC).
 * @param {keyof Locale} locale - The locale to use for fetching (e.g., "AR" or "EN").
 * @returns {Promise<TadawulResponse>} A Promise that resolves to an array of SymbolData.
 * @throws Will throw an error if the fetch request fails or the response status is not OK.
 */
export async function fetchSymbols(
  market: MarketType,
  locale: keyof Locale,
): Promise<TadawulResponse> {
  const url = await fetchUrl(market, locale);
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Failed to fetch symbols: ${response.statusText}`);

    const data: TadawulResponse = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch symbols`);
  }
}
