import { createSelector } from 'reselect';

// Информация о карте
export const getCardInfo = createSelector(
    state => state.cardReducer.card,
    card => ({
        cardNumber: card.cardNumber ? card.cardNumber : '',
        expiryDate: card.expiryDate ? card.expiryDate : '',
        cardName: card.cardName ? card.cardName.toUpperCase() : '',
        cvc: card.cvc ? card.cvc : ''
    })
);

// Статус загрузки 
export const getIsLoading = createSelector(
    state => state.cardReducer.isLoading,
    isLoading => isLoading
);

// Статус сохранения информации о платежной карте
export const getCardInfoIsUpdate = createSelector(
    state =>  state.cardReducer.isUpdate,
    isUpdate => isUpdate
);

// Статус обновления информации о платежной карте
export const getCardInfoLoaded = createSelector(
    state => state.cardReducer.isInfoLoaded,
    isInfoLoaded => isInfoLoaded
);
