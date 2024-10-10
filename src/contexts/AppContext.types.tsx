import { FilterType } from "@/utils";

export interface AppContextType {
  bannerHeight: number;
  setBannerHeight: (x: number) => void;
  headerHeight: number;
  setHeaderHeight: (x: number) => void;
  searchPoint: { name: string; point: __esri.Point } | null;
  setSearchPoint: (x: { name: string; point: __esri.Point } | null) => void;
  locationsMapView: __esri.MapView | null;
  setLocationsMapView: (x: __esri.MapView) => void;
  // TODO: restore logic that scrolls to this card
  selectedTreatmentSite: __esri.Graphic | null;
  setSelectedTreatmentSite: (x: __esri.Graphic) => void;
  treatmentIllnessLookup: { [key: string]: string[] };
  treatmentIllnessData: __esri.Graphic[] | null;
  locations: __esri.Graphic[] | null;
  setLocations: (x: __esri.Graphic[] | null) => void;
  locationsExtent: __esri.Extent | null;
  setTILookup: (x: { [key: string]: string[] }) => void;
  selectedSort: { label: string; value: string };
  setSelectedSort: (x: { label: string; value: string }) => void;
  selectedIllness: { label: string; value: string };
  setSelectedIllness: (x: { label: string; value: string }) => void;
  sharedSiteFacilityID: string | null;
  setSFID: (x: string | null) => void;
  selectedMedications: string[];
  setSelectedMedications: (x: string[]) => void;
  selectedFilters: Filter[];
  setSelectedFilters: (x: Filter[]) => void;
  featureLayer: __esri.FeatureLayer | null;
  setFeatureLayer: (x: __esri.FeatureLayer | null) => void;
  // sortedSites setSortedSites
  sortedSites: any[];
  setSortedSites: (x: any[]) => void;
}

export interface AppContextProps {
  children?: React.ReactNode;
}
