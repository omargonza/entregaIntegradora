const ProductManager = require("./ProductManager");
const data = new ProductManager("productsDB");

module.exports = (io) => {
io.on("connection", (socket) => {
    console.log(`New Client Connection with ID: ${socket.id}`);
  
    socket.on("new-product", async (newProd) => {
      try {
        await data.addProduct({ ...newProd });
        // Actualizando lista despues de agregar producto nuevo
        const productsList = await data.getProducts();
  
        io.emit("products", productsList);
      } catch (error) {
        console.log(error);
      }
    });
    socket.on("delete-product", async (delProd) => {
      try {
        let id = parseInt(delProd)
        // console.log(id)
        // console.log(typeof id)
        await data.deleteProduct(id);
        // Actualizando lista despues de agregar producto nuevo
        const productsList = await data.getProducts();
        console.log(productsList);
  
        io.emit("products", productsList);
      } catch (error) {
        console.log(error);
      }
    });
  });
}