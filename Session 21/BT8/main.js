for (let i = 1; i<10 ;i++){
    for (let j = 0; j<=9;j++){
        for (let k = 0; k<=9;k++){
            let n = i*100 + j*10 + k;
            if (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3) === n){
                document.writeln(n + " ");
            }
        }
    }
}