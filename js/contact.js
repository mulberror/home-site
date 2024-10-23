fetch('/config.json')
    .then(response => response.json())
    .then(config => {
        const contact = config.contact;
        const iconsContainer = document.getElementById('icons-container');

        for (const key in contact) {
            if (contact.hasOwnProperty(key)) {
                const iconData = contact[key];
                const linkElement = document.createElement('a');
                linkElement.href = iconData.link; // 设置链接
                linkElement.target = '_blank'; // 在新标签页中打开链接

                const iconElement = document.createElement('span');
                iconElement.className = 'icon';
                iconElement.innerHTML = `<img src="${iconData.icon}" alt="${key} icon">`;
                iconElement.dataset.name = key; // 存储图标名称

                linkElement.appendChild(iconElement);
                iconsContainer.appendChild(linkElement);
            }
        }
    })
    .catch(error => console.error('Error loading config:', error));
