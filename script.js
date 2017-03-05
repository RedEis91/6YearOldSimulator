var app = angular.module("myCoolModule", []);
//module houses all of your application functionality, the grandaddy object
app.controller("myController", function ($scope) {
    //firstWords array holds words
    $scope.firstWords = ["rocketship", "underpants", "genius", "misunderstood", "Hobbes"];
    //firstPhrases array holds phrases
    $scope.firstPhrases = ["The world bores you when you’re cool.", "Verbing weirds language.", "They say the world is a stage. But obviously the play is unrehearsed and everybody is ad-libbing his lines.", "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.", "It’s a magical world, Hobbes, ol’ buddy…Let’s go exploring!"];
    //empty array to store random word 
    $scope.deployArray = [];
    //empty array to store random phrase 
    $scope.deployPhraseArray = [];
    //blank array to store the word objects (that we have added style properties to)
    $scope.deployPhraseClassArray = [];
    //blank array to store the phrase object with style/class
    $scope.deployClassArray = [];
    //array storing database of different classes 
    $scope.classArray = ["big", "small", "underlined", "red", "thick"];
    //addWord function -
    $scope.addWord = function () {
        var random = Math.floor(Math.random() * $scope.firstWords.length);
        // Math is a library. we are multiplying the random number by the length of our array to generate a random number between 1 & 5.
        // .floor rounds a number down to the nearest integer (.ceiling rounds a number up to the nearest integer) .random selects a random number between zero and one
        console.log(random);
//creates a variable called deploy word based on this "random" variable used as a position in the firstWords array
        var deployWord = $scope.firstWords[random];
        //pushes deployWord into deployArray
        $scope.deployArray.push(deployWord);
    }
    $scope.addPhrase = function () {
        // Creates variable to hold random number generated as so: Math is a library. we are multiplying the random number by the length of our array to generate a random number between 1 & 5; " .floor " rounds a number down to the nearest integer (.ceiling rounds a number up to the nearest integer) .random selects a random number between zero and one
        var random = Math.floor(Math.random() * $scope.firstPhrases.length);
//creates a variable called deployPhrase based on this "random" variable used as a position in the firstPhrases array
        var deployPhrase = $scope.firstPhrases[random];
        //pushes deployWord into deployArray
        $scope.deployPhraseArray.push(deployPhrase);
    }
//function to add random class from classArray  to random word from firstWords array as a style property
    $scope.wordsWithClass = function () {
        //creates a new random number variable based on classArray.length
        var random = Math.floor(Math.random() * $scope.classArray.length);
        //creates a second random number variable based on firstWords.length
        var random1 = Math.floor(Math.random() * $scope.firstWords.length);
        //uses first random number as index in classArray to select a "class" randomly and store it in a variable called deployClass
        var deployClass = $scope.classArray[random];
        //uses second random number as index in firstWords to select a "word" randomly and store it in a variable called styledWord
        var styledWord = $scope.firstWords[random1];
        
        //creates a new object and pushes to deployClassArray using styledWord variable for name property & deployClass variable for style property.
        $scope.deployClassArray.push({
            name: styledWord,
            style: deployClass
        });
    }
    $scope.phrasesWithClass = function () {
        //creates a new random number variable based on classArray.length
        var random = Math.floor(Math.random() * $scope.classArray.length);
        //creates a second random number variable based on firstWords.length
        var random1 = Math.floor(Math.random() * $scope.firstPhrases.length);
        //uses first random number as index in classArray to select a "class" randomly and store it in a variable called deployClass
        var deployClass = $scope.classArray[random];
        //uses second random number as index in firstPhrases array to select a "phrase" randomly and store it in a variable called styledPhrase
        var styledPhrase = $scope.firstPhrases[random1];
        
        //creates a new object and pushes to deployClassArray using styledPhrase variable for name property & deployClass variable for style property.
        $scope.deployPhraseClassArray.push({
            name: styledPhrase,
            style: deployClass
        });
    }
    
});

//use dot notation to access the properties within objects.