import _ from 'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCartas Crea un deck con cartas Ejamplo : [C,D,H,S]
 * @param {Array<String>} tiposEspeciales Crea un deck con cartas espaciales Ejamplo : [A,J,Q,K]
 * @returns {Array<String>} Crea un nuevo deck mezclado
 */

export const crearDeck = (tiposDeCartas,tiposEspeciales) => {

    if (!tiposDeCartas || tiposDeCartas.length ===0)
        throw new Error ('Se necesita un arreglo de string');
    if (!tiposEspeciales || tiposEspeciales.length ===0)
        throw new Error ('Se necesita un arreglo de string');
    let deck=[];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}