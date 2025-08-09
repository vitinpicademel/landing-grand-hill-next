# Teste do Google Tag Manager (GTM)

## 🔍 Como Verificar se o GTM Está Funcionando

### 1. **Acesse o Site**
- Vá para: `grandhill.donnanegociacoes.com.br`
- Ou aguarde o deploy do Vercel (pode levar alguns minutos)

### 2. **Abra o DevTools (F12)**
- Pressione `F12` no navegador
- Vá para a aba **Console**

### 3. **Verifique os Logs de Debug**
Você deve ver mensagens como:
```
GTM ID: GTM-NN6WXLBV
DataLayer inicializado: []
GTM Script carregado
DataLayer após carregamento: [Array com objetos]
GTM carregado com sucesso!
```

### 4. **Teste Manual do DataLayer**
No console, digite:
```javascript
dataLayer
```
Você deve ver um array com pelo menos um objeto contendo `gtm.start`

### 5. **Verificação Adicional**
Digite no console:
```javascript
window.dataLayer
```
Deve retornar um array com objetos do GTM.

## 🚨 Possíveis Problemas

### **Se não aparecer nada no console:**
1. Verifique se o site foi atualizado (Ctrl+F5)
2. Aguarde alguns minutos para o deploy
3. Verifique se não há bloqueadores de anúncios

### **Se aparecer erro:**
1. Verifique se o ID `GTM-NN6WXLBV` está correto
2. Verifique se o domínio está autorizado no GTM

## 🛠️ Próximos Passos

Se o GTM não estiver funcionando, você pode:
1. **Reenviar o código do GTM** - Se quiser, posso usar o código exato que você forneceu
2. **Verificar configurações** - Posso revisar a implementação
3. **Testar localmente** - Posso rodar o projeto localmente para debug

## 📞 Suporte

Se precisar de ajuda, me informe:
- O que aparece no console
- Se há erros
- Se o GTM está funcionando no painel do Google

---

**ID do GTM:** `GTM-NN6WXLBV`
**Status:** Aguardando teste 