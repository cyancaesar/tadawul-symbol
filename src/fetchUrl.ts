import { RAW_GIST_URL } from "./constants";
import { MarketType, URLs } from "./types";

/**
 * Fetches a URL (as a string) based on the specified market.
 * This function retrieves and returns the matching URL for the requested parameters.
 *
 * @param {MarketType} market - The market type for which the URL is requested (e.g., 'TASI', 'NOMUC').
 * @returns {Promise<string[]>} A Promise that resolves to the decoded URL string.
 * @throws Will throw an error if the network request fails or the Gist response is not OK.
 */
export async function fetchUrl(market: MarketType): Promise<string[]> {
  const response = await fetch(RAW_GIST_URL);
  if (!response.ok)
    throw new Error(`Failed to fetch URLs: ${response.statusText}`);

  const data: URLs = await response.json();

  return [
    Buffer.from(data[market]["AR"], "base64").toString("utf-8"),
    Buffer.from(data[market]["EN"], "base64").toString("utf-8"),
    Buffer.from(data["REF"], "base64").toString("utf-8"),
  ];
}
