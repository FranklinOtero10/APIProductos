const pool = require('../config/databaseController');

module.exports = {
    //* Consulta para obtener todas las categorias de los productos
    obtenerCategorias: async() => {
        try {
            const categorias = await pool.query('SELECT idCategoria, categoria from categorias;');
            return categorias;            
        } catch (error) {
            console.error('Ocurrio un problema al consultar la lista de categorias', error);
            throw error;
        }
    },

    //*Consulta para insertar categorias
    insertarCategoria: async(nuevaCategoria) => {
        try{
            const result = await pool.query("INSERT INTO categorias SET ? ", nuevaCategoria);
            return result.insertId;        
        } catch(error){
            console.error('No se pudo insertar el registro', error);      
            throw error;
         }
    },

    //*Consulta para modificar categorias
    modificarCategoria: async(categoria, idCategoria) => {
        try {
          const resultado = await pool.query('UPDATE categorias SET categoria = ? WHERE idCategoria = ?', [categoria, idCategoria]);
  
          return resultado.affectedRows > 0;
        } catch (error) {
          console.log('Ocurrio un problema al actualizar la contraseña');
        }
      },
    
    //*Consulta para eliminar categorias
    eliminarCategoria: async(idCategoria) => {
        try {
          await pool.query('DELETE FROM categorias WHERE idCategoria = ?', idCategoria);
  
          return true;
        } catch (error) {
          console.log('Ocurrio un problema al eliminar la categoria');
          return false;
        }
      },
}