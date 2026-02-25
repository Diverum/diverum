import { useEffect } from 'react'

const CALENDLY_URL = 'https://calendly.com/sayr/30min'

export default function AgendarReunionPage() {
  useEffect(() => {
    window.location.replace(CALENDLY_URL)
  }, [])

  return null
}
