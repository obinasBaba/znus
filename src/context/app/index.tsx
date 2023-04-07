import React, { FC, useCallback, useMemo } from 'react';

export interface State {
  pathname: string;
  navBar: boolean;
  navMenu: boolean;
}

const initialState = {
  pathname: 'sld',
  navBar: true,
  navMenu: false,
};

type Action = {
  type: 'OPEN_NAV_MENU' | 'CLOSE_NAV_MENU';
};

export const AppContext = React.createContext<State | any>(initialState);

AppContext.displayName = 'UIContext';

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case 'OPEN_NAV_MENU': {
      return {
        ...state,
        navMenu: true,
      };
    }
    case 'CLOSE_NAV_MENU': {
      return {
        ...state,
        navMenu: false,
      };
    }
    default:
      return state;
  }
}

const AppProvider: FC<{ children: React.ReactElement }> = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState);

  const openNavMenu = useCallback(
    () => dispatch({ type: 'OPEN_NAV_MENU' }),
    [dispatch],
  );
  const closeNavMenu = useCallback(
    () => dispatch({ type: 'CLOSE_NAV_MENU' }),
    [dispatch],
  );

  const value = useMemo(
    () => ({
      ...state,
      openNavMenu,
      closeNavMenu,
    }),
    [state],
  );

  return <AppContext.Provider value={value} {...props} />;
};

export default AppProvider;

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }

  return context as State & {
    showNavBar: () => void;
    hideNavBar: () => void;
    openNavMenu: () => void;
    closeNavMenu: () => void;
  };
};
