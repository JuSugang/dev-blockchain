let Block = require('./block')
let Blockchain = require('./blockchain')
let Transaction = require('./transaction')

let transaction = new Transaction('Mary','sugang',100)

let genesisBlock = new Block()
let blockchain = new Blockchain(genesisBlock)

let block = blockchain.getNectBlock([transaction])
blockchain.addBlock(block)

let anotherTransaction = new Transaction("Azam","dana",10)
let block1 = blockchain.getNectBlock([anotherTransaction,transaction])
blockchain.addBlock(block1)
console.dir(blockchain.blocks[2])