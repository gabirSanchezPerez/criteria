export interface Destination {
    id: string,
    name: string,
    country: string,
};
export interface Provider  {
    id: string,
    name: string,
    location: {
      id: string,
      country: string
    }
  }

export type CriteriaContextType = {
    destinations: Destination[]
    providers: Provider[]
    saveDestination: (destinationSelected: Destination) => void
    updateDestination: (id: string) => void
    saveProvider: (providreSelected: Provider) => void
    updateProvider: (id: string) => void
    selectedDestination: Destination[]
    selectedProvider: Provider[]
};