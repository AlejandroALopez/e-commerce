export const bucket =
  "https://ecommerce-portolio-images.s3.us-east-2.amazonaws.com";

export function getFolderName(type: string): string {
  switch (type) {
    case "Laptop":
      return "laptops";
    case "Mouse":
      return "mice";
    case "Keyboard":
      return "keyboards";
    default:
      return "";
  }
}
