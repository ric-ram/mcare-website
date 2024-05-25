'use client';

import {
  getHighlightedTestimonialsIds,
  getTestimonialsIds,
} from '@/data/testimonials';
import { getTestimonials } from '@/firebase/controlData';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
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

  useEffect(() => {
    async function fetchData() {
      const data = await getTestimonials();
      setTestimonials(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    getTestimonialsIds(testimonials, setAcceptedTestimonialIds);
  }, [testimonials]);

  useEffect(() => {
    getHighlightedTestimonialsIds(testimonials, setHighlightedTestimonialsIds);
  }, [testimonials]);

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
