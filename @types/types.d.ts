type ICandidat =
  | "Danielle Simonnet"
  | "David Belliard"
  | "Anne Hidalgo"
  | "Cédric Villani"
  | "Agnès Buzyn"
  | "Rachida Dati"
  | "Serge Federbusch"
  | "Marcel Campion"
  | "Pierre-Yves Bournazel"
  | "Gaspard Gantzer";

type IPropositionType =
  | "Transports"
  | "Participation citoyenne"
  | "Écologie et pollution"
  | "Logement"
  | "Propreté"
  | "Sécurité"
  | "Éducation"
  | "Économie"
  | "Solidarité";

interface IProposition {
  text: string;
  source: string;
}

type IFilter = "candidate" | "type";

type ICandidatesInfo = {
  [candidate in ICandidat]: ICandidateInfo;
};

interface ICandidateInfo {
  image: string;
  bio: string;
  movement: string;
  party: string;
  website: string;
  color: string;
}

interface IRecord {
  Proposition: string;
  Candidat: ICandidat;
  Type: IPropositionType;
  Source: string;
  SousType: string;
}

interface ISheetData {
  records: Array<IRecord>;
}

type IPropsHash = {
  [lvlOne: string]: {
    [lvlTwo: string]: IProposition[];
  };
};

type IQuiz = {
  [type: string]: IQuestion;
};

type IQuestion = {
  [proposition: string]: ICandidat[];
};

type IHypermind = Array<{
  id: number;
  props: {
    color: string;
    title: ICandidat;
  };
  trades: Array<ITrade>;
}>;

interface ITrade {
  ts: number;
  price: number;
}
