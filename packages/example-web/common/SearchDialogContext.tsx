import { createContext, Dispatch, PropsWithChildren, type SetStateAction, useContext, useState } from 'react';

type SearchDialogContextType = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const SearchDialogContext = createContext<SearchDialogContextType>({
  isOpen: false,
  setOpen: (_: SetStateAction<boolean>) => {},
});

export function SearchDialogProvider({ children }: PropsWithChildren) {
  const [isOpen, setOpen] = useState(false);
  return (
    <SearchDialogContext.Provider
      value={{
        isOpen,
        setOpen,
      }}>
      {children}
    </SearchDialogContext.Provider>
  );
}

export function useSearchDialogContext() {
  return useContext(SearchDialogContext);
}
