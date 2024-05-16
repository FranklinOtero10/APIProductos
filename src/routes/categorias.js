const express = require('express');
const router = express.Router();
const queries = require('../repositories/CategoriasRepository');

//* ENDPOINT QUE MUESTRA LA LISTA DE CATEGORIAS
router.get('/lista', async (request, response) => {
    const categorias = await queries.obtenerCategorias();

    response.status(200).json(categorias);
});

//* ENDPOINT QUE INSERTA UNA CATEGORIA
router.post('/insertar', async (request, response) => {
    try {
      const { idCategoria, categoria } = request.body;

      const nuevaCategoria = {
        idCategoria: idCategoria,
        categoria: categoria, 
      };
  
      const resultado = await queries.insertarCategoria(nuevaCategoria);
      response.status(200).json({ success: true, message: "Categoria agregada exitosamente", resultado});
    } catch (error) {
        response.status(500).json({ success: false, message: "Ocurrió un problema al guardar", error: 
        {code: error.code, sqlMessage: error.sqlMessage}});
    }
});

//* ENDPOINT QUE MODIFICA UNA CATEGORIA
router.patch('/modificar/:idCategoria', async (request, response) => {
    try {
        const {idCategoria} = request.params;
        const {categoria} = request.body;


        const resultado = await queries.modificarCategoria(categoria, idCategoria);
        response.status(200).json({ success: true, message: 'Categoria modificada exitosamente', resultado});
    } catch (error) {
        response.status(400).json({ success: false, message: 'No se pudo modificar la categoria' });
    }
});

//* ENDPOINT QUE ELIMINA UNA CATEGORIA
router.delete('/eliminar/:idCategoria', async(request, response) => {
    try {
        const {idCategoria} = request.params;
        const eliminado = await queries.eliminarCategoria(idCategoria);
        if (eliminado) {
            response.status(200).json({ message: 'Categoría eliminada correctamente' });
        } else {
            response.status(404).json({ message: 'La categoría no pudo ser eliminada' });
        }
    } catch (error) {
        console.error('Error al eliminar la categoría:', error);
        res.status(500).json({ message: 'Ocurrió un error al procesar la solicitud' });
    }
});

module.exports = router;