
// export
// import

export default function ispisiPozdrav() {
    console.log("hello world");
}




export function zbrojiDvaBroja(a, b) {
    return a + b;
}

export function pomnoziDvaBroja(a, b) {
    return a * b;
}

export const mojNiz = [1, 2, 3, 4, 5];

export const mojObjekt = {
    ime: "Ivica",
    prezime: "Horvat",
    godine: 53
};

export var Exercise = (function(){

var steps = 7;

function increaseSteps() {
    steps++;
}

return {
    getTotalSteps: function() {
        return steps;
    },
    walk: function() {
        increaseSteps();
    },
};
})();