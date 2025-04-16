
const url = 'https://cdn.waplus.io/waplus-crm/settings/ossembed.js';
const s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
const options = {
"enabled": true,
"chatButtonSetting": {
"backgroundColor": "#16BE45",
"ctaText": "Message",
"borderRadius": "8",
"marginLeft": "20",
"marginBottom": "20",
"marginRight": "20",
"position": "right",
"textColor": "#ffffff",
"phoneNumber": "+5581987206675",
"messageText": "",
"trackClick": true
}
}
s.onload = function() {
CreateWhatsappBtn(options);
};
const x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);
