const photos = [
  {
    size: 'field-large',
    height: 420,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAnRwUhdzFwGqCqbZFjWXAnGDvd4a7zuJqurHHm0K3owlgrg6j-BXH-4ScMd-13KedQp6RvqIC0dXJJ6C_hIkmaIIrZfSFWUS4AU9d8E_N_488NnyXgQFc87M2FNbhl26ZOP7qycIVoc-7PrUYPa7Zxhv9A3FGX2CqP56AvrzN2LDNnsOzYpND0guSIMOeQuBuz1xFerX26zDvl51kBDRycZFNIRSSi2fCqmwAJvg_HQ4BIkn7tRq1',
    alt: 'Heavy industrial drone flying over misty paddy fields during field validation trials',
    title: 'FIELD TEST // CROP CANOPY DISPERSAL',
    sub: 'GEO: ODISHA INTERIOR'
  },
  {
    size: 'field-tall',
    height: 420,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNOj3KYQTdqP-Zxq0jqGOmYw1ye6_myUi9W-Cr2RTV6oOPLyszi64kO8hBDFNoas4KvneAQ8Unww6o-KiXXGXO1dCP-aCGo5244CNDn0ku85QC2jfGrqbLDznnEB4agw2cVDDPtiJGhNVyMuYTLW6R7d2bb7uDkaH0sDls1vfVLqlRsV2kbKNZL-r96_iMD74izgfqoIHbCdpl1skee1pbD4D0X7ESBDVJ8jfrG6LciOvmgN-Szn5j',
    alt: 'Aerospace engineer checking torque specifications on carbon fiber propeller hub',
    title: 'ASSEMBLY // PROPULSION AUDIT',
    sub: 'REV 3.1'
  },
  {
    size: 'field-sm',
    height: 224,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLLbYf_aT8ZHMItwJ5WE6Fbwdcwb44THqwyIT4zX_2-rd9EwKMMHZc00RXzaKlQl4NV1ioviqBliJS52x8BFQ3f-1IYFWgNX_BFvw_lGRBaf3H5YbjeoUlWD0caZW6hm_hfXsCx3VWJ2Hd-QOMNwKkMVDjOyXJmiePAPM7N2o_IIGa6p9Fot6r01zu8Altw8t9vv_-lCWW-rWJYYgayMVnYUMFyAWVH2vXKaVVm_ji0egnh2f1vhzz',
    alt: 'Ruggedized field ground control telemetry station showing map overlays',
    title: 'FLIGHT SYSTEM',
    sub: 'GCS GROUND TERMINAL'
  },
  {
    size: 'field-sm',
    height: 224,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVada8w-v2OIr3bSpSu02LOJLYTRIISUmF1gmAcPCyzKN5cK1uCLoqy9eoMYztA1bUCetXGameoQFCsXBcoSCX_JR7JPPysbjPEr9eOktYjUL5EZaQyEX7pp1qwLg-Bkk2cI7fxYmdkq3faoxZoW31eUrputdnthu0DL9xhUfQYmHvCZeu3fr1hAobkpVfBxUf6_9GJA4fbWG6LIAetTFGelTeQd_zq23PqEBPJGRe0oOmMkgEzYrM',
    alt: 'Field engineering crew inspecting drone landing pad after autonomous recovery mission',
    title: 'DEPLOYMENT',
    sub: 'RECOVERY CREW'
  },
  {
    size: 'field-sm',
    height: 224,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwvJbYeXso34Uu_p-n2FrMDJ3CIPGhuHeB3oCCSO1JsTIJJ4d0GB2sJDspHvLYH6DPGh4p5odc0DCBOq2a0yi38D0TuLzN_vcV7PI2YNbLBNWz-XPT4PxaAG4qCU-_nXJi4xzvkPiofwcLDtpjmfckGcWGhLmDdEIbik0bWtGjWLvv0VfdXj1RRUUO2umNbiQrn_9iqTvQZHDDxoaTi21dIzYIpm1jBPkFsWEMTH-koT5sSurLkuyh',
    alt: 'Macro close-up of sensor payload lens with anti-reflective coating',
    title: 'VALIDATION',
    sub: 'PAYLOAD OPTICS'
  }
]

export default function InTheField() {
  return (
    <section className="section-field">
      <div className="container py-2xl">
        <div className="section-header">
          <span className="section-label">07 / IN THE FIELD</span>
          <h2 className="section-h2">BUILT IN THE LAB. TESTED IN THE FIELD.</h2>
          <p className="section-desc">
            Real operating conditions do not care about laboratory simulations. We validate in torrential monsoons, agricultural dust, and remote forest terrain.
          </p>
        </div>

        <div className="field-gallery">
          {photos.map((photo, i) => (
            <div key={i} className={`field-card ${photo.size}`}>
              <div className="field-card-img" style={{ height: photo.height }}>
                <img src={photo.img} alt={photo.alt} />
              </div>
              <div className="field-card-bar">
                <span className="field-card-bar-title">{photo.title}</span>
                <span className="field-card-bar-sub">{photo.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
