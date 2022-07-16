export interface Team {
    abbreviation: string;
    head_coach: string;
    home_field: string;
    id: string;
    is_hidden: boolean;
    location: string;
    short_display: string;
    shortname: string;
    slug: string;
    website_url: string;
}

export interface Player {
    country: string;
    countryId: string;
    dateOfBirth: string;
    firstName: string;
    height: string;
    hometown: string;
    id: string;
    lastName: string;
    position: string;
    shirtNumber: string;
    slug: string;
    team: Team;
  }

export interface Standing {
    awayMatchesDrawn: number;
    awayMatchesLost: number;
    awayMatchesPlayed: number;
    awayMatchesWon: number;
    division: string;
    goalDifference: number;
    goalsAgainst: number;
    goalsFor: number;
    homeMatchesDrawn: number;
    homeMatchesLost: number;
    homeMatchesPlayed: number;
    homeMatchesWon: number;
    lastSix: string;
    points: number;
    rank: number;
    team: Team;
    totalMatchesDrawn: number;
    totalMatchesLost: number;
    totalMatchesPlayed: number;
    totalMatchesWon: number
}
