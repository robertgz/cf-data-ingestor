// Object Returned from storage
export interface Candidate {
  id: number;
  // date: string;
  // type: string;
}

// Object Sent to storage
export interface CandidateInput {
  electionId: number;

  // date: string;
  // type: string;
}

// Object Returned from download
export interface CandidateDownload {
  fullOfficeName: string;

  agency: string;
  candidateName: string;
  coeId: string;
  district: string;
  electionId: string;
  filerId: string;
  firstName: string;
  jurisdictionCode: string;
  jurisdictionId: string;
  jurisdictionName: string;
  jurisdictionType: string;
  lastName: string;
  middleName: string;
  office: string;
  officeCode: string;
  officeId: string;
  suffix: string;
  title: string;
}
