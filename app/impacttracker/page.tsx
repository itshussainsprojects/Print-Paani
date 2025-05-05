'use client'

import EnvironmentalImpactTracker from './environmental-impact-tracker'
import ConsumerImpactTracker from './consumer-impact-tracker'
// import adminControlPanel from './admin-control-panel';
// import AdminControlPanel from './admin-control-panel';
export default function ImpactTrackerPage() {
  return (
    <div className="container mx-auto py-8">
      <ConsumerImpactTracker />
      {/* <EnvironmentalImpactTracker /> */}
   
    </div>
  )
}

