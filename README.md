New repository template
=======================

Tento repozitář obsahuje základní projektové nastavení.



Promazání nepotřebných věcí
---------------------------

Template obsahuje nastavení pro různé typy projektů, takže některé nepotřebné je možno smazat/upravit. Pro dva nejčastější typy je připraven jednoduchý script, který vše zařídí.



### Pro React projekty

```plain
./config.sh react
```

### Pro NodeJS projekty

```plain
./config.sh nodejs
```

---
## Instalace
Na začátku (po případném promazní configů) je potřeba nainstalovat tyto věci:

### Dependencies
```plain
yarn
```

### Husky (pre-commit hook)
```plain
husky install .github/husky
```
