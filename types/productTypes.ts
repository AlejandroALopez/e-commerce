export interface Component {
  name: string;
  price: number;
}

export interface Product {
  id: string;
  title: string;
  type: string;
  basePrice: number;
  images: string[]; // array of image files as they are named in S3
  baseComponents: {
    [key: string]: Component;
  };
  availableComponents?: {
    [key: string]: Component[];
  };
}