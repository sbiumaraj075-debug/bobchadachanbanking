export type Screen = 'home' | 'services' | 'upload' | 'history' | 'profile' | 'agent-profile' | 'settings' | 'cash-counter';

export interface Service {
  id: string;
  title: string;
  titleKn: string;
  description: string;
  icon: string;
}

export interface ApplicationStatus {
  id: string;
  title: string;
  titleKn: string;
  status: 'pending' | 'completed' | 'in-progress' | 'rejected';
  date: string;
  dateKn: string;
  icon: string;
}
