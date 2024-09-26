export interface AppContextType {
  bannerHeight: number;
  setBannerHeight: (x: number) => void;
  headerHeight: number;
  setHeaderHeight: (x: number) => void;
  searchPoint: __esri.Point | null;
  setSearchPoint: (x: __esri.Point | null) => void;
}

export interface AppContextProps {
  children?: React.ReactNode;
}
