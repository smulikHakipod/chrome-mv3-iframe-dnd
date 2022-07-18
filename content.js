const iframe = document.createElement('iframe');
iframe.setAttribute('src', chrome.runtime.getURL('iframe.html'));
iframe.style.height = '300px';
iframe.style.width = '300px';
iframe.style.position = 'fixed';
iframe.style.zIndex = '99999';
iframe.style.top = '0';

document.body.appendChild(iframe);