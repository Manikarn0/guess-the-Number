let number_of_tries =10;
const form = document.querySelector('#form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const number_of_trie = document.querySelector('#number_of_tries');
    const guess = document.querySelector('#guess').value;
    const submit= document.querySelector('#submit');
    const result= document.querySelector('#result');
    random_value = Math.floor((Math.random() * 10)+1);
    console.log(random_value);
        if(guess<0 || guess>10){
            console.log('Please enter a valid number');
            result.innerHTML = 'Please enter a valid number';
            submit.disabled = true;
        }else if(guess == ''){
            console.log('Please enter a valid number');
            result.innerHTML = 'Please enter a valid number';
            submit.disabled = true;
        }
        else if(number_of_tries === 0){
           console.log("Tokens completed ")
           result.innerHTML = 'Tokens completed ';
           submit.disabled = true;
        }
        else{
            number_of_tries = number_of_tries-1;
    console.log(number_of_tries);
        number_of_trie.innerHTML = number_of_tries;
        if(guess == random_value){
            result.innerHTML = 'You guessed it right!';
            number_of_trie.innerHTML = number_of_tries ;
        }else if(guess > random_value){
            result.innerHTML = 'Too high';
            number_of_trie.innerHTML =  number_of_tries;
        }else if(guess < random_value){
            result.innerHTML = 'Too low';
            number_of_trie.innerHTML =  number_of_tries;
        }
    }    
        })
