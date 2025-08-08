# Configuração do Google Tag Manager (GTM)

## ✅ Configuração Concluída

O Google Tag Manager foi configurado com sucesso no seu site Next.js com o ID: **GTM-NN6WXLBV**

### Arquivos Modificados:

1. **`src/components/GoogleTagManager.tsx`** - Componente que carrega o GTM
2. **`src/app/layout.tsx`** - Layout principal que inclui o componente GTM
3. **`.env.local`** - Arquivo de variáveis de ambiente com o ID do GTM

### Como Verificar se o GTM Está Funcionando:

1. **Abra o site** em `http://localhost:3000`
2. **Abra o DevTools** (F12)
3. **Vá para a aba Console** e digite: `dataLayer`
4. **Você deve ver um array** com pelo menos um objeto contendo `gtm.start`

### Verificação Adicional:

1. **Instale a extensão "Tag Assistant Legacy"** no Chrome
2. **Ative a extensão** e recarregue a página
3. **Você deve ver o ícone do GTM** na barra de extensões

### Para Produção:

Quando fizer o deploy, certifique-se de que a variável de ambiente `NEXT_PUBLIC_GTM_ID` está configurada no seu provedor de hospedagem (Vercel, Netlify, etc.) com o valor: `GTM-NN6WXLBV`

### Estrutura do Código:

- O script do GTM é carregado usando o componente `Script` do Next.js
- A estratégia `afterInteractive` garante que o script seja carregado após a página estar interativa
- O fallback `noscript` é incluído para usuários com JavaScript desabilitado

### Próximos Passos:

1. Configure suas tags, triggers e variáveis no painel do GTM
2. Teste eventos personalizados se necessário
3. Configure conversões e rastreamento de eventos importantes do site 