const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

const productosNombre = [
  "banana",
  "cebollas",
  "lechuga",
  "papas",
  "pimenton",
  "tomate",
];

app.listen(3000, () => {
  console.log("El servidor está inicializando en el puerto 3000");
});

app.set("view engine", "handlebars");

app.use("/", express.static(__dirname + "/Assets/"));
app.use(
  "/bootstrap",
  express.static(__dirname + "/node_modules/bootstrap/dist/css")
);
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));
// 5. Consumir los códigos fuentes de BootstrapyjQueryatravésderutasomiddlewares
// creados en el servidor. Estas dependencias deben serinstaladas con NPM.
app.use(
  "/bootstrapJS",
  express.static(__dirname + "/node_modules/bootstrap/dist/js")
);

app.engine(
  "handlebars",
  exphbs.engine({
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/componentes/",
    helpers: {
      mensajeBienvenida: () =>
        `Bienvenido al mercado WEB, Seleccione sus productos`,
    },
  })
);
// 1. Crear una ruta raíz que al ser consultada renderice una vista con un parcial
// “Dashboard” enviándoleenelrenderunarregloconlosnombresdelosproductos.Se
// recomienda que estos coincidan con las imágenes decada producto.
app.get("/", (_, res) => {
  res.render("Dashboard", { productos: productosNombre });
});







