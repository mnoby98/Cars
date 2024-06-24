import exp from "constants";
import { MouseEventHandler, ReactEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManuFacturerProps {
  manuFacturer: string;
  setManuFacturer: (manuFactirer: string) => void;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

export interface OptionProps {
  title: string;
  value: string;
}
export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
  setFilter: (selected: string) => void;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (newLimit: number) => void;
}
