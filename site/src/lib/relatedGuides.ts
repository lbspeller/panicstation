import suggestedGuidesCsv from "../data/suggested_guides_matrix.csv?raw";

export type RelatedGuideMatrixRow = {
  originalIndex: string;
  originalGuide: string;
  relatedIndexes: string[];
};

function parseCsv(value: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let index = 0; index < value.length; index += 1) {
    const character = value[index];

    if (inQuotes) {
      if (character === '"') {
        if (value[index + 1] === '"') {
          field += '"';
          index += 1;
        } else {
          inQuotes = false;
        }
      } else {
        field += character;
      }
      continue;
    }

    if (character === '"') {
      inQuotes = true;
      continue;
    }

    if (character === ",") {
      row.push(field);
      field = "";
      continue;
    }

    if (character === "\n") {
      row.push(field.replace(/\r$/, ""));
      rows.push(row);
      row = [];
      field = "";
      continue;
    }

    field += character;
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field.replace(/\r$/, ""));
    rows.push(row);
  }

  return rows;
}

function canonicaliseQuotes(value: string) {
  return value
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-");
}

export function guideLookupKey(value: unknown) {
  return canonicaliseQuotes(String(value || "").normalize("NFKC"))
    .replace(/^\s*what\s+to\s+do\s+if(?:\s*…|\s*\.{3})?\s*/i, "")
    .replace(/\s*\((?:UK|USA)\)\s*$/i, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLocaleLowerCase("en");
}

function loadMatrix() {
  const rows = parseCsv(suggestedGuidesCsv.replace(/^\uFEFF/, ""));
  const headers = rows.shift()?.map((value) => value.trim()) || [];
  const column = new Map(headers.map((header, index) => [header, index]));

  const requiredHeaders = [
    "original_index",
    "original_guide",
    "related_index_1",
    "related_index_2",
    "related_index_3",
    "related_index_4",
    "related_index_5",
  ];

  if (requiredHeaders.some((header) => !column.has(header))) {
    console.warn(
      "[PanicStation] suggested_guides_matrix.csv has unexpected columns; related guides are disabled.",
    );
    return {
      guideByIndex: new Map<string, string>(),
      rowByGuideKey: new Map<string, RelatedGuideMatrixRow>(),
    };
  }

  const guideByIndex = new Map<string, string>();
  const matrixRows: RelatedGuideMatrixRow[] = [];

  for (const csvRow of rows) {
    const originalIndex = String(csvRow[column.get("original_index")!] || "").trim();
    const originalGuide = String(csvRow[column.get("original_guide")!] || "").trim();

    if (!originalIndex || !originalGuide) continue;

    const relatedIndexes = requiredHeaders
      .slice(2)
      .map((header) => String(csvRow[column.get(header)!] || "").trim())
      .filter(Boolean);

    guideByIndex.set(originalIndex, originalGuide);
    matrixRows.push({ originalIndex, originalGuide, relatedIndexes });
  }

  const rowByGuideKey = new Map<string, RelatedGuideMatrixRow>();

  for (const matrixRow of matrixRows) {
    const key = guideLookupKey(matrixRow.originalGuide);
    if (key && !rowByGuideKey.has(key)) {
      rowByGuideKey.set(key, matrixRow);
    }
  }

  return { guideByIndex, rowByGuideKey };
}

const matrix = loadMatrix();

export function relatedGuideNamesForTitle(title: unknown) {
  const row = matrix.rowByGuideKey.get(guideLookupKey(title));
  if (!row) return [];

  const seen = new Set<string>();
  const relatedGuideNames: string[] = [];

  for (const relatedIndex of row.relatedIndexes) {
    const guideName = matrix.guideByIndex.get(relatedIndex);
    const key = guideLookupKey(guideName);

    if (!guideName || !key || seen.has(key) || key === guideLookupKey(title)) {
      continue;
    }

    seen.add(key);
    relatedGuideNames.push(guideName);
  }

  return relatedGuideNames.slice(0, 5);
}
