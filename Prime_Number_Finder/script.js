function show_primes() {
    // output to result
    result = document.getElementById("result");
    result.innerHTML = "";

    // Assume input is in [0,1000]
    up_to = document.getElementById("up_to").value;
    console.log(up_to);
    // 2 is the first prime, by definition
    let count = 0;
    for( let i=2; i <= up_to; i ++ ) {
        if ( is_prime(i) ) {
            switch ( count ) {
                case 0: btn_color = "btn-primary"; break;
                case 1: btn_color = "btn-info"; break;
                case 2: btn_color = "btn-danger"; break;
                default: 
                    btn_color = "btn-secondary"; 
                    count = -1;
                    break;
            }
            count++;

            // single quote outers
            result.innerHTML += '<span class="p-2 m-2 btn ' + btn_color + '">' + i + "</span>"; 
            // escape inner double quote
            //result.innerHTML += "<span class=\"btn\">" + i + "</span>"; 
        }
    }

}

function is_prime( up_to ) {
    // input from up_to

    // start at 2 because 1 and the input are part of the prime def'n
    let test_number = 2;
    let is_prime = true;

    // handle negative inputs as positive inputs
    if ( up_to < 0 )
        up_to = Math.abs( up_to );

    if ( up_to == 1 )
        return false; // definition of primes
    else if ( up_to > 1000 )
        up_to = 1000; // create upper limit of 1000 arbitrarily

    for( let i = test_number; i < up_to; i++ ) {
        //console.log( "for: i = "+i);
        if ( up_to % i == 0 ) {
            //console.log("Should exit here with false");
            is_prime = false;
            break;
        }
    }

    //console.log( "is_prime: returning " + is_prime );
    return is_prime;
}