
import { useState } from 'react';

// Define types for our mock data
export interface NGO {
  id: string;
  name: string;
  email: string;
  focusAreas: string[];
  needs: string[];
  isVerified: boolean;
  location: string;
  description: string;
}

export interface Donor {
  id: string;
  name: string;
  email: string;
  interests: string[];
  location: string;
  joinedDate: string;
  budget?: string;
}

export interface Match {
  id: string;
  ngoId: string;
  donorId: string;
  matchType: 'perfect' | 'partial';
  resources: string[];
  date: string;
  completed: boolean;
}

// Initial mock data
const initialNGOs: NGO[] = [
  {
    id: '1',
    name: 'Health Alliance',
    email: 'ngo1@mypsj.com',
    focusAreas: ['Healthcare', 'Medical Supplies'],
    needs: ['Funds', 'Medical Supplies'],
    isVerified: true,
    location: 'New York',
    description: 'Providing healthcare services to underserved communities.'
  },
  {
    id: '2',
    name: 'Education First',
    email: 'education@mypsj.com',
    focusAreas: ['Education', 'Children'],
    needs: ['Books', 'School Supplies', 'Volunteers'],
    isVerified: true,
    location: 'Chicago',
    description: 'Supporting educational initiatives for underprivileged children.'
  },
  {
    id: '3',
    name: 'Green Earth Initiative',
    email: 'green@mypsj.com',
    focusAreas: ['Environment', 'Conservation'],
    needs: ['Funds', 'Volunteers'],
    isVerified: false,
    location: 'Seattle',
    description: 'Working to protect and preserve our natural environment.'
  },
  {
    id: '4',
    name: 'Food for All',
    email: 'food@mypsj.com',
    focusAreas: ['Food Security', 'Poverty'],
    needs: ['Food Supplies', 'Funds', 'Volunteers'],
    isVerified: true,
    location: 'Los Angeles',
    description: 'Fighting hunger and food insecurity in local communities.'
  },
  {
    id: '5',
    name: 'Shelter Support',
    email: 'shelter@mypsj.com',
    focusAreas: ['Housing', 'Homelessness'],
    needs: ['Funds', 'Clothes', 'Volunteers'],
    isVerified: false,
    location: 'Boston',
    description: 'Providing shelter and support for the homeless population.'
  }
];

const initialDonors: Donor[] = [
  {
    id: '1',
    name: 'John Donor',
    email: 'donor1@mypsj.com',
    interests: ['Healthcare', 'Education'],
    location: 'New York',
    joinedDate: '2023-01-15',
    budget: '$500-1000'
  },
  {
    id: '2',
    name: 'Emily Green',
    email: 'emily@mypsj.com',
    interests: ['Environment', 'Conservation'],
    location: 'Seattle',
    joinedDate: '2023-02-20'
  },
  {
    id: '3',
    name: 'Michael Brown',
    email: 'michael@mypsj.com',
    interests: ['Food Security', 'Poverty'],
    location: 'Los Angeles',
    joinedDate: '2023-03-10',
    budget: '$100-500'
  },
  {
    id: '4',
    name: 'Sarah Johnson',
    email: 'sarah@mypsj.com',
    interests: ['Education', 'Children'],
    location: 'Chicago',
    joinedDate: '2023-04-05'
  },
  {
    id: '5',
    name: 'Robert Lee',
    email: 'robert@mypsj.com',
    interests: ['Healthcare', 'Medical Supplies'],
    location: 'Boston',
    joinedDate: '2023-05-15',
    budget: '$1000+'
  }
];

const initialMatches: Match[] = [
  {
    id: '1',
    ngoId: '1', // Health Alliance
    donorId: '1', // John Donor
    matchType: 'perfect',
    resources: ['Funds', 'Medical Supplies'],
    date: '2023-06-10',
    completed: true
  },
  {
    id: '2',
    ngoId: '2', // Education First
    donorId: '4', // Sarah Johnson
    matchType: 'perfect',
    resources: ['Books', 'School Supplies'],
    date: '2023-07-15',
    completed: true
  },
  {
    id: '3',
    ngoId: '4', // Food for All
    donorId: '3', // Michael Brown
    matchType: 'partial',
    resources: ['Funds'],
    date: '2023-08-20',
    completed: false
  }
];

export const useMockData = () => {
  const [ngos, setNGOs] = useState<NGO[]>(initialNGOs);
  const [donors] = useState<Donor[]>(initialDonors);
  const [matches] = useState<Match[]>(initialMatches);

  const approveNGO = (id: string) => {
    setNGOs(ngos.map(ngo => 
      ngo.id === id ? { ...ngo, isVerified: true } : ngo
    ));
  };

  const rejectNGO = (id: string) => {
    setNGOs(ngos.filter(ngo => ngo.id !== id));
  };

  return {
    ngos,
    donors,
    matches,
    approveNGO,
    rejectNGO
  };
};
