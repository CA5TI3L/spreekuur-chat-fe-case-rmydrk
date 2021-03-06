export interface Gesprek {
  id: number;
  onderwerp: string;
  aangemaakt: Date;
}

export interface Bericht {
  id: number;
  gesprekId: number;
  afzenderId: number;
  inhoud: string;
  verzonden: Date;
  afzenderNaam?: string;
}

export interface Persoon {
  id: number;
  naam: string;
}
