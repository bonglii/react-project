import { useState } from 'react';

function Box({ value, clickBox }) {

    return (
        <button className='box' onClick={clickBox}>{value}</button>
    )
}

export default function Interface() {

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setxIsNext] = useState(true)

    function clickedBox(i) {
        const nextSquares = squares.slice()

        nextSquares[i] = xIsNext ? 'X' : 'O'
        setSquares(nextSquares)
        setxIsNext(!xIsNext)
    }

    const winner = calculateWinner(squares)
    let status = ''
    status = winner ? 'Winner : ' + winner : 'Next Player : ' + (xIsNext ? 'X' : 'O')

    return (
        <>
            <div className='status'> {status}</div>
            <div className='boxList'>
                <Box value={squares[0]} clickBox={() => clickedBox(0)} />
                <Box value={squares[1]} clickBox={() => clickedBox(1)} />
                <Box value={squares[2]} clickBox={() => clickedBox(2)} />
                <Box value={squares[3]} clickBox={() => clickedBox(3)} />
                <Box value={squares[4]} clickBox={() => clickedBox(4)} />
                <Box value={squares[5]} clickBox={() => clickedBox(5)} />
                <Box value={squares[6]} clickBox={() => clickedBox(6)} />
                <Box value={squares[7]} clickBox={() => clickedBox(7)} />
                <Box value={squares[8]} clickBox={() => clickedBox(8)} />
            </div>
        </>
    )
}

function calculateWinner(squaree) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (squaree[a] && squaree[a] === squaree[b] && squaree[a] === squaree[c]) {
            return squaree[a]
        }
    }

    return false
}
