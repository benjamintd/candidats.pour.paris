type ICandidat =
  | "Danielle Simonnet"
  | "David Belliard"
  | "Anne Hidalgo"
  | "Cédric Villani"
  | "Benjamin Griveaux"
  | "Rachida Dati"
  | "Serge Federbusch";

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
