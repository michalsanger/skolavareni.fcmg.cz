---
title: Automatizace vyhledávání
author: Michal Sänger
author_image_url: https://graph.facebook.com/611217057/picture/?height=200&width=200
---

Vyhledávací index se nyní aktualizuje automaticky při každé změně.

<!--truncate-->

Díky [Github Actions](https://github.com/features/actions) se mi podařilo automatizovat aktualizace vyhledávání. Takže teď kdykoliv nastane merge do `master`, Vercel se postará o deploy a jakmile je produkční deploy úspěšně hotov, Github [spustí akci](https://github.com/michalsanger/skolavareni.fcmg.cz/actions/workflows/search-refresh.yml), která web prohledá a zaktualizuje vyhledávací index.

Vše o technickém pozadí tohoto webu viz [Technické informace](/technicke-informace).
