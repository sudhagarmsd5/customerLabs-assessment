import { ReactNode } from "react";

interface SegmentSideSheetProps {
  children: ReactNode;
}

interface HeaderComponentProps {
  headerTitle: string;
  navigationPath: string;
}

export type {
  SegmentSideSheetProps,
  HeaderComponentProps
}