# Install Custom AO Module

* Docker should be installed and running

```
curl -L https://install_ao.g8way.io | bash
# add bash env
source ~/.bashrc
ao init foo
cd foo
ao build
ao publish -w ~/.wallet.json process.wasm -t Memory-Limit -v 1-gb -t Compute-Limit -v 9000000000000 -t Module-Format -v wasm64-unknown-emscripten-draft_2024_02_15
```