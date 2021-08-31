const API = 'https://api.themoviedb.org/3';

export function Get(path) {
    return fetch(API + path, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODU4YzIwNzQ1NTY5ZTAyYTY0M2I2Y2UzM2ZiZWJhYiIsInN1YiI6IjYxMmUzZjU5OWJjZDBmMDAyMzkxMzdkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N0FxhfETr4te4Q9X4aOGAFPn5Zab_2TYl3SawCG73tk',
            'Content-Type': 'application/json;charset=utf-8',
        }
    }).then(result => result.json())
}