export const CTAButton = () => {
  return (
    <div className="relative box-border caret-transparent shrink-0 h-14 md:h-[70px]">
      <a
        href="https://neative.framer.website/services"
        className="relative text-blue-700 content-center items-center bg-yellow-400 shadow-[rgba(246,227,4,0.32)_0px_8px_25px_0px] box-border caret-transparent gap-x-5 flex h-full justify-center gap-y-5 w-min pl-10 pr-3 py-[30px] rounded-[35px]"
      >
        <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min">
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
            <p className="text-slate-900 text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px]">
              Explore our services
            </p>
          </div>
        </div>
        <div className="relative content-center items-center aspect-square bg-slate-900 box-border caret-transparent gap-x-2.5 flex shrink-0 justify-center gap-y-2.5 w-[46px] overflow-hidden rounded-[23px]">
          <div className="relative box-border caret-transparent shrink-0 h-[22px] w-[22px]">
            <div className="box-border caret-transparent contents">
              <img
                src="https://c.animaapp.com/mhuxto4j5mnRzD/assets/icon-1.svg"
                alt="Icon"
                className="text-yellow-400 box-border caret-transparent inline-block shrink-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
