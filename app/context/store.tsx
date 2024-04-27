'use client';

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

export type DBTestimonial = {
  id: string;
  nome: string;
  testemunho: string;
  avaliacao: number;
  email: string;
  concorda: boolean;
  aprovado: boolean;
  visivel: boolean;
  destaque: boolean;
  altImage?: string;
  urlImagem?: string;
};

interface ContextProps {
  testimonials: DBTestimonial[];
  setTestimonials: Dispatch<SetStateAction<DBTestimonial[]>>;
  acceptedTestimonialsIds: string[];
  setAcceptedTestimonialIds: Dispatch<SetStateAction<string[]>>;
  highlightedTestimonials: DBTestimonial[];
  setHighlightedTestimonials: Dispatch<SetStateAction<DBTestimonial[]>>;
}

const GlobalContext = createContext<ContextProps>({
  testimonials: [],
  setTestimonials: (): DBTestimonial[] => [],
  acceptedTestimonialsIds: [],
  setAcceptedTestimonialIds: (): string[] => [],
  highlightedTestimonials: [],
  setHighlightedTestimonials: (): DBTestimonial[] => [],
});

export const GlobalContextProvider = ({ children }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [acceptedTestimonialsIds, setAcceptedTestimonialIds] = useState([]);
  const [highlightedTestimonialsIds, setHighlightedTestimonialsIds] = useState(
    [],
  );

  return (
    <GlobalContext.Provider
      value={{
        testimonials,
        setTestimonials,
        acceptedTestimonialsIds,
        setAcceptedTestimonialIds,
        highlightedTestimonials: highlightedTestimonialsIds,
        setHighlightedTestimonials: setHighlightedTestimonialsIds,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
