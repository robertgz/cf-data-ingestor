export interface Agency {
  id: number;
  name: string;
  software: string;
  url: string;
}

export interface SourceAgency extends Omit<Agency, 'id'> {
  id?: number;
}
