export interface productActiveFilters {
  price: {
    min: number;
    max: number;
  };
  components: {
    [key: string]: string[]; // e.g. memory: ["8GB", "16GB", "32GB"]
  }
}

export interface PriceFilters {
  name: string,
  min: number,
  max: number,
}

export interface ComponentFilters {
  title: string, // text to display
  alias: string, // text for filtering
  options: string[],
}
