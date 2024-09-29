import { ReactNode } from "react";

interface SegmentSideSheetProps {
  children: ReactNode;
  openSideSheet: boolean
  setopenSideSheet: any;
}

interface HeaderComponentProps {
  headerTitle: string;
  navigationPath: string;
}

export type {
  SegmentSideSheetProps,
  HeaderComponentProps
}