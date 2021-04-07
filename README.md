New repository template
=======================
Tento repozitář obsahuje základní projektové nastavení. Některé projekty samozřejmě budou vyžadovat samostatnější přístup, nicméně pro většinu (především javascriptovým) projektů toto základní nastavení stačí.

---
## Instalace
Po vytvoření repozitáře spustíme v terminálu příkaz:
```plain
$ yarn
```

**Co vše se tímto příkazem stane:**
- nainstalují se node_modules
- vygeneruje se yarn.lock (který chceme verzovat v GITu)
- nainstaluje se Husky
- spustí se script `config.sh`, který nám pomůže promazat nastavení dle typu projektu
  - NodeJS
  - React nebo HTML/CSS/JS
  - ostatní
- po vybrání typu proběhne promazání a začištění

> Script pro nastavení projektu se spustí pouze při prvním spuštění `yarn`, poté bude vymazán.

Po doběhnutí všech úloh nám vzniknou změny v některých souborech. Ty je samozřejmě potřeba commitnout.
