	
	var chessBoard = document.getElementById("chessboard");
	var table = document.createElement("table");
	table.id = "board";

	// Build the Board
	for(var i = 0; i < 8; i++) {
		// Create 8 rows and append it to the Table
		var row = document.createElement("tr");
		row.className = "row";
		row.id = "row-" + (i+1);
		table.appendChild(row);
		
		for(var j = 0; j < 8; j++) {
			// Create 8 cells for each Row and append it to the Row
			var cell = document.createElement("td");
			cell.className = "cell";
			cell.id = "row-" + (i+1) + "_cell-" + (j+1);
			cell.setAttribute("data-row", (i+1));
			cell.setAttribute("data-column", (j+1));
			row.appendChild(cell);
		}
	}

	// Append our board to the ChessBoard div
	document.getElementById("chessboard").appendChild(table);

	// Traverse the DOM to add our chess pieces
	var board = document.getElementById("board");
	// Get Black Player's rows
	var blackPlayerKingRow = board.firstChild;
	var blackPlayerPawnRow = blackPlayerKingRow.nextSibling;


	// Array of non-Pawn pieces, ORDER MATTERS!
	var pieces = ['Rook', 'Knight', 'Bishop', 'Queen', 'King', 'Bishop', 'Knight', 'Rook'];

	// Create our Pieces
	let b = 0;
	for (var piece of blackPlayerKingRow.childNodes) {
		piece.innerHTML = pieces[b];
		piece.setAttribute("data-piece", pieces[b]);
		b++;
	}
	// Create our Pawns
	for (var pawn of blackPlayerPawnRow.childNodes) {
		pawn.innerHTML = "Pawn";
		pawn.setAttribute("data-piece", "Pawn");
	}

	// Get White Player's rows
	var whitePlayerKingRow = board.lastChild;
	var whitePlayerPawnRow = whitePlayerKingRow.previousSibling;
	// Create our Pieces
	let w = 0;
	for (var piece of whitePlayerKingRow.childNodes) {
		piece.innerHTML = pieces[w];
		piece.setAttribute("data-piece", pieces[w]);
		w++;
	}
	// Create our Pawns
	for (var pawn of whitePlayerPawnRow.childNodes) {
		pawn.innerHTML = "Pawn";
		pawn.setAttribute("data-piece", "Pawn");
	}

	// Event Listeners
	document.addEventListener('click', function (event) {

		// If the clicked element doesn't have the right selector, bail
		if (!event.target.matches('.cell')) return;

		// Don't follow the link
		event.preventDefault();

		// Log the clicked element in the console
		var node = event.target;
		console.log(node);
		var selectedPiece = node.getAttribute("data-piece");
		var currentPosition = [node.getAttribute("data-row"), node.getAttribute("data-column")];
		console.log(selectedPiece, currentPosition);

	}, false);