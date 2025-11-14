import { notFound } from 'next/navigation';
import { servicesData } from '@/utils/servicesData';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/header';
import Footer from '@/components/footer';
import HowItWorksSection from '@/components/UI/HowItWorks';
import FinalCTA from '@/components/UI/FinalCTA';


// Generate static paths for all services
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
    <Navbar/>
{/* Hero Section */}
<section className="relative content-center items-center bg-slate-900 box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center gap-y-0 w-full overflow-hidden px-5 md:px-10">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/spraying-table.jpg"
      alt="Background"
      fill
      className="object-cover opacity-40"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/70 to-slate-900/90" />
    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-transparent to-slate-900/50" />
  </div>

  <div className="relative z-10 content-center items-center box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-center max-w-[680px] gap-y-10 w-full overflow-hidden pt-[150px] pb-10 md:gap-x-20 md:max-w-[1440px] md:gap-y-20 md:pt-40 md:pb-[100px]">
    {/* Hero Text */}
    <div className="relative content-center items-center box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-center gap-y-10 w-full">
      <div className="relative content-center items-center box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-min justify-center gap-y-6 w-[98%]">
        <div className="relative content-center items-center box-border caret-transparent gap-x-2 flex flex-col shrink-0 h-min justify-center gap-y-2 w-full">
          {/* Animated Badge */}
          <div className="mb-4 animate-bounce">
            <div className="inline-flex items-center gap-2 backdrop-blur-sm  rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-yellow-400  animate-pulse" />
              <p className="text-yellow-400 text-xs font-light tracking-wide  font-geist">
                TheEventCleaners
              </p>
            </div>
          </div>

          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
            <p className="text-zinc-300 text-sm box-border caret-transparent tracking-[-0.56px] leading-[16.8px] break-words text-center uppercase font-geist md:text-base md:tracking-[-0.64px] md:leading-[19.2px] drop-shadow-lg">
              {service.title}
            </p>
          </div>
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[450px] break-words w-full md:max-w-[920px]">
            <h1 className="text-white text-4xl font-medium box-border caret-transparent tracking-[-1.92px] leading-[44px] break-words text-center font-geist md:text-8xl md:tracking-[-3.84px] md:leading-[90px] drop-shadow-2xl">
              {service.subtitle}
            </h1>
          </div>
        </div>
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center max-w-[460px] break-words w-full md:max-w-[500px]">
          <p className="text-zinc-300 text-base box-border caret-transparent tracking-[-0.64px] leading-[21px] break-words text-center font-geist md:text-lg md:tracking-[-0.72px] md:leading-6 drop-shadow-lg">
            {service.description}
          </p>
        </div>
      </div>

      {/* Hero Buttons */}
      <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center gap-y-5 w-full md:flex-row">
        <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[70px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <Link
              href="/services"
              className="relative text-white content-center items-center bg-white/5 backdrop-blur-sm box-border caret-transparent gap-x-2 flex shrink-0 h-min justify-center gap-y-2 w-full overflow-hidden rounded-full border border-solid border-zinc-700 px-10 py-6 transition-all duration-300 hover:bg-white/10 hover:border-zinc-600 hover:shadow-[rgba(255,255,255,0.1)_0px_2px_20px_0px] md:shadow-[rgba(246,227,4,0.16)_0px_2px_20px_0px]"
            >
              <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
                <p className="text-sm font-medium box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words text-center font-geist md:text-base md:tracking-[-0.64px] md:leading-6">
                  Go back to services
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[70px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="/contact"
              className="relative text-slate-900 content-center items-center bg-yellow-400 box-border caret-transparent gap-x-2 flex shrink-0 h-min justify-center gap-y-2 w-full overflow-hidden rounded-full px-10 py-6 transition-all duration-300 hover:bg-yellow-300 hover:shadow-[rgba(246,227,4,0.5)_0px_8px_35px_0px] hover:scale-105 md:shadow-[rgba(246,227,4,0.32)_0px_8px_25px_0px]"
            >
              <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
                <p className="text-sm font-medium box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words text-center font-geist md:text-base md:tracking-[-0.64px] md:leading-6">
                  Get a free quote
                </p>
              </div>
              <div className="relative aspect-square box-border caret-transparent shrink-0 w-6 overflow-hidden transition-transform duration-300 group-hover:translate-x-1">
                <div className="absolute box-border caret-transparent inset-0">
                  <Image
                    src="https://c.animaapp.com/mhwem8rugib1hE/assets/icon-1.svg"
                    alt="Icon"
                    fill
                    className="box-border caret-transparent object-contain"
                    sizes="24px"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Hero Image */}
    <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center gap-y-5 w-full overflow-hidden md:flex-row">
      <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 transform-none w-full overflow-hidden rounded-3xl md:rounded-[32px] md:scale-[0.951528px] group">
        <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <div className="static box-content caret-black basis-auto grow-0 shrink h-auto min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:basis-0 md:grow md:shrink-0 md:h-[720px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <div className="static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
              <img
                sizes="max(min(100vw - 80px, 1440px), 1px)"
                src={service.heroImage}
                alt={service.title}
                className="box-content caret-black h-auto object-fill align-middle w-auto transition-transform duration-700 group-hover:scale-105 md:aspect-[auto_4928_/_3264] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
              />
            </div>
          </div>
        </div>
        {/* Yellow Border Frame on Hero Image */}
        <div className="absolute inset-4 border-2 border-yellow-400/50 rounded-2xl pointer-events-none transition-all duration-500 group-hover:border-yellow-400/80 group-hover:inset-3" />
      </div>
    </div>
  </div>
</section>
      {/* Service Details Section */}
      <section className="relative content-center items-center bg-zinc-200 box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center gap-y-0 w-full overflow-hidden px-5 py-[60px] md:px-10 md:py-[120px]">
        <div className="relative content-center items-center box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-center max-w-[680px] gap-y-10 w-full md:gap-x-20 md:max-w-[1440px] md:gap-y-20">
          {/* Section Header */}
          <div className="relative content-center items-center box-border caret-transparent gap-x-8 flex flex-col shrink-0 h-min justify-center gap-y-8 w-full overflow-hidden md:gap-x-5 md:flex-row md:gap-y-5">
            <div className="relative content-center items-center box-border caret-transparent gap-x-4 flex basis-auto flex-col grow-0 shrink-0 h-min justify-center gap-y-4 w-full md:gap-x-6 md:basis-0 md:grow md:gap-y-6 md:w-px">
              <div className="relative content-center items-center box-border caret-transparent gap-x-2 flex flex-col shrink-0 h-min justify-center gap-y-2 w-full">
                <div className="relative content-center items-center box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center gap-y-0 w-full overflow-hidden">
                  <div className="relative bg-yellow-400 box-border caret-transparent shrink-0 h-[3px] w-[33px]"></div>
                  <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
                    <p className="text-gray-500 text-sm box-border caret-transparent tracking-[-0.56px] leading-[16.8px] break-words text-center uppercase font-geist md:text-base md:tracking-[-0.64px] md:leading-[19.2px]">
                      {service.detailsBadge}
                    </p>
                  </div>
                </div>
                <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center max-w-[520px] gap-y-2.5 w-full md:max-w-none">
                  <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start max-w-none break-words w-px md:max-w-[700px]">
                    <h2 className="text-slate-900 text-5xl font-light box-border caret-transparent tracking-[-1.92px] leading-[48px] break-words text-center font-geist md:text-[80px] md:tracking-[-3.2px] md:leading-[75px]">
                      {service.detailsTitle}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="relative content-end items-end box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center max-w-[420px] gap-y-2.5 w-full overflow-hidden md:max-w-none">
                <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-center max-w-none break-words w-px md:max-w-[520px]">
                  <p className="text-slate-600 text-base box-border caret-transparent tracking-[-0.64px] leading-[21px] break-words text-center font-geist md:text-lg md:tracking-[-0.72px] md:leading-6">
                    {service.detailsSubtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative grid gap-4 md:gap-6 w-full grid-cols-1 md:grid-cols-4 md:grid-rows-3 auto-rows-fr">
  {service.serviceDetails.map((detail, index) => {
    const patterns = [
      'md:col-span-2 md:row-span-2',
      'md:col-span-2 md:row-span-1',
      'md:col-span-2 md:row-span-2',
      'md:col-span-2 md:row-span-1',
    ];
    
    const pattern = patterns[index % patterns.length];
    const mobileImagePosition = index % 2 === 0 ? 'order-1' : 'order-2';
    const mobileContentPosition = index % 2 === 0 ? 'order-2' : 'order-1';
    
    return (
      <div 
        key={index} 
        className={`relative group overflow-visible md:overflow-hidden bg-transparent md:bg-white rounded-2xl transition-all duration-500 md:hover:shadow-xl md:hover:-translate-y-1 ${pattern}`}
      >
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row h-full md:bg-white">
          {/* Image Container */}
          <div className={`relative overflow-hidden rounded-2xl bg-white ${mobileImagePosition} ${
            index % 2 === 0 
              ? 'md:w-1/2 h-72 md:h-full md:rounded-l-2xl md:rounded-r-none' 
              : 'md:w-2/5 h-72 md:h-full md:rounded-l-2xl md:rounded-r-none'
          }`}>
            <img 
              src={detail.imageUrl} 
              alt={detail.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Glass Border Effect with Text Label */}
            <div className="absolute inset-3 border-2 border-yellow-400/70 rounded-xl pointer-events-none transition-all duration-500 group-hover:border-yellow-400/90 group-hover:inset-2">
              
              {/* Top Label - Service Number */}
              <div className="absolute -top-3 left-6 bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full tracking-wider">
                #{(index + 1).toString().padStart(2, '0')}
              </div>
              
              {/* Bottom Right Label - "Premium Service" or "View Details" */}
              <div className="absolute -bottom-3 right-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 text-xs font-semibold px-4 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Premium Service
              </div>
              
      
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:bg-gradient-to-r" />
          </div>
          
          {/* Content Container */}
          <div className={`flex flex-col justify-center p-6 rounded-2xl md:rounded-none bg-white ${mobileContentPosition} ${
            index % 2 === 0 
              ? 'md:w-1/2 md:p-8' 
              : 'md:w-3/5 md:p-8'
          }`}>
            <p className="text-slate-900 text-xl md:text-2xl font-medium tracking-tight leading-tight mb-4 uppercase font-geist transform transition-transform duration-300 group-hover:translate-x-1">
              {detail.title}
            </p>
            <p className="text-gray-500 text-base md:text-[15px] tracking-tight leading-relaxed font-geist transition-colors duration-300 group-hover:text-gray-700">
              {detail.description}
            </p>
          </div>
        </div>
      </div>
    );
  })}
</div>
        </div>
      </section>
      <FinalCTA/>
      <HowItWorksSection/>
      <Footer/>
    </>
  );
}