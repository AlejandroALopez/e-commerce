import { MongoClient, ObjectId } from "mongodb";

// Get all products of a given type
export async function getProductsHandler(type: string | undefined) {
  const client = await MongoClient.connect(process.env.MONGO_URL || "");

  const db = client.db();
  const productsCollection = db.collection("products");

  // const products = await productsCollection
  //   .find({
  //     type: type,
  //   })
  //   .toArray();

  const products = await productsCollection.find({type}).toArray();

  client.close();
  return products;
}

// Get one product
export async function getOneProductHandler(productId: string) {
  const client = await MongoClient.connect(process.env.MONGO_URL || "");

  const db = client.db();
  const productsCollection = db.collection("products");

  const selectedProduct = await productsCollection.findOne({
    _id: new ObjectId(productId),
  });

  client.close();
  return selectedProduct;
}
