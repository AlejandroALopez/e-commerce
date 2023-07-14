interface Component {
  name: string;
  price: number;
}

export interface Laptop {
  id: string;
  title: string;
  type: string;
  basePrice: number;
  baseComponents: {
    [key: string]: Component;
  };
  availableComponents: {
    [key: string]: Component[];
  };
}
