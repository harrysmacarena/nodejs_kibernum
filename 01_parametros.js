// Observe que si lo corre en otro directorio no funciona
// ya que se importo la libreria solo en esta carpeta
//  cuidado con el .argv

// Yarg crea un grupo de todos los parámetros sin --
// otro grupo de todos los que tienen --
const cmdLine = require('yargs')
const opt_crear = {
	                        	base:{
	                        		demand:true,
	                        		alias:'b'
	                        	},
	                        	limite:{
	                        		//demand:false,
	                        		alias:'l',
	                        		default:100
	                        	}
	                        }
const argv_yarg = cmdLine
                   .command('listar'
	                        ,'Imprime los archivos de negocio'
	                        ,{
	                        	base:{
	                        		demand:true,
	                        		alias:'b'
	                        	},
	                        	limite:{
	                        		//demand:false,
	                        		alias:'l',
	                        		default:100
	                        	}
	                        })
                   // El alumno realiza el crear
                   .command('crear'
	                        ,'crear los archivos de '
	                        ,opt_crear)
                    .help() 
                    .argv

let argv_process = process.argv

console.log("argumentos Process" ,argv_process)
console.log("argumentos Yargs" ,argv_yarg)

//node 01_parametros.js --base=10 listar crear delete --personas 10 kk 10
//node 01_parametros.js --base=10 listar --personas 10 kk 10
//node 01_parametros.js --help
//node 01_parametros.js listar
//node 01_parametros.js --version
//node 01_parametros.js


//********************************************+
// NOOOOOOOOOO corresponde ../, pero funciona
const crear = require('../03_tabla_01_file')
// Destructuración
const {tablaArchivo} = require('../03_tabla_01_file')

let comando =argv_yarg._[0]
console.log(comando)
switch (comando){
	case 'listar':
	     console.log ("comando listar")
	     console.log ("base   ",argv_yarg.base)
	     console.log ("limite ",argv_yarg.limite)
	     let baseNro = argv_yarg.base
	     crear.tabla(baseNro)
	     break;
	case 'crear':
	     console.log ("comando crear")
	     break;
	case 'delete':
	     console.log ("comando delete")
	     break;
	default :
	     console.log ("comando desconocido")
	     break;
}

//********************************************+
//   El Alumno crea los comandos crear delete

// utiliza opt

// Por último crear un archivo para un requiere