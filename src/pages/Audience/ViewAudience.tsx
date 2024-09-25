import React from 'react'
import SegmentSideSheet from '@/components/SegmentSideSheet'
import Header from '@/components/header/Header'

const ViewAudience = () => {
    return (
        <section className=''>
            <Header headerTitle='View Audience' navigationPath='/' />
            <div className='p-2'>
                <SegmentSideSheet>
                    <button type='button' className='bg-blue-300 py-2 px-3 font-medium text-sm text-white'>Save segment</button>
                </SegmentSideSheet>
            </div>
        </section>
    )
}

export default ViewAudience