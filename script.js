const container = document.getElementById('container');

const socialMedia = [
    {
        name: 'YouTube',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png',
        url: 'https://www.youtube.com'
    },
    {
        name: 'Instagram',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
        url: 'https://www.instagram.com'
    },
    {
        name: 'Facebook',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
        url: 'https://www.facebook.com'
    }
];

socialMedia.forEach(media => {
    const card = document.createElement('div');
    card.className = `card ${media.name.toLowerCase()}`;
    card.onclick = () => window.location.href = media.url;

    const img = document.createElement('img');
    img.src = media.logo;
    img.alt = `${media.name} Logo`;
    img.className = 'logo';

    card.appendChild(img);
    container.appendChild(card);
});