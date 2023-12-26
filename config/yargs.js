const argv = require('yargs')
                    .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true})
                    .check((argv, options)=>{
                        if (isNaN(argv.b)) {
                            throw 'la base tiene que ser un numero'
                        }
                        return true;
                    })
                    .argv;

module.exports = argv;