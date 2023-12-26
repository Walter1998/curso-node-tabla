const fs = require('fs');


const crearArchivo = async(base = 5)=>{

    try{
            console.log('-----------------------------------');
            console.log(`Tabla del ${base}`);
            console.log('-----------------------------------');
            
            let salida = '';
            
        
            console.clear;
            for (let index = 1; index < 11; index++) {
                
                salida += `${base} X ${index} = ${base * index}\n`;
                
            }
            fs.writeFileSync('tabla-5.txt', salida);
            return `tabla -${base}.txt`;    
        }catch(err){
            throw err;
    }
    
}

module.exports = {
    crearArchivo
}