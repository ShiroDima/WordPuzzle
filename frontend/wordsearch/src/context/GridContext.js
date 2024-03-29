import {createContext, useContext} from "react";

export const GridContext = createContext({
    searchWords: [
            "House".toUpperCase(),
            "Tree".toUpperCase(),
            "Car".toUpperCase(),
            "Butterfly".toUpperCase(),
            "Apple".toUpperCase(),
            "Circus".toUpperCase(),
            "Elephant".toUpperCase(),
            "Lion".toUpperCase(),
            "Guitar".toUpperCase(),
            "Computer".toUpperCase(),
            "Rocket".toUpperCase(),
            "Universe".toUpperCase(),
            "Mountain".toUpperCase(),
            "River".toUpperCase(),
            "Forest".toUpperCase(),
            "Rainbow".toUpperCase(),
            "Sunshine".toUpperCase(),
            "Bicycle".toUpperCase(),
            "Aircraft".toUpperCase(),
            "Train".toUpperCase(),
            "Volcano".toUpperCase(),
            "Discovery".toUpperCase(),
            "Creation".toUpperCase(),
            "Celebration".toUpperCase(),
            "Imagination".toUpperCase(),
            "Observation.toUpperCase()"
    ],
    setSearchWords() {},
    grid: [
        [
            "M",
            "T",
            "S",
            "I",
            "L",
            "L",
            "Y",
            "R",
            "I",
            "V",
            "E",
            "R",
            "M",
            "P"
        ],
        [
            "Q",
            "R",
            "A",
            "I",
            "N",
            "B",
            "O",
            "W",
            "Z",
            "I",
            "S",
            "B",
            "M",
            "X"
        ],
        [
            "K",
            "X",
            "C",
            "U",
            "N",
            "I",
            "V",
            "E",
            "R",
            "S",
            "E",
            "U",
            "W",
            "Q"
        ],
        [
            "A",
            "H",
            "C",
            "K",
            "H",
            "O",
            "U",
            "S",
            "E",
            "Z",
            "Y",
            "T",
            "J",
            "Z"
        ],
        [
            "P",
            "A",
            "G",
            "U",
            "I",
            "T",
            "A",
            "R",
            "C",
            "D",
            "G",
            "T",
            "S",
            "S"
        ],
        [
            "P",
            "J",
            "V",
            "U",
            "L",
            "P",
            "Y",
            "W",
            "R",
            "C",
            "M",
            "E",
            "J",
            "E"
        ],
        [
            "L",
            "C",
            "P",
            "T",
            "R",
            "E",
            "E",
            "F",
            "E",
            "O",
            "O",
            "R",
            "J",
            "L"
        ],
        [
            "E",
            "H",
            "I",
            "U",
            "J",
            "L",
            "J",
            "K",
            "A",
            "M",
            "U",
            "F",
            "C",
            "E"
        ],
        [
            "P",
            "K",
            "R",
            "R",
            "F",
            "P",
            "U",
            "V",
            "T",
            "P",
            "N",
            "L",
            "A",
            "P"
        ],
        [
            "E",
            "M",
            "K",
            "H",
            "C",
            "O",
            "M",
            "D",
            "I",
            "U",
            "T",
            "Y",
            "R",
            "H"
        ],
        [
            "X",
            "T",
            "N",
            "L",
            "B",
            "U",
            "R",
            "L",
            "O",
            "T",
            "A",
            "Y",
            "K",
            "A"
        ],
        [
            "R",
            "O",
            "C",
            "K",
            "E",
            "T",
            "S",
            "E",
            "N",
            "E",
            "I",
            "U",
            "I",
            "N"
        ],
        [
            "S",
            "U",
            "N",
            "S",
            "H",
            "I",
            "N",
            "E",
            "S",
            "R",
            "N",
            "K",
            "W",
            "T"
        ],
        [
            "V",
            "L",
            "Z",
            "Z",
            "L",
            "I",
            "O",
            "N",
            "G",
            "T",
            "E",
            "F",
            "X",
            "H"
        ]
    ],
    setGrid(){},
    answers: {},
    setAnswers(){},
    buttonGrid: [],
    setButtonGrid(){}
})

export const useGridContext = () => useContext(GridContext)