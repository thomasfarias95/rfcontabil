
const url = 'https://cdn.waplus.io/waplus-crm/settings/ossembed.js';
const s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
const options = {
    "enabled": true,
    "chatButtonSetting": {
        "backgroundColor": "#16BE45",
        "ctaText": "Mensagem",
        "borderRadius": "8",
        "marginLeft": "20",
        "marginBottom": "20",
        "marginRight": "20",
        "position": "right",
        "textColor": "#ffffff",
        "phoneNumber": "+5581987206675",
        "messageText": "Olá, como posso lhe ajudar? Selecione uma dessas opções para saber como lhe orientar da melhor forma:[1] - Abertura, alteração e baixa de empresas.[2]- Imposto de renda.[3]- MEI.[4]- Contabilidade em geral.[5]-Departamento fiscal.[6]- Departamento pessoal.[7]- Regularização de empresas.[8]-Parcelamentos.[9]-  Outros serviços.",
        "trackClick": true
    }
}
s.onload = function () {
    CreateWhatsappBtn(options);
};
const x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);
