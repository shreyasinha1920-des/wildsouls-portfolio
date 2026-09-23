import Field from '../components/Field'
import Pill from '../components/Pill'

export default function NotFound() {
  return (
    <Field field="terracotta" className="py-section">
      <div className="container-wild">
        <p className="eyebrow mb-3">Page not found</p>
        <h1 className="max-w-[14ch] text-display-1 font-black">This page wandered off the map.</h1>
        <p className="mt-6 max-w-[45ch]">The link may be old, or the page has moved. The work is all still here.</p>
        <Pill to="/" className="mt-10">Back to home</Pill>
      </div>
    </Field>
  )
}
