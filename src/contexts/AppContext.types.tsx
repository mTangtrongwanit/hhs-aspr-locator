export interface AppContextType {
  bannerHeight: number;
  setBannerHeight: (x: number) => void;
  headerHeight: number;
  setHeaderHeight: (x: number) => void;
  searchPoint: { name: string; point: __esri.Point } | null;
  setSearchPoint: (x: { name: string; point: __esri.Point } | null) => void;
  locationsMapView: __esri.MapView | null;
  setLocationsMapView: (x: __esri.MapView) => void;
  selectedTreatmentSite: __esri.Graphic | null;
  setSelectedTreatmentSite: (x: __esri.Graphic) => void;
  locations: __esri.Graphic[] | null;
  locationsExtent: __esri.Extent | null;
}

export interface AppContextProps {
  children?: React.ReactNode;
}
