"use client"
export type CTAButtonProps = {
    href: string;
    text: string;
    iconSrc: string;
    variant: string;
    textVariant: string;
    iconContainerVariant: string;
    iconWrapperVariant: string;
    iconVariant: string;
  };
  
  export const CTAButton = (props: CTAButtonProps) => {
    return (
      <div
        className={`relative box-border caret-transparent shrink-0 h-14 ${props.variant}`}
      >
        <a
          href={props.href}
          className={`relative text-blue-700 content-center items-center box-border caret-transparent gap-x-5 flex h-full justify-center gap-y-5 w-min pr-3 rounded-[35px] ${props.textVariant}`}
        >
          <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min">
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
              <p
                className={`text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px] ${props.iconVariant}`}
              >
                {props.text}
              </p>
            </div>
          </div>
          <div
            className={`relative content-center items-center aspect-square box-border caret-transparent gap-x-2.5 flex shrink-0 justify-center gap-y-2.5 overflow-hidden rounded-[23px] ${props.iconContainerVariant}`}
          >
            <div
              className={`relative box-border caret-transparent shrink-0 ${props.iconWrapperVariant}`}
            >
              <div className="box-border caret-transparent contents">
                <img
                  src={props.iconSrc}
                  alt="Icon"
                  className={`box-border caret-transparent inline-block shrink-0 h-full w-full ${props.iconVariant}`}
                />
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  };
  
  // CTAContent.tsx
  
  export const CTAContent = () => {
    return (
      <div className="relative content-center items-center bg-slate-900 box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-center gap-y-10 w-full overflow-hidden p-5 rounded-2xl md:gap-x-[104px] md:gap-y-[104px] md:p-10 md:rounded-[32px]">
        <div className="relative content-start items-start box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-start gap-y-10 w-full md:content-end md:items-end md:gap-x-[normal] md:flex-row md:justify-between md:gap-y-[normal]">
          <div className="relative content-start items-start box-border caret-transparent gap-x-6 flex basis-auto flex-col grow-0 shrink-0 h-min justify-start order-1 gap-y-6 w-full md:gap-x-8 md:basis-0 md:grow md:order-none md:gap-y-8 md:w-px">
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-60 break-words w-full md:max-w-[404px]">
              <h2 className="text-white text-5xl font-light box-border caret-transparent tracking-[-1.92px] leading-[48px] break-words font-geist md:text-[80px] md:tracking-[-3.2px] md:leading-[75px]">
                Cleaning that works around you
              </h2>
            </div>
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-60 break-words w-full md:max-w-xs">
              <p className="text-stone-50 text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] break-words font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px]">
                Our expert cleaners handle the mess so you can focus on what
                matters.
              </p>
            </div>
          </div>
          <div className="relative content-end items-end box-border caret-transparent gap-x-1 flex basis-auto flex-col grow-0 shrink-0 h-min justify-start gap-y-1 w-full md:gap-x-2 md:basis-0 md:grow md:gap-y-2 md:w-px">
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
              <p className="text-stone-50 text-sm box-border caret-transparent tracking-[-0.56px] leading-[16.8px] break-words text-right uppercase font-geist md:text-base md:tracking-[-0.64px] md:leading-[19.2px]">
                Home cleaning
              </p>
            </div>
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
              <p className="text-stone-50 text-sm box-border caret-transparent tracking-[-0.56px] leading-[16.8px] break-words text-right uppercase font-geist md:text-base md:tracking-[-0.64px] md:leading-[19.2px]">
                Store Cleaning
              </p>
            </div>
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
              <p className="text-stone-50 text-sm box-border caret-transparent tracking-[-0.56px] leading-[16.8px] break-words text-right uppercase font-geist md:text-base md:tracking-[-0.64px] md:leading-[19.2px]">
                Workspace cleaning
              </p>
            </div>
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
              <p className="text-stone-50 text-sm box-border caret-transparent tracking-[-0.56px] leading-[16.8px] break-words text-right uppercase font-geist md:text-base md:tracking-[-0.64px] md:leading-[19.2px]">
                Move - In/Out Cleaning
              </p>
            </div>
          </div>
        </div>
        <div className="relative content-start items-start bg-yellow-400 box-border caret-transparent gap-x-4 flex flex-col shrink-0 h-min justify-start gap-y-4 w-full overflow-hidden p-4 rounded-2xl md:content-center md:items-center md:gap-x-[normal] md:flex-row md:justify-between md:gap-y-[normal] md:p-6">
          <div className="relative box-border caret-transparent flex basis-auto flex-col grow-0 shrink-0 justify-start max-w-40 break-words w-full md:basis-0 md:grow md:max-w-[200px] md:w-px">
            <p className="text-slate-900 text-base font-medium box-border caret-transparent tracking-[-0.64px] leading-[19.2px] break-words uppercase font-geist md:text-xl md:tracking-[-0.8px] md:leading-6">
              Got a space in need of a refresh?
            </p>
          </div>
          <CTAButton
            href="https://cal.com/radecreatives/30min"
            text="Schedule a call"
            iconSrc="https://c.animaapp.com/mhwb5tz7ykzNt6/assets/icon-3.svg"
            variant="md:h-16"
            textVariant="bg-slate-900 shadow-[rgba(8,29,58,0.32)_0px_8px_25px_0px] pl-6 py-6"
            iconContainerVariant="bg-yellow-400 w-10"
            iconWrapperVariant="h-5 w-5"
            iconVariant="text-yellow-400 text-slate-900"
          />
        </div>
      </div>
    );
  };
  
  // CTASection.tsx
  
  export type CTASectionProps = {
    variant?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonHref?: string;
    iconSrc?: string;
    iconAlt?: string;
  };
  
  export const CTASection = (props: CTASectionProps) => {
    if (props.variant === "simple") {
      return (
        <section className="relative content-center items-center bg-zinc-100 box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center min-h-[auto] gap-y-0 w-full overflow-hidden px-5 py-10 md:min-h-[1000px] md:px-10 md:py-20">
          <div className="relative content-center items-center box-border caret-transparent gap-x-5 flex flex-col shrink-0 h-min justify-center max-w-[680px] gap-y-5 w-full md:gap-x-10 md:max-w-[1440px] md:gap-y-10">
            <CTAContent />
          </div>
        </section>
      );
    }
    return (
      <div className="relative content-start items-start box-border caret-transparent gap-x-6 flex basis-auto flex-col grow-0 shrink-0 h-min justify-start gap-y-6 w-full md:content-end md:items-end md:gap-x-20 md:basis-0 md:grow-[0.5] md:justify-end md:gap-y-20 md:w-px">
        <div className="relative content-start items-start box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-start gap-y-2.5 w-full overflow-hidden md:content-end md:items-end md:justify-center">
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
            <p className="text-slate-900 text-base font-medium box-border caret-transparent tracking-[-0.64px] leading-[19.2px] break-words text-right uppercase font-geist md:text-xl md:tracking-[-0.8px] md:leading-6">
              {props.title}
            </p>
          </div>
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center max-w-60 break-words w-full">
            <p className="text-slate-600 text-sm box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words text-right font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
              {props.description}
            </p>
          </div>
        </div>
        <div className="relative box-border caret-transparent shrink-0 h-14 md:h-[70px]">
          <a
            href={props.buttonHref}
            className="relative text-blue-700 content-center items-center bg-yellow-400 shadow-[rgba(246,227,4,0.32)_0px_8px_25px_0px] box-border caret-transparent gap-x-5 flex h-full justify-center gap-y-5 w-min pl-10 pr-3 py-[30px] rounded-[35px]"
          >
            <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min">
              <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
                <p className="text-slate-900 text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px]">
                  {props.buttonText}
                </p>
              </div>
            </div>
            <div className="relative content-center items-center aspect-square bg-slate-900 box-border caret-transparent gap-x-2.5 flex shrink-0 justify-center gap-y-2.5 w-[46px] overflow-hidden rounded-[23px]">
              <div className="relative box-border caret-transparent shrink-0 h-[22px] w-[22px]">
                <div className="box-border caret-transparent contents">
                  <img
                    src={props.iconSrc}
                    alt={props.iconAlt}
                    className="text-yellow-400 box-border caret-transparent inline-block shrink-0 h-full w-full"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  };