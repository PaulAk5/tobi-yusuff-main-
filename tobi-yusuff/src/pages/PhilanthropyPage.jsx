import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

export default function PhilanthropyPage() {
  const navigate = useNavigate();

  return (
    <>
    <SEO
      title="Philanthropy — Tobi Yusuff"
      description="Leveraging influence, resources and networks to create meaningful impact in communities that need it most. Including the Summit for Lupus initiative."
      image="/lupus.png"
      url="/philanthropy"
    />
      {/* Big quote */}
      <section className="pt-16 md:pt-24 pb-6 md:pb-8 px-6 md:px-20 bg-cream">
        <h2 className="font-serif text-3xl md:text-5xl pt-5 lg:text-5xl font-light leading-tight max-w-5xl mx-auto text-center">
          Leveraging influence, resources and networks to create meaningful impact in communities that need it most
        </h2>
      </section>

      {/* Our Programs */}
      <section className="py-6 md:py-10 px-6 md:px-20 bg-cream">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-serif text-[1.80rem] font-bold tracking-[0.2em] uppercase text-black mb-3">Our Programs</p>
          <p className="text-[1rem] text-muted mx-auto">
            Through strategic partnership and focused initiatives, we are working to address critical health and social challenges.
          </p>
        </div>

        {/* Program Cards */}
        <div className="flex justify-center">
          <div className="w-full max-w-xl overflow-hidden shadow-sm">
            <img
              src="/lupus.png"
              alt="Summit for Lupus"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="bg-[#e8e4e0] p-8 flex flex-col items-center text-center gap-3">
              <h3 className="font-serif text-2xl font-light">Summit for Lupus</h3>
              <p className="text-sm text-muted">A climb to the peak of Mt. Kilimanjaro.</p>
              <p className="text-sm text-[#7c5cbf] leading-relaxed">A Lupus awareness and fundraising initiative for people living with Lupus in Nigeria.</p>
              <button
                onClick={() => navigate("/philanthropy/lupus-summit")}
                className="mt-2 px-6 py-2 bg-[#3d2b6b] text-white text-[0.78rem] font-medium tracking-[0.08em] hover:bg-black transition-colors border-none cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}