// Review JavaScript Fundamentals by Building a Gradebook App
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/review-js-fundamentals-by-building-a-gradebook-app/step-1


//average = sum of all scores / total number of scores
function getAverage(scores) {
    let sum =0;
    const n = scores.length;
    for(let i = 0; i < n; i++) {
        sum += scores[i];
    }

    const average = sum / n; 
    return average;
}

// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
// console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));


//function that converts student score to a letter grade
function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// console.log(getGrade(96));
// console.log(getGrade(82));
// console.log(getGrade(56));

//function returns tru if student has a passing grade
function hasPassingGrade(score) {
  if (getGrade(score) !== "F") {
    return true;
  } else {
    return false;
  }
}

// console.log(hasPassingGrade(100));
// console.log(hasPassingGrade(53));
// console.log(hasPassingGrade(87));

//function that returns string representing message to the student
function studentMsg(totalScores, studentScore) {
    const classAverage = getAverage(totalScores);
    const studentGrade = getGrade(studentScore);

    if(hasPassingGrade(studentScore)) {
        return "Class average: " + classAverage + ". Your grade: " + studentGrade + ". You passed the course."
    } else {
        return "Class average: " + classAverage + ". Your grade: " + studentGrade + ". You failed the course."
    }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100))