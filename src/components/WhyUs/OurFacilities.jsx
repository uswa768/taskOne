import heroImg from "../../assets/image.png";
import facilities from "../../assets/facilities.jpeg";

function OurFacilities() {
    return (
        <section className="bg-[#1a1610] py-12 md:py-20 px-6 md:px-16 lg:px-24">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="hidden md:block w-fit md:w-1/2">
                    <img src={facilities}
                        alt="Facilities"
                        className="w-full h-[500px] object-cover"
                    />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 text-white">
                    <p className="text-[#c8a46b] tracking-[3px] text-xs uppercase mb-4">
                        Our Facilities
                    </p>

                    <h2 className="text-3xl md:text-5xl font-serif mb-6">
                        Built for <br />
                        <span className="text-[#c8a46b]">Sclae</span>
                    </h2>

                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                        Our production network spans three strategically located facilities — Milan (Italy), Porto (Portugal), and Istanbul (Turkey) — ensuring we can serve European, Middle Eastern, and global markets with optimal logistics.
                    </p>

                    <p className="text-white/70 text-sm leading-relaxed mb-8">
                         Each facility is equipped with the latest in knitting, dyeing, and finishing technology, and staffed by experienced textile engineers who maintain our exacting quality standards.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default OurFacilities;
