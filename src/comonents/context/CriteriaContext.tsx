import React, {  createContext, useState } from 'react';
import { Provider, Destination, CriteriaContextType } from './types';
import {locations, campuses} from "../../data/data";

type CriteriaProviderPrpos = { children: React.ReactNode }
export const CriteriaContext = createContext<CriteriaContextType | null>(null);

const CriteriaProvider = ({ children }: CriteriaProviderPrpos) => {
  const [destinations] = useState<Destination[]>(locations);
  const [providers] = useState<Provider[]>(campuses);
  const [selectedDestination , setSelectedDestination] = useState<Destination[]>([])
  const [selectedProvider , setSelectedProvider] = useState<Provider[]>([])

  const saveDestination = (d: Destination) => {
    const newDestination: Destination = {
      id: d.id,
      name: d.name,
      country: d.country
    };
    setSelectedDestination([...selectedDestination, newDestination]);
  };
  const saveProvider = (d: Provider) => {
    const newProvider: Provider = {
      id: d.id,
      name: d.name,
      location: {
        id: d.location.id,
        country: d.location.country
      }
    };
    setSelectedProvider([...selectedProvider, newProvider]);
  };
  const updateDestination = (id: string) => {
    const destinationFiltered = selectedDestination.filter((d: Destination) => {
      if (d.id !== id) {
        return d;
      } 
      return ;
    });
    setSelectedDestination(destinationFiltered);
  };
  const updateProvider = (id: string) => {
    const providerFiltered = selectedProvider.filter((p: Provider) => {
      if (p.id !== id) {
        return p;
      }
      return ;
    });
    setSelectedProvider(providerFiltered);
  };

  return <CriteriaContext.Provider value={{ destinations, providers, saveDestination, saveProvider, updateDestination, updateProvider, selectedDestination, selectedProvider }}>{children}</CriteriaContext.Provider>;
  
};

export default CriteriaProvider;