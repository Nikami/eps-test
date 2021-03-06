export type FilterValue = string | number | boolean | null | Date;

export interface DefaultFilter {
  [key: string]: FilterValue;
}

export type Filter = CrossFilter | EqualityFilter | MaxPriceFilter;

function formatFilterValue(value: FilterValue): string {
  return String(value).toLowerCase();
}

class AbstractFilter {
  public readonly filter: DefaultFilter;

  constructor(filter: DefaultFilter) {
    this.filter = filter;
  }
}

export class EqualityFilter extends AbstractFilter {
  constructor(filter: DefaultFilter) {
    super(filter);
  }

  comparatorFn(item: object): boolean {
    const fields: string[] = Object.keys(this.filter);
    return fields.every(
      field =>
        formatFilterValue(this.filter[field]) === formatFilterValue(item[field])
    );
  }
}

export class MaxPriceFilter extends AbstractFilter {
  constructor(filter: DefaultFilter) {
    super(filter);
  }

  comparatorFn(item: object): boolean {
    const fields: string[] = Object.keys(this.filter);
    return fields.some(field => this.filter[field] >= item[field]);
  }
}

export class CrossFilter {
  private readonly fields: string[];
  private readonly value: FilterValue;
  private readonly isStrictMode: boolean;
  comparatorFn: (item: object) => boolean;

  constructor(fields: string[], value: FilterValue, isStrictMode?: boolean) {
    this.fields = fields;
    this.value = value;
    this.isStrictMode = isStrictMode !== undefined ? isStrictMode : true;
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
