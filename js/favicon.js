fetch('/config.json')
    .then(response => response.json())
    .then(data => {
        const faviconLink = data.favicon.link;
        document.getElementById('favicon').href = faviconLink;
    })
    .catch(error => console.error('Error loading config:', error));