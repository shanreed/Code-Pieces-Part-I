import { useState } from 'react';
import { useHistory} from 'react-router-dom';

import dummyPieces from '../data'; 

export const usePieces = () => {
    const [ pieces, setPieces] = useState(dummyPieces);

    const history = useHistory()

    const handleCreate = piece => {
      setPieces([...pieces, piece])
      setTimeout(() => {
          history.push('/pieces');
        }, 100);
    };


    const likePiece = (pieceId, isLikedState) => {
		const { liked, isLiked } = isLikedState;

		const likedConditioning = (likedBool) => {
			setPieces(
				pieces.map((piece) => {
					const changedValue =
						likedBool !== true ? piece.likes + 1 : piece.likes - 1;
					if (piece.id === pieceId) {
						return { ...piece, likes: changedValue };
					}
					return piece;
				})
			);
		};

		if (liked === false) {
			likedConditioning(liked);
		} else if (liked === true) {
			likedConditioning(liked);
		}
			isLiked(!liked);
    };
    


    const deletePiece = (clickedPiece) => {
		alert('Are you sure?')
		setPieces(
			pieces.filter(piece => piece.id !== clickedPiece)
		)
		return null
		
	}

    return [pieces, setPieces, handleCreate, likePiece, deletePiece];


}