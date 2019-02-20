export type Filter = CrossFilter | AdditionalFilter;

export type FilterValue = string | number | boolean | null | Date;

export interface AdditionalFilter {
  [key: string]: FilterValue;
}

export function formatFilterValue(value: FilterValue): string {
  return String(value).toLowerCase();
}

export class CrossFilter {
  fields: string[];
  value: FilterValue;
  isStrictMode = true;
  comparatorFn: (item: object) => boolean;

  constructor(fields: string[], value: FilterValue, isStrictMode?: boolean) {
    this.fields = fields;
    this.value = value;
    this.isStrictMode =
      isStrictMode !== undefined ? isStrictMode : this.isStrictMode;
    this.comparatorFn = this.isStrictMode
      ? this.hasEqualsEntries
      : this.hasSomeEntries;
  }

  private hasEqualsEntries(item: object): boolean {
    return this.fields.every(
      field => formatFilterValue(item[field]) === formatFilterValue(this.value)
    );
  }

  private hasSomeEntries(item: object): boolean {
    return this.fields.every(field =>
      formatFilterValue(item[field]).includes(formatFilterValue(this.value))
    );
  }
}
