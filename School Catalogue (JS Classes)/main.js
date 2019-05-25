class School {
    constructor (name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents
    }
    get name () {
        return this._name
    }
    get level () {
        return this._level
    }
    get numberOfStudents () {
        return this._numberOfStudents
    }
    set numberOfStudents (num) {
        if (typeof num === 'number') {
        this._numberOfStudents = num
        } else {
        console.log('You gotta put in a number')
        }
    }
    quickFacts () {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }
    static pickSubstituteTeacher (substituteTeachers) {
        const randomizer = Math.floor(Math.random() * substituteTeachers.length)
        return substituteTeachers[randomizer]
    }
}
  
class Primary extends School {
    constructor (name, numberOfStudents, pickupPolicy) {
        super (name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy
    }
    get pickupPolicy () {
        return this._pickupPolicy
    }
}

class Middle extends School {
    constructor (name, numberOfStudents) {
        super (name, 'middle', numberOfStudents);
    }
}

class High extends School {
    constructor (name, numberOfStudents, sportsTeams) {
        super (name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams
    }
    get sportsTeams () {
        return this._sportsTeams
    }
};