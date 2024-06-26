import { spawn, createDataItemSigner } from '@permaweb/aoconnect'
import fs from 'fs'

const wallet = JSON.parse(fs.readFileSync('/home/gitpod/.wallet.json', 'utf-8'))

async function main() {
  let id = await spawn({
    module: '7GVh9uCejCRwanPMak192Kp4rHJHxZuzw82-ho3MJr4',
    tags: [],
    data: '1984',
    scheduler: '_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA',
    signer: createDataItemSigner(wallet)
  })
  console.log('spawned: ', id)
}

main()