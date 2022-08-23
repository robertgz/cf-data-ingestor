export interface Election {
  idd: number;
  date: string;
  type: string;
}

export interface ElectionInput {
  agencyId: number;
  date: string;
  type: string;
}

export interface SourceElection extends Omit<ElectionInput, 'agencyId'> {
  agencyId?: number;
}

export interface ElectionSource {
  date: string;
  type: string;
}
