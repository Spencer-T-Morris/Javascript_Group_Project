class Book {
    constructor(title, author, category, pages, price) {
        this.title = title;
        this.author = author;
        this.category = category;
        this.isbn = ISBN;
        this.price = price;
    }
}

let headStart = new Book ("HeadStart", "unkAuthor1 ", "beginner", "ISBN1 ", 100);
let coding4Dummies = new Book ("Coding For Dummies", "unkAuthor2 ", "beginner", "ISBN2 ", 100);
let uDKJS = new Book ("You Don't Know JS", "unkAuthor3", "intermediate", "unkPages3", 100);
let eloquent = new Book ("Eloquent JavaScript", "unkAuthor4", "advanced", "unkPages4", 100);
let proGit = new Book ("ProGit", "unkAuthor5", "advanced", "unkPages5", 100);
let pProg = new Book ("Pragmatic Programmer", "unkAuthor6", "professional development", "unkPages6", 100);
let busValDev = new Book ("The Business Value of Developer Relations", "unkAuthor7", "professional development", "unkPages7", 100);


let allBooks = [headStart, coding4Dummies, uDKJS, eloquent, proGit, pProg, busValDev];



let search = "professional development";

if (search == "beginner") {
    let arrayB = [];
    let i = 0;
    while (i < allBooks.length) {
        if (allBooks[i].category == "beginner") {
            arrayB == arrayB.push(" " + allBooks[i].title);
            i++;
        } else {
            i++;
        }
    }
    if (arrayB.length != 0) {
    console.log("The books that meet your seach criteria of " + search.toUpperCase() + " are: \n\n" + arrayB);
    } else {
    console.log ("\n no results meet search criteria.");
    }
}

if (search == "intermediate") {
    let arrayI = [];
    let i = 0;
    while (i < allBooks.length) {
        if (allBooks[i].category == "intermediate") {
            arrayI == arrayI.push(" " + allBooks[i].title);
            i++;
        } else {
            i++;
        }
    }
    if (arrayI.length != 0) {
    console.log("The books that meet your seach criteria of " + search.toUpperCase() + " are: \n\n" + arrayI);
    } else {
    console.log ("\n no results meet search criteria.");
    }
}

if (search == "advanced") {
    let arrayA = [];
    let i = 0;
    while (i < allBooks.length) {
        if (allBooks[i].category == "advanced") {
            arrayA == arrayA.push(" " + allBooks[i].title);
            i++;
        } else {
            i++;
        }
    }
    if (arrayA.length != 0) {
    console.log("The books that meet your seach criteria of " + search.toUpperCase() + " are: \n\n" + arrayA);
    } else {
    console.log ("\n no results meet search criteria.");
    }
}

if (search == "professional development") {
    let arrayP = [];
    let i = 0;
    while (i < allBooks.length) {
        if (allBooks[i].category == "professional development") {
            arrayP == arrayP.push(" " + allBooks[i].title);
            i++;
        } else {
            i++;
        }
    }
    if (arrayP.length != 0) {
    console.log("The books that meet your seach criteria of " + search.toUpperCase() + " are: \n\n" + arrayP);
    } else {
    console.log ("\n no results meet search criteria.");
    }
}
