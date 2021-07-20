export as namespace Types;

export type Maybe<T> = T | null;

export type HeaderProps = {
  value: number;
  handleValue: (e: any, newValue: number) => void;
};

export type GitHubProps = {
  id: string;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
};

export type Educations = {
  school: Education;
};
export type Education = {
  name: string;
  description: string;
  startAt: string | null;
  endAt: string | null;
};

export type WorkExperiences = {
  company: Experience;
};
export type Experience = {
  name: string;
  experience: string[];
  startAt: string;
  endAt: string;
  title: string;
};

export type SelectedImg = {
  img: string;
  title: string;
  author: string;
  featured: boolean;
};

export type GridImagesProps = {
  setSelectedImg: React.Dispatch<React.SetStateAction<Maybe<SelectedImg>>>;
  images: SelectedImg[];
};

export type TechnicalSkillsProps = {
  height: number;
  width: number;
};

export type ActivityProps = {
  activity: Activity;
};

export type Activity = {
  map: Map;
  name: string;
  distance: number;
  max_watts: number;
  average_speed: number;
  average_cadence: number;
  total_elevation_gain: string;
  weighted_average_watts: number;
};

export type Map = {
  summary_polyline: string;
};

export type TableTitleProp = {
  title: string;
};
