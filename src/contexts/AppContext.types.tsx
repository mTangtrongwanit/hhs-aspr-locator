export interface AppContextType {
  bannerHeight: number;
  setBannerHeight: (x: number) => void;
  headerHeight: number;
  setHeaderHeight: (x: number) => void;
  searchPoint: __esri.Point | null;
  setSearchPoint: (x: __esri.Point | null) => void;
  locationsMapView: __esri.MapView | null;
  setLocationsMapView: (x: __esri.MapView) => void;
  selectedTreatmentSite: __esri.Graphic | null;
  setSelectedTreatmentSite: (x: __esri.Graphic) => void;
  illnessesTreatments: { [key: string]: string[] };
  selectedSort: { label: string; value: string };
  setSelectedSort: (x: { label: string; value: string }) => void;
}

export interface AppContextProps {
  children?: React.ReactNode;
}
