import { message, createDataItemSigner, result } from '@permaweb/aoconnect'
import fs from 'fs'

const wallet = JSON.parse(fs.readFileSync('/home/gitpod/.wallet.json', 'utf-8'))

async function main() {
  let id = await message({
    process: 'OEAzad6-_TyZvdX-RJbXS3lc6plwsKy3xZHty0_ljDI',
    tags: [],
    data: 'ping',
    signer: createDataItemSigner(wallet)
  })
  let res = await result({
    process: 'OEAzad6-_TyZvdX-RJbXS3lc6plwsKy3xZHty0_ljDI',
    message: id
  })
  console.log(res)

}

main()