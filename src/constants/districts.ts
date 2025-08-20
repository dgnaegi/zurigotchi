export interface District {
  id: string;
  name: string;
  germanName: string;
  available: boolean;
  description: string;
  backgroundImage: string;
}

export const districts: District[] = [
  {
    id: 'kreis3',
    name: 'Kreis 3 - Wiedikon',
    germanName: 'Kreis 3 - Wiedikon',
    available: true,
    description: 'Wo früher Autos die Weststrasse hinunterrasten, liegt heute das wohl trendigste Quartier Zürichs.',
    backgroundImage: 'wiedikon-bg.jpg'
  },
  {
    id: 'kreis4',
    name: 'Kreis 4 - Aussersihl',
    germanName: 'Kreis 4 - Aussersihl',
    available: true,
    description: 'Im Mittelalter mieden die Menschen den Kreis 4 wegen Schlachtung und Gestank, heute locken zahlreiche Clubs und Bars Gäste aus der ganzen Schweiz an.',
    backgroundImage: 'wiedikon-bg.jpg'
  },
  {
    id: 'kreis9',
    name: 'Kreis 9 - Albisrieden / Altstetten',
    germanName: 'Kreis 9 - Albisrieden / Altstetten',
    available: true,
    description: 'Im Mittelalter mieden die Menschen den Kreis 4 wegen Schlachtung und Gestank, heute locken zahlreiche Clubs und Bars Gäste aus der ganzen Schweiz an.',
    backgroundImage: 'wiedikon-bg.jpg'
  },
];

export const getAvailableDistricts = (): District[] => {
  return districts.filter(district => district.available);
};
