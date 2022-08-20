
export function boardIdx(
    br: number, bc: number
): number {
    return (br * 3 + bc);
}


export function cellIdx(
    br: number, bc: number, sr: number, sc: number,
): number {
    return (br * 27 
        + bc * 9 
        + sr * 3 
        + sc 
    );
}

export function cellContent(
    br:number, bc:number, sr:number, sc:number, cellArr: number[]
):number{
    return cellArr[cellIdx(br, bc, sr, sc)];
}

export function boardContent(
    r: number, c: number, boardArr: number[]
): number{
    return boardArr[boardIdx(r, c)];
}





