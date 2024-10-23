fetch('/config.json') // 替换为实际路径
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const websiteList = document.getElementById('website-list');
        const sites = data.sites;

        for (let i = 0; i < sites.length; i += 2) {
            const row = document.createElement('div');
            row.className = 'website-row';

            for (let j = 0; j < 2; j++) {
                if (i + j < sites.length) {
                    const site = sites[i + j];
                    const item = document.createElement('div');
                    item.className = 'website-item';
                    item.innerHTML = `<a href="${site.link}" target="_blank" class="icon">${site.title}</a>`;
                    row.appendChild(item);
                }
            }

            websiteList.appendChild(row);
        }
    })
    .catch(error => console.error('Error loading config:', error));