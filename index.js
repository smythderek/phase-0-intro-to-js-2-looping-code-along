// Code your solutions in this file

const bdayCard = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
    bdayCard.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    };
    return bdayCard;
};

function countDown(int) {
    while (int >= 0) {
        console.log(int);
        int--;
    }
}