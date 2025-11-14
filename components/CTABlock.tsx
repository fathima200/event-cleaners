export type CTABlockProps = {
  variant: string;
  title: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
  
};

export const CTABlock = (props: CTABlockProps) => {
  return (
    <div
      className={`relative box-border caret-transparent mt-10 gap-x-6 flex flex-col shrink-0 h-min gap-y-6 w-full ${props.variant}`}
    >
      <div
        className={`relative box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min gap-y-2.5 w-full overflow-hidden ${props.variant === "content-start items-start basis-auto grow-0 justify-start md:content-end md:items-end md:gap-x-20 md:basis-0 md:grow-[0.5] md:justify-end md:gap-y-20 md:w-px" ? "content-start items-start justify-start md:content-end md:items-end md:justify-center" : "content-center items-center justify-center"}`}
      >
        <div className="box-border caret-transparent contents">
          <div
            className={`relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full ${props.variant === "content-center items-center justify-center md:w-6/12" ? "max-w-xs md:max-w-[360px]" : ""}`}
          >
            <p
              className={`text-base font-medium box-border caret-transparent tracking-[-0.64px] leading-[19.2px] break-words uppercase font-geist md:text-xl md:tracking-[-0.8px] md:leading-6 ${props.variant === "content-start items-start basis-auto grow-0 justify-start md:content-end md:items-end md:gap-x-20 md:basis-0 md:grow-[0.5] md:justify-end md:gap-y-20 md:w-px" ? "text-slate-900 text-right" : "text-white text-center"}`}
            >
              {props.title}
            </p>
          </div>
        </div>
        {props.description && (
          <div className="box-border caret-transparent contents">
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-center max-w-60 break-words w-full">
              <p className="text-slate-600 text-sm box-border caret-transparent tracking-[-0.56px] leading-[18px] break-words text-right font-geist md:text-[15px] md:tracking-[-0.6px] md:leading-[21px]">
                {props.description}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="box-border caret-transparent contents">
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
          </a>
        </div>
      </div>
    </div>
  );
};
