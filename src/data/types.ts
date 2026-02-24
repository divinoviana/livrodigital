export interface Activity {
  id?: string;
  title: string;
  description?: string;
  questions?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface Class {
  id: string;
  class_number: number;
  title: string;
  objectives: string[];
  theory: {
    title: string;
    content: string;
    sections?: {
      title: string;
      items: string[];
    }[];
  };
  methodology: {
    steps: {
      title: string;
      duration: string;
      description: string;
    }[];
  };
  activities: Activity[];
  reflectionQuestions: string[];
}

export interface Bimestre {
  id: string;
  number: number;
  title: string;
  classes: Class[];
}

export interface Serie {
  id: string;
  number: number;
  title: string;
  bimestres: Bimestre[];
}

export interface BookContent {
  author: string;
  presentation: string;
  series: Serie[];
}
