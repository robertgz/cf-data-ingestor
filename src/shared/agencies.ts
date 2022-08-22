export interface Agency {
  id: string;
  name: string;
  source: string;
  url: string;
  shortcut?: string;
}

export const SDEFILE_AGENCIES: Agency[] = [
  {
    id: 'CSD-EFILE-e2uOVQqDJd',
    name: 'San Diego, City of',
    source: 'EFILE',
    url: 'https://efile.sandiego.gov/public/search/campaign',
  },
];

export const SAMPLE_NETFILE_AGENCIES: Agency[] = [
  {
    id: 'CCV-NETFILE-gIQx5eVfQX',
    name: 'City of Chula Vista',
    source: 'NETFILE',
    url: 'https://public.netfile.com/pub2/Default.aspx?aid=CCV',
    shortcut: 'CCV',
  },
  {
    id: 'ANA-NETFILE-trDyMz7Te1',
    source: 'NETFILE',
    name: 'City of Anaheim',
    url: 'https://public.netfile.com/pub2/Default.aspx?aid=ANA',
    shortcut: 'ANA',
  },
];

export const SAMPLE_CAMPAIGNDOCS_AGENCIES: Agency[] = [
  {
    id: 'SDC-CAMPAIGNDOCS-dHQbvVjNqL',
    name: 'San Diego County',
    source: 'CAMPAIGNDOCS',
    url: 'https://www.southtechhosting.com/SanDiegoCounty',
  },
  {
    id: 'CD-CAMPAIGNDOCS-nP1pvOlr1a',
    name: 'City of Davis',
    source: 'CAMPAIGNDOCS',
    url: 'https://www.southtechhosting.com/DavisCity',
  },
  {
    id: 'CF-CAMPAIGNDOCS-Z1jbCJEn3r',
    name: 'County of Fresno',
    source: 'CAMPAIGNDOCS',
    url: 'https://campaigndocs.co.fresno.ca.us',
  },
];

// agencies should be moved into a parent app that has persistent data.
export const ALL_AGENCIES: Agency[] = [
  ...SDEFILE_AGENCIES,
  ...SAMPLE_NETFILE_AGENCIES,
  ...SAMPLE_CAMPAIGNDOCS_AGENCIES,
];
