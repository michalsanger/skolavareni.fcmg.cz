---
title: Technické informace
---

# Technické informace

Web je vytvořen pomocí nástroje [Docusaurus](https://docusaurus.io/) a zdrojový kód je volně přístupný na [Githubu](https://github.com/michalsanger/skolavareni.fcmg.cz).

O deployment a hosting se stará [Vercel](https://vercel.com/) pomocí [Github integrace](https://vercel.com/docs/git/vercel-for-github), takže každý push do masteru je automaticky deployován na produkci a pro každý pull request je automaticky vytvořena [preview URL](https://github.com/michalsanger/skolavareni.fcmg.cz/pull/2#issuecomment-822011674).

Automatická aktualizace závislostí se provadí diky [Dependabotu](https://github.com/michalsanger/skolavareni.fcmg.cz/blob/master/.github/dependabot.yml).

Monitoring a [E2E testy](https://github.com/michalsanger/skolavareni.fcmg.cz/runs/2380453195) zajišťuje [Checkly](https://www.checklyhq.com/). Spouštění pro každý PR a push do masteru je zajištěno pomocí [GH&nbsp;integrace](https://www.checklyhq.com/docs/cicd/github/).

Zmenšování a optimalizované zobrazování fotek je realizováno `@docusaurus/plugin-ideal-image` [pluginem](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image).

Vyhledávání zajišťuje Algolia díky [vestavěné podpoře přímo v Docusaurus](https://docusaurus.io/docs/search). Tento web nesplňuje podmínky [Algolia DocSearch](https://docsearch.algolia.com/) a proto je nutno [crawler](https://docsearch.algolia.com/docs/run-your-own/) spouštět [samostatně](https://github.com/michalsanger/skolavareni.fcmg.cz/blob/master/package.json#L15). Díky Github actions to naštěstí lze automatizovat a vyhledávací index se [aktualizuje po každém produkčním deploy](https://github.com/michalsanger/skolavareni.fcmg.cz/actions/workflows/search-refresh.yml).
