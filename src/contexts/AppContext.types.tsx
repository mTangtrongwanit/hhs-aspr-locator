import { FilterType } from "@/utils";
import { Dispatch, SetStateAction } from "react";

export interface AppContextType {
  bannerHeight: number;
  setBannerHeight: (x: number) => void;
  headerHeight: number;
  setHeaderHeight: (x: number) => void;

  featureLayer: __esri.FeatureLayer | null;
  setFeatureLayer: (x: __esri.FeatureLayer | null) => void;
  locationsMapView: __esri.MapView | null;
  setLocationsMapView: (x: __esri.MapView) => void;

  treatmentIllnessData: __esri.Graphic[] | null;
  treatmentIllnessLookup: {
    [key: string]: {
      name: string;
      field: string;
    }[];
  };
  locations: __esri.Graphic[];

  sharedSiteFacilityID: string | null;
  setSFID: (x: string | null) => void;

  searchPoint: { name: string; point: __esri.Point } | null;
  setSearchPoint: (x: { name: string; point: __esri.Point } | null) => void;
  selectedIllness: { label: string; value: string };
  setSelectedIllness: (x: { label: string; value: string }) => void;
  selectedMedications: string[];
  setSelectedMedications: (x: string[]) => void;
  selectedFilters: FilterType[];
  setSelectedFilters: Dispatch<SetStateAction<FilterType[]>>;
  selectedSort: { label: string; value: string };
  setSelectedSort: (x: { label: string; value: string }) => void;
  selectedTreatmentSite: __esri.Graphic | null;
  setSelectedTreatmentSite: (x: __esri.Graphic) => void;
  circle: __esri.Circle | null;
  filteredSites: __esri.Graphic[];
}

export interface AppContextProps {
  children?: React.ReactNode;
}
