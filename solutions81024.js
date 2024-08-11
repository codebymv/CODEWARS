//bling backtick template literal syntax

function greet(name){
    return `Hello, ${name} how are you doing today?`
    }


//return 0 or 1 depending if x is above or below 5

function fakeBin(x) {
    return x.split('')
            .map(n => Number(n) < 5 ? '0' : '1')
            .join('');
}

//return 0-9 as typed string

function switchItUp(number){
    var words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    return words[number];
  }