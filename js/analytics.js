// Set the same Google Analytics 4 Measurement ID here and in index.html.
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
if (GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
}
