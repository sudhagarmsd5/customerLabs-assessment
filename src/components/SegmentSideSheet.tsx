import React, { ReactNode } from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/lib/ui/sheet"
import { SegmentSideSheetProps } from '@/types/interface'
import Header from './header/Header'

const SegmentSideSheet: React.FC<SegmentSideSheetProps> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent>
        {/*  <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">

          </div>
          <div className="grid grid-cols-4 items-center gap-4">

          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
          </SheetClose>
        </SheetFooter> */}
        <Header headerTitle='Saving Segment' navigationPath='/' />

      </SheetContent>
    </Sheet>
  )
}


export default SegmentSideSheet