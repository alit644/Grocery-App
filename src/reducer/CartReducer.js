export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      // اذا كان العنصر موجود في العربة ام لا
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      // لو كان موجود نضيف على اكمية +1
      // على جميع الداتا لنجد المعرف للعنصر  loop نقوم بعمل
      if (itemIndex !== -1) {
        const updatedState = state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return updatedState;
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    }

    case "REMOVE_FROM_CART": {
      return state.filter((item) => item.id !== action.payload.id);
    }

    case "INCREASE": {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        const updatedState = state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return updatedState;
      }else{
        return state
      }
    }
    case "DECREASE": {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        const updatedState = state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        return updatedState;
      }else{
        return state
      }
    }

    case "CLEAR_CART": {
      return [];
    }
  

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
