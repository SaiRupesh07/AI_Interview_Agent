import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { ServerUrl } from '../App';
import Step3Report from '../components/Step3Report';

function InterviewReport() {

  const { id } = useParams()
  const [report, setReport] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    if (!id) return   // ⭐ important safety

    const fetchReport = async () => {
      try {
        const result = await axios.get(
          ServerUrl + "/api/interview/report/" + id,
          { withCredentials: true }
        )

        console.log("REPORT DATA → ", result.data)

        setReport(result.data)

      } catch (error) {
        console.log("REPORT ERROR → ", error)
      } finally {
        setLoading(false)
      }
    }

    fetchReport()

  }, [id])   // ⭐ important fix


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">
          Loading Report...
        </p>
      </div>
    )
  }

  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">
          Failed to load report
        </p>
      </div>
    )
  }

  return <Step3Report report={report} />
}

export default InterviewReport