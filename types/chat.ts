export interface ChatResponses {
  greeting: string[];
  nameCollected: string[];
  contactCollected: string[];
  services: string[];
  pricing: {
    digital: string;
    offset: string;
    default: string;
  };
  specifications: string[];
  contact: string[];
  orderProcess: string[];
  delivery: string[];
  payment: string[];
  socialImpact: string[];
  default: string[];
}

export interface Message {
  text: string;
  isBot: boolean;
}