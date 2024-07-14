tileClass = char => char.match(/[A-Za-z]/) ? 'tile letter' : 'tile';
toTile = char => `<span class='${tileClass(char)}'>${char}</span>`;
toWordTile = word => `<span class='word'>${(word).split('').map(toTile).join('')}</span>`;

for (let tile of document.getElementsByClassName('tiles')) {
  let phrase = tile.innerText;
  tile.innerHTML = phrase.split(' ').map(toWordTile).join('');
}