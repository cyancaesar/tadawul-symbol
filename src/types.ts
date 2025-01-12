/**
 * The shape of a single symbol entry.
 */
export interface SymbolData {
  symbol: string;
  companyName: string;
  companyURL: string;
  sectorName: string;
  sectorURL: string;
}

/**
 * Translations for Arabic (AR) and English (EN).
 */
export interface Locale {
  AR: string;
  EN: string;
}

/**
 * Represents the TASI and NOMUC URLs in both locales.
 */
export interface URLs {
  TASI: Locale;
  NOMUC: Locale;
}

/**
 * The market type in Saudi Exchange.
 */
export type MarketType = "TASI" | "NOMUC";

/**
 * The response object from Tadawul.
 */
export interface TadawulResponse {
  recordsFiltered: number;
  data: SymbolData[];
  draw: string;
  recordsTotal: number;
}
