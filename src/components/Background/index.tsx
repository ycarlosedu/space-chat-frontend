type BackGroundProps = {
  children?: React.ReactNode
}

export default function Background({children}: BackGroundProps) {
  return (
    <>
      <div className="bg"></div>
      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>

      <section className="min-w-screen min-h-screen grid place-items-center py-8">
        {children}
      </section>
    </>
  )
}
