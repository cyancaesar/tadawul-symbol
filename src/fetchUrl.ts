import { RAW_GIST_URL } from "./constants";
import { Locale, MarketType, URLs } from "./types";

/**
 * Fetches a URL (as a string) based on the specified market and locale.
 * This function retrieves and returns the matching URL for the requested parameters.
 *
 * @param {MarketType} market - The market type for which the URL is requested (e.g., 'TASI', 'NOMUC').
 * @param {keyof Locale} locale - The locale key ('AR' or 'EN') used to select the correct URL.
 * @returns {Promise<string>} A Promise that resolves to the decoded URL string.
 * @throws Will throw an error if the network request fails or the Gist response is not OK.
 */
export async function fetchUrl(
  market: MarketType,
  locale: keyof Locale,
): Promise<string> {
  const response = await fetch(RAW_GIST_URL);
  if (!response.ok)
    throw new Error(`Failed to fetch URLs: ${response.statusText}`);

  const data: URLs = await response.json();

  return Buffer.from(data[market][locale], "base64").toString("utf-8");
}
