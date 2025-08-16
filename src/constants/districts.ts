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
];

export const getAvailableDistricts = (): District[] => {
  return districts.filter(district => district.available);
};
