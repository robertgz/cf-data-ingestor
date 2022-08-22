export interface ElectionInput {
  agencyId: number;
  date: string;
  type: string;
}

export interface SourceElection extends Omit<ElectionInput, 'agencyId'> {
  agencyId?: number;
}
