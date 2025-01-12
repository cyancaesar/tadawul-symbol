import { fetchSymbols } from "./src";

(async () => {
  // Fetch all Main Market "TASI" symbols in Arabic "AR"
  const tasiSymbolsAR = await fetchSymbols("TASI", "AR");

  // Fetch all Main Market "TASI" symbols in English "EN"
  const tasiSymbolsEN = await fetchSymbols("TASI", "EN");

  // Fetch all Parallel Market "NOMUC" symbols in Arabic "AR"
  const nomucSymbolsAR = await fetchSymbols("NOMUC", "AR");

  // Fetch all Parallel Market "NOMUC" symbols in English "EN"
  const nomucSymbolsEN = await fetchSymbols("NOMUC", "EN");

  // Number of symbols returned
  console.log("tasiSymbolsAR:", tasiSymbolsAR.recordsTotal);
  console.log("tasiSymbolsEN:", tasiSymbolsEN.recordsTotal);
  console.log("nomucSymbolsAR:", nomucSymbolsAR.recordsTotal);
  console.log("nomucSymbolsEN:", nomucSymbolsEN.recordsTotal);
})();
