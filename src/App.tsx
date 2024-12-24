import { useState } from "react";
import { Gamepad2 } from "lucide-react";
import Board from "./components/Board";
import { BoardState } from "./types";

function App() {
  // [x,o,x
  //  x,o,x
  //  x,o,x ]
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));

  const handleClick = (index: number) => {
    console.log("click", index);
    setBoard(board.map((square, i) => (index === i ? "X" : square)));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-200">
      <div className="w-full max-w-lg rounded-2xl bg-blue-100 p-8">
        <div className="mb-8 flex items-center justify-center gap-3">
          <Gamepad2 className="h-8 w-8 text-pink" />
          <h1 className="text-4xl font-bold text-white">Tic Tac Toe</h1>
        </div>

        <div className="mb-6 text-center">
          <p className="text-xl font-semibold text-gray-100">Player X's turn</p>
        </div>

        <Board board={board} onClick={handleClick} />
      </div>
    </main>
  );
}

export default App;
