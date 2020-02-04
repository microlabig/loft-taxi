import { createSelector } from 'reselect';

// Информация о карте
export const getCardInfo = createSelector(
    state => state.card,
    card => ({
        cardNumber: card.cardNumber ? card.cardNumber : '',
        expiryDate: card.expiryDate ? card.expiryDate : '',
        cardName: card.cardName ? card.cardName.toUpperCase() : '',
        cvc: card.cvc ? card.cvc : ''
    })
);

// Статус обновления информации о платежной карте
export const getCardInfoIsUpdate = createSelector(
    state => state.card.isUpdate,
    isUpdate => isUpdate
);
