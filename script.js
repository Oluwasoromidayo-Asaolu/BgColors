let button = document.querySelector('#button');
let index = 0;

button.addEventListener('click', () => {
    let colors = [
        'red',
        'blue',
        'orange',
        'green',
        'purple',
        'grey',
        'aquamarine',
        'cyan',
        'magenta',
        'pink',
        'teal',
        'lime',
        'olive',
        'navy',
        'maroon',
        'violet',
        'indigo',
        'gold',
        'silver',
        'brown',
        'crimson',
        'fuchsia',
        'orchid',
        'slateblue',
        'dodgerblue',
        'tomato',
        'chocolate',
        'peru',
        'burlywood',
        'seagreen',
        'rosybrown',
      ];
    document.getElementById('body').style.backgroundColor = colors[index++];
    if(index > colors.length - 1){
        index = 0;
    }
})