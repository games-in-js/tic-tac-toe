import { useState } from "react";
import { Gamepad2 } from "lucide-react";
import Board from "./components/Board";
import { BoardState } from "./types";

function App() {
  // [x,o,x
  //  x,o,x
  //  x,o,x ]
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));

  // Rodada 0: [null, null, null, null, null, null, null, null, null]
  // Rodada 1: ["X", null, null, null, null, null, null, null, null]
  // Rodada 2: ["X", null, "O", null, null, null, null, null, null]
  // Rodada 3: ["X", "X", "O", null, null, null, null, null, null]
  // módulo % => 0 / 2 = 0
  // 1 % 2 = 0.5
  // 2 % 2 = 0
  // 3 / 2 = 1 !==0
  const currentPlayer = board.filter(Boolean).length % 2 === 0 ? "X" : "O";

  const handleClick = (index: number) => {
    setBoard(board.map((square, i) => (index === i ? currentPlayer : square)));
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
