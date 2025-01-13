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
  AR: "AR";
  EN: "EN";
}

/**
 * Represents the TASI and NOMUC URLs in both locales.
 */
export interface URLs {
  TASI: Locale;
  NOMUC: Locale;
  REF: string;
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
/**
 * the response object from Tadawul also.
 */
export interface RefResponse {
  symbol: string;
  companyNameEN: string;
  companyNameAR: string;
  companyName: string;
  market_type: string;
  tradingNameEn: string;
  tradingNameAr: string;
  isin: string;
}

/**
 * The returned interface from `fetchSymbols`
 */
export interface TadawulSymbol {
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
}
