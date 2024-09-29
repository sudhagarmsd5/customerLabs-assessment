import React, { useState } from 'react'
import SegmentSideSheet from '@/components/SegmentSideSheet'
import Header from '@/components/header/Header'
import { Sheet, SheetContent, SheetTrigger } from '@/lib/ui/sheet'

const ViewAudience = () => {
    const [openSideSheet, setopenSideSheet] = useState(false)
    return (
        <section className=''>
            <Header headerTitle='View Audience' navigationPath='/' />
            <div className='p-2'>

                <Sheet open={openSideSheet} onOpenChange={setopenSideSheet}>
                    <SheetTrigger asChild>
                        <button type='button' className='bg-blue-300 py-2 px-3 font-medium text-sm text-white'>Save Segment</button>

                    </SheetTrigger>
                    <SheetContent className='w-full max-w-lg'>

                        {
                            openSideSheet && (
                                <SegmentSideSheet setopenSideSheet={setopenSideSheet}>
                                </SegmentSideSheet>
                            )
                        }

                    </SheetContent>
                </Sheet >
            </div>
        </section>
    )
}

export default ViewAudience