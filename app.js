let Block = require('./block')
let Blockchain = require('./blockchain')
let Transaction = require('./transaction')

let transaction = new Transaction('Mary','sugang',100)

let genesisBlock = new Block()
let blockchain = new Blockchain(genesisBlock)


console.dir(blockchain)