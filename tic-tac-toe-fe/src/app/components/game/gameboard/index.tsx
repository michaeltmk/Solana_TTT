import { useEffect, useMemo, useState } from 'react';
import styles from '../../../game.module.css';

export default function Gameboard() {

    type grid_type = {
        1: string | undefined,
        2: string | undefined,
        3: string | undefined,
        4: string | undefined,
        5: string | undefined,
        6: string | undefined,
        7: string | undefined,
        8: string | undefined,
        9: string | undefined,
    }

    const [grid, setGrid] = useState<grid_type>({
        1: undefined,
        2: undefined,
        3: undefined,
        4: undefined,
        5: undefined,
        6: undefined,
        7: undefined,
        8: undefined,
        9: undefined,
    });

    const [playerTurn, setPlayerTurn] = useState(1);

    const player = useMemo(() => {
        return playerTurn === 1 ? 'X' : 'O';
    }, [playerTurn])

    function playMove(gridCell: number) {
        if(grid[gridCell] === undefined) {
            // Confirm if player wants to make this move
            setGrid({...grid, [gridCell]: player});
            setPlayerTurn(playerTurn === 1 ? 2 : 1);
        } else {
            alert('Invalid Move');
        }
    }

    useEffect(() => {
        if(checkWin()){
            alert(player + ' wins!');
        } else {
            alert('Next Player');   
        }
    }, [grid])

    const checkWin = () => {
        // Check rows
        if (grid[1] === grid[2] && grid[2] === grid[3] && grid[1] !== undefined) {
            return true;
        }
        if (grid[4] === grid[5] && grid[5] === grid[6] && grid[4] !== undefined) {
            return true;
        }
        if (grid[7] === grid[8] && grid[8] === grid[9] && grid[7] !== undefined) {
            return true;
        }
        // Check columns
        if (grid[1] === grid[4] && grid[4] === grid[7] && grid[1] !== undefined) {
            return true;
        }
        if (grid[2] === grid[5] && grid[5] === grid[8] && grid[2] !== undefined) {
            return true;
        }
        if (grid[3] === grid[6] && grid[6] === grid[9] && grid[3] !== undefined) {
            return true;
        }
        // Check diagonals
        if (grid[1] === grid[5] && grid[5] === grid[9] && grid[1] !== undefined) {
            return true;
        }
        if (grid[3] === grid[5] && grid[5] === grid[7] && grid[3] !== undefined) {
            return true;
        }
        return false;
    };
    
    return (
        <div className={styles.gameboard}>
            <div className={styles.grid}>
                <div className={styles.row}>
                    {[1,2,3].map((cell: number, index: number) => {
                        return (
                            <input key={index} className={styles.cell} id={"cell-" + cell} value={grid[cell]} onClick={()=>{playMove(cell)}}/>
                        )
                    })}
                    {/* <input className={styles.cell} id="cell-1" value={grid[1]} onClick={()=>{playMove(1)}}/>
                    <input className={styles.cell} id="cell-2" value={grid[2]} onClick={()=>{playMove(2)}}/>
                    <input className={styles.cell} id="cell-3" value={grid[3]} onClick={()=>{playMove(3)}}/> */}
                </div>
                <div className={styles.row}>
                    {[4,5,6].map((cell: number, index: number) => {
                        return (
                            <input key={index} className={styles.cell} id={"cell-" + cell} value={grid[cell]} onClick={()=>{playMove(cell)}}/>
                        )
                    })}
                    {/* <input className={styles.cell} id="cell-4" value={grid[4]} onClick={()=>{playMove(4)}}/>
                    <input className={styles.cell} id="cell-5" value={grid[5]} onClick={()=>{playMove(5)}}/>
                    <input className={styles.cell} id="cell-6" value={grid[6]} onClick={()=>{playMove(6)}}/> */}
                </div>
                <div className={styles.row}>
                    {[7,8,9].map((cell: number, index: number) => {
                        return (
                            <input key={index} className={styles.cell} id={"cell-" + cell} value={grid[cell]} onClick={()=>{playMove(cell)}}/>
                        )
                    })}
                    {/* <input className={styles.cell} id="cell-7" value={grid[7]} onClick={()=>{playMove(7)}}/>
                    <input className={styles.cell} id="cell-8" value={grid[8]} onClick={()=>{playMove(8)}}/>
                    <input className={styles.cell} id="cell-9" value={grid[9]} onClick={()=>{playMove(9)}}/> */}
                </div>
            </div>
        </div>
    )
}