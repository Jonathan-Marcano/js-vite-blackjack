/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck nueva baraja 
 * @returns {Array} arroja la carta
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}