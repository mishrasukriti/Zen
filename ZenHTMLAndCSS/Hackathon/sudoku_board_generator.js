/**
 * Function to generate new 9x9 sudoku grid
 */
function generateGrid() {
    let puzzleGrid = [];
    let solutionGrid = [];
    for(let i=0;i<9;i++) {
        puzzleGrid[i] = [];
        solutionGrid[i] = [];
    }   
    // Fill the diagonal of SRN x SRN matrices 
    fillDiagonal(solutionGrid); 
    

    // Fill remaining blocks 
    fillRemaining(solutionGrid, 0, 3); 
    puzzleGrid = [...solutionGrid];

    let solutionstr = "";
    for(let i=0;i<9;i++) {
        for(let j=0;j<9;j++) {
            if(solutionGrid[i][j]==0)solutionstr+= '-';
            else solutionstr+= solutionGrid[i][j];
        }
    }

    // Remove Randomly 20 digits to make game 
    removeKDigits(puzzleGrid); 
    
    let puzzlestr = "";
    for(let i=0;i<9;i++) {
        for(let j=0;j<9;j++) {
            if(puzzleGrid[i][j]==0)puzzlestr+= '-';
            else puzzlestr+= puzzleGrid[i][j];
        }
    }

    
    return [puzzlestr, solutionstr];
    
}

function fillDiagonal(solutionGrid) 
{ 

        for (let i = 0; i<9; i=i+3) 

            // for diagonal box, start coordinates->i==j 
            fillBox(solutionGrid, i, i); 
} 
function fillBox(solutionGrid, row, col) 
    { 
        let num; 
        for (let i=0; i<3; i++) 
        { 
            for (let j=0; j<3; j++) 
            { 
                do
                { 
                    num = randomGenerator(9); 
                } 
                while (!unUsedInBox(solutionGrid, row, col, num)); 

                solutionGrid[row+i][col+j] = num; 
            } 
        } 
    } 
    
    // Random generator 
    function randomGenerator(num) 
    { 
        return  parseInt(Math.floor((Math.random()*num+1))); 
    } 
    

    // Check if safe to put in cell 
    function CheckIfSafe(solutionGrid, i, j, num) 
    { 
        return (unUsedInRow(solutionGrid, i, num) && 
                unUsedInCol(solutionGrid, j, num) && 
                unUsedInBox(solutionGrid, i-i%3, j-j%3, num)); 
    } 

    // check in the row for existence 
    function unUsedInRow(solutionGrid, i, num) 
    { 
        for (let j = 0; j<9; j++) 
        if (solutionGrid[i][j] == num) 
                return false; 
        return true; 
    } 

    // check in the row for existence 
    function unUsedInCol(solutionGrid, j, num) 
    { 
        for (let i = 0; i<9; i++) 
            if (solutionGrid[i][j] == num) 
                return false; 
        return true; 
    }
    
    // Returns false if given 3 x 3 block contains num. 
    function unUsedInBox(solutionGrid, rowStart,  colStart,  num) 
    { 
        for (let i = 0; i<3; i++) 
            for (let j = 0; j<3; j++) 
                if (solutionGrid[rowStart+i][colStart+j]==num) 
                    return false; 

        return true; 
    } 
    
    // Fill the diagonal SRN number of SRN x SRN matrices 
    function fillDiagonal(solutionGrid) 
    { 

        for (let i = 0; i<9; i=i+3) 

            // for diagonal box, start coordinates->i==j 
            fillBox(solutionGrid, i, i); 
    } 
    
    // A recursive function to fill remaining 
    // matrix 
    function fillRemaining(solutionGrid, i,  j) 
    { 
        let N = 9;
        let SRN = 3;
        // System.out.println(i+" "+j); 
        if (j>=N && i<N-1) 
        { 
            i = i + 1; 
            j = 0; 
        } 
        if (i>=N && j>=N) 
            return true; 

        if (i < SRN) 
        { 
            if (j < SRN) 
                j = SRN; 
        } 
        else if (i < N-SRN) 
        { 
            if (j==parseInt(i/SRN)*SRN) 
                j = j + SRN; 
        } 
        else
        { 
            if (j == N-SRN) 
            { 
                i = i + 1; 
                j = 0; 
                if (i>=N) 
                    return true; 
            } 
        } 

        for (let num = 1; num<=N; num++) 
        { 
            if (CheckIfSafe(solutionGrid, i, j, num)) 
            { 
                solutionGrid[i][j] = num; 
                if (fillRemaining(solutionGrid, i, j+1)) 
                    return true; 

                    solutionGrid[i][j] = 0; 
            } 
        } 
        return false; 
    } 
    
    function  removeKDigits(puzzleGrid) 
    { 
        let count = 20; 
        while (count != 0) 
        { 
            let cellId = randomGenerator(9*9); 

            // extract coordinates i and j 
            let i = parseInt((cellId/9)); 
            let j = cellId%9; 
            if (j != 0) 
                j = j - 1; 

            if (puzzleGrid[i][j] != 0) 
            { 
                count--; 
                puzzleGrid[i][j] = 0; 
            } 
        } 
    } 