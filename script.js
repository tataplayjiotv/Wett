const url = 'https://cors-anywhere.herokuapp.com/http://65.109.49.230/~jasssain/channel.json';

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const container = document.getElementById('channels-container');
        data.forEach(channel => {
            const channelDiv = document.createElement('div');
            channelDiv.classList.add('channel');

            const logo = document.createElement('img');
            logo.src = channel["tvg-logo"];
            logo.alt = channel["tvg-name"];
            logo.classList.add('channel-logo');

            const name = document.createElement('p');
            name.textContent = channel["tvg-name"];

            const link = document.createElement('a');
            link.href = channel.url;
            link.textContent = "Watch Live";
            link.target = "_blank";

            channelDiv.appendChild(logo);
            channelDiv.appendChild(name);
            channelDiv.appendChild(link);
            container.appendChild(channelDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
