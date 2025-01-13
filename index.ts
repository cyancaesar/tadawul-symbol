import { fetchSymbols } from "./src";

(async () => {
  // Fetch all Main Market "TASI" symbols
  const tasiSymbols = await fetchSymbols("TASI");

  // Fetch all Parallel Market "NOMUC" symbols
  const nomucSymbols = await fetchSymbols("NOMUC");

  console.log("tasiSymbols: ", tasiSymbols.length);
  console.log("nomucSymbols: ", nomucSymbols.length);
})();
