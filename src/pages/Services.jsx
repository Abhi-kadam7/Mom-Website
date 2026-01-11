const Services = () => {
  const services = [
    "Blouse Stitching",
    "Salwar Suit Stitching",
    "Kurti Stitching",
    "Alterations",
    "Kids Dress Stitching",
    "Saree Fall & Pico"
  ]

  return (
    <div className="min-h-screen px-6 py-10 bg-pink-50">
      <h2 className="text-3xl font-bold text-pink-700 mb-6">
        Our Services
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            {s}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
