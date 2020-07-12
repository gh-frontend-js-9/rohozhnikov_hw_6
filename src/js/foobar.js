let foobar = arr => {

    for (let i=0; i < arr.length; i++) {

        if (arr[i] % 3 === 0 && arr[i] % 7 === 0) {

            arr[i]='foobar';

        } else if (arr[i] % 3 === 0) {

            arr[i]='foo';

        } else if (arr[i] % 7 === 0) {

            arr[i]='bar';
            
        }
    }

    console.log(arr)
}

foobar([2, 3, 4, 7, 12, 14, 18, 21, 91])
