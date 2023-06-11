import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { connect } from "mongoose";

export default __dirname;

export async function connectMongo() {
  try {
    await connect(
       'mongodb+srv://Gonza81:3823@cluster0.zalvman.mongodb.net/Ecommerce'
  
    );
    console.log("Conectado a mongo");
  } catch (e) {
    console.log(e);
    throw new Error("Error de conexión");
  }
}
