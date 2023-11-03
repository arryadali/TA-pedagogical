
export function attempts_Number(result) {
    return result.filter(r => r !== undefined).length
}

export function earnPoints_Number(result, answer, point) {
    return result.map((element, i) => answer[i] === element).filter(i => i).map(i => point).reduce((prev, curr) => prev + curr, 0);
}

export function flagResult(totalPoints, earnPoints) {
    return (totalPoints * 50 / 100) < earnPoints;
}

