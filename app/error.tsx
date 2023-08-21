'use client' // Error components must be Client Components
 
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
    const router = useRouter()
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Oops ... Something went wrong!</h2>
      <button
        onClick={
          () => router.push('/')
        }
      >
        Try again
      </button>
    </div>
  )
}