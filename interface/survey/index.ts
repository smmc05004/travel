export interface optionProps {
  option: string;
}
export interface SurveyProps {
  question: string;
  type: number;
  options: optionProps[];
}

export interface SurveyState {
  survey: SurveyProps[];
}
