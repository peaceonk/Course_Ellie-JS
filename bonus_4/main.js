class Counter {
    constructor() {
        this.counter = 0;
    }

    increase() {
        this.counter++;
        console.log(this.counter);

        if(this.counter % 5 === 0) {
            console.log('yo!');
        }
    }

    increase2(runIf5Times) {
        this.counter++;
        console.log(this.counter);

        if(this.counter % 5 === 0) {
            runIf5Times();
        }
    }

    increase3(runIf5Times) {
        this.counter++;
        console.log(this.counter);

        if(this.counter % 5 === 0) {
            runIf5Times(this.counter);
        }
    }
}

console.log('---------------------------- [ coolCounter ]--------------------------');

const coolCounter = new Counter();

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();


console.log('---------------------------- [ printSomething ]--------------------------');

function printSomething() {
    console.log('yo!');
}

coolCounter.increase2(printSomething);
coolCounter.increase2(printSomething);
coolCounter.increase2(printSomething);
coolCounter.increase2(printSomething);
coolCounter.increase2(printSomething);


console.log('---------------------------- [ printSomething2 ]--------------------------');

function printSomething2(num) {
    console.log(`Wow! ${num}`);
}

coolCounter.increase3(printSomething2);
coolCounter.increase3(printSomething2);
coolCounter.increase3(printSomething2);
coolCounter.increase3(printSomething2);
coolCounter.increase3(printSomething2);


console.log('---------------------------- [ alertNum ]--------------------------');

function alertNum(num) {
    alert(`alert! ${num}`);
}

coolCounter.increase3(alertNum);
coolCounter.increase3(alertNum);
coolCounter.increase3(alertNum);
coolCounter.increase3(alertNum);
coolCounter.increase3(alertNum);



class Counter2 {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase4() {
        this.counter++;
        console.log(this.counter);

        if(this.counter % 5 === 0) {
            this.callback(this.counter);
        }
    }

    
    increase5() {
        this.counter++;
        console.log(this.counter);

        if(this.counter % 5 === 0) {

            // if(this.callback) {
            //     this.callback(this.counter);
            // }
            
            this.callback && this.callback(this.counter);

        }
    }
} 

console.log('---------------------------- [ coolCounter2 ]--------------------------');

const coolCounter2 = new Counter2(printSomething2);
coolCounter2.increase4();
coolCounter2.increase4();
coolCounter2.increase4();
coolCounter2.increase4();
coolCounter2.increase4();

console.log('---------------------------- [ coolCounter2_2 ]--------------------------');

const coolCounter2_2 = new Counter2(alertNum);
coolCounter2_2.increase4();
coolCounter2_2.increase4();
coolCounter2_2.increase4();
coolCounter2_2.increase4();
coolCounter2_2.increase4();

console.log('---------------------------- [ coolCounter2_3 ]--------------------------');

const coolCounter2_3 = new Counter2();

//error callback is undefined
// coolCounter2_2.increase4();

coolCounter2_3.increase5();
coolCounter2_3.increase5();
coolCounter2_3.increase5();
coolCounter2_3.increase5();
coolCounter2_3.increase5();