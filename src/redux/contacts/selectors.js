export const selectFilters = state => state.contacts.filter;
export const selectItems = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error; 
