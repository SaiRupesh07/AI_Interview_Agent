import React, { useState } from 'react'
import Step1SetUp from '../components/Step1SetUp'
import Step2interview from '../components/Step2interview'
import Step3Report from '../components/Step3Report'

function InterviewPage() {

  const [step, setStep] = useState(1)
  const [interviewData, setinterviewData] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50">

      {/* STEP 1 */}
      {step === 1 && (
        <Step1SetUp
          onStart={(data) => {
            setinterviewData(data)
            setStep(2)}}/>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <Step2interview
          interviewData={interviewData}
          onFinish={(report) =>{setinterviewData(report);
             setStep(3)}} />
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <Step3Report
          interviewData={interviewData}/>
      )}

    </div>
  )
}

export default InterviewPage