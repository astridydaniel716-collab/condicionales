// Array de productos (base de datos en memoria)
        let inventario = [
            { id: 1, nombre: "Laptop HP", cantidad: 15, precio: 850 },
            { id: 2, nombre: "Mouse Logitech", cantidad: 50, precio: 25 },
            { id: 3, nombre: "Teclado Mecánico", cantidad: 30, precio: 60 },
            { id: 4, nombre: "Monitor 24\"", cantidad: 8, precio: 200 },
            { id: 5, nombre: "USB 32GB", cantidad: 100, precio: 15 },
            { id: 6, nombre: "Webcam HD", cantidad: 20, precio: 45 },
            { id: 7, nombre: "Audífonos", cantidad: 40, precio: 35 },
            { id: 8, nombre: "Impresora", cantidad: 5, precio: 150 }
        ];

        // Función para mostrar todos los productos
        function mostrarProductos(productos = inventario) {
            let tabla = `
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio ($)</th>
                            <th>Valor Total ($)</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            
            // Ciclo FOR para recorrer el array
            for (let i = 0; i < productos.length; i++) {
                let producto = productos[i];
                let valorTotal = producto.cantidad * producto.precio;
                let estado = "";
                
                // Condicionales para determinar estado del stock
                if (producto.cantidad <= 5) {
                    estado = "<span class='stock-bajo'>⚠️ Stock Crítico</span>";
                } else if (producto.cantidad <= 15) {
                    estado = "<span class='stock-medio'>🟡 Stock Medio</span>";
                } else {
                    estado = "<span class='stock-alto'>✅ Stock Alto</span>";
                }
                
                tabla += `
                    <tr>
                        <td>${producto.id}</td>
                        <td>${producto.nombre}</td>
                        <td>${producto.cantidad}</td>
                        <td>$${producto.precio}</td>
                        <td>$${valorTotal}</td>
                        <td>${estado}</td>
                    </tr>
                `;
            }
            
            tabla += `
                    </tbody>
                </table>
            `;
            
            document.getElementById('tablaProductos').innerHTML = tabla;
        }

        // Función para buscar producto
        function buscarProducto() {
            let busqueda = document.getElementById('productoBuscado').value.toLowerCase();
            let mensajeDiv = document.getElementById('mensaje');
            
            if (busqueda === "") {
                mensajeDiv.innerHTML = `<div class="error message">❌ Por favor ingresa un nombre de producto</div>`;
                mostrarProductos();
                return;
            }
            
            let resultados = [];
            
            // Ciclo WHILE para buscar productos
            let i = 0;
            while (i < inventario.length) {
                if (inventario[i].nombre.toLowerCase().includes(busqueda)) {
                    resultados.push(inventario[i]);
                }
                i++;
            }
            if (resultados.length > 0) {
                mensajeDiv.innerHTML = `<div class="success message">✅ Encontrados ${resultados.length} productos</div>`;
                mostrarProductos(resultados);
            } else {
                mensajeDiv.innerHTML = `<div class="error message">❌ No se encontraron productos con "${busqueda}"</div>`;
                mostrarProductos();
            }
        }

        // Función para mostrar productos con stock bajo
        function mostrarStockBajo() {
            let stockBajo = [];
            
            // Ciclo FOR con condicional
            for (let i = 0; i < inventario.length; i++) {
                if (inventario[i].cantidad <= 10) {
                    stockBajo.push(inventario[i]);
                }
            }
            
            let mensajeDiv = document.getElementById('mensaje');
            
            if (stockBajo.length > 0) {
                mensajeDiv.innerHTML = `<div class="info message">⚠️ Hay ${stockBajo.length} productos con stock bajo</div>`;
                mostrarProductos(stockBajo);
            } else {
                mensajeDiv.innerHTML = `<div class="success message">✅ Todos los productos tienen stock adecuado</div>`;
                mostrarProductos();
            }
        }

        // Función para agregar nuevo producto
        function agregarProducto() {
            let nombre = document.getElementById('nuevoProducto').value.trim();
            let cantidad = parseInt(document.getElementById('cantidadProducto').value);
            let mensajeDiv = document.getElementById('mensaje');
            
            // Validaciones con condicionales
            if (nombre === "") {
                mensajeDiv.innerHTML = `<div class="error message">❌ El nombre del producto es obligatorio</div>`;
                return;
            }
            
            if (isNaN(cantidad) || cantidad < 0) {
                mensajeDiv.innerHTML = `<div class="error message">❌ La cantidad debe ser un número válido</div>`;
                return;
            }
            
            // Verificar si el producto ya existe
            let existe = false;
            for (let i = 0; i < inventario.length; i++) {
                if (inventario[i].nombre.toLowerCase() === nombre.toLowerCase()) {
                    existe = true;
                    inventario[i].cantidad += cantidad;
                    break;
                }
            }
            
            // Si no existe, crear nuevo producto
            if (!existe) {
                let nuevoId = inventario.length > 0 ? inventario[inventario.length - 1].id + 1 : 1;
                let precioAleatorio = Math.floor(Math.random() * 100) + 20; // Precio entre $20 y $120
                
                inventario.push({
                    id: nuevoId,
                    nombre: nombre,
                    cantidad: cantidad,
                    precio: precioAleatorio
                });
            }
            
            mensajeDiv.innerHTML = `<div class="success message">✅ Producto agregado/actualizado correctamente</div>`;
            document.getElementById('nuevoProducto').value = "";
            document.getElementById('cantidadProducto').value = "";
            mostrarProductos();
        }

        // Mostrar productos al cargar la página
        window.onload = function() {
            mostrarProductos();
        };