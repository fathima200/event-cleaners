"use client"
import Image from "next/image";
import { type FC } from "react";


export type SectionHeaderProps = {
  variant: string;
  tagText: string;
  tagClassName?: string;
  title: string;
  titleClassName?: string;
  description: string;
  descriptionClassName?: string;
  showLink?: boolean;
  linkText?: string;
  linkUrl?: string;
  linkIconSrc?: string;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  const getContainerClassName = () => {
    if (props.variant === "variant1")
      return "relative box-border caret-transparent flex flex-col shrink-0 h-min w-full content-start items-start gap-x-4 justify-start opacity-[0.991909] gap-y-4 md:gap-x-6 md:gap-y-6";
    if (props.variant === "variant2")
      return "relative box-border caret-transparent flex flex-col shrink-0 h-min w-full content-start items-start gap-x-8 justify-start gap-y-8 overflow-hidden md:gap-x-5 md:flex-row md:gap-y-5";
    return "relative box-border caret-transparent flex flex-col shrink-0 h-min w-full content-center items-center gap-x-8 justify-center gap-y-8 overflow-hidden md:gap-x-5 md:flex-row md:gap-y-5";
  };

  const getInnerContainerClassName = () => {
    if (props.variant === "variant1")
      return "relative box-border caret-transparent flex flex-col shrink-0 h-min w-full content-start items-start gap-x-2 justify-center gap-y-2";
    if (props.variant === "variant2")
      return "relative box-border caret-transparent flex flex-col shrink-0 h-min w-full content-start items-start gap-x-2.5 basis-auto grow-0 justify-start opacity-[0.980566] gap-y-2.5 translate-y-[0.777358px] overflow-hidden md:gap-x-8 md:basis-0 md:flex-row md:grow md:gap-y-8 md:w-px";
    return "relative box-border caret-transparent flex flex-col shrink-0 h-min w-full content-center items-center gap-x-4 basis-auto grow-0 justify-center gap-y-4 md:gap-x-6 md:basis-0 md:grow md:gap-y-6 md:w-px";
  };

  const getHeaderContainerClassName = () => {
    if (props.variant === "variant1")
      return "relative box-border caret-transparent flex flex-col shrink-0 h-min w-full content-start items-start gap-x-0 justify-start gap-y-0 overflow-hidden";
    if (props.variant === "variant2")
      return "relative box-border caret-transparent flex flex-col shrink-0 h-min w-full content-start items-start gap-x-0 justify-start gap-y-0 overflow-hidden md:w-3/12";
    return "relative box-border caret-transparent flex flex-col shrink-0 h-min w-full content-center items-center gap-x-2 justify-center gap-y-2";
  };

  const getTagContainerClassName = () => {
    if (props.variant === "variant1" || props.variant === "variant2")
      return "relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap";
    return "relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full";
  };

  const getTagElementClassName = () => {
    if (props.variant === "variant1" || props.variant === "variant2") {
      return `text-gray-400 text-sm box-border caret-transparent tracking-[-0.56px] leading-[16.8px] uppercase text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[19.2px] ${props.tagClassName || ""}`;
    }
    return `text-sm box-border caret-transparent tracking-[-0.56px] leading-[16.8px] break-words text-center uppercase font-geist md:text-base md:tracking-[-0.64px] md:leading-[19.2px] ${props.tagClassName || ""}`;
  };

  const getTitleContainerClassName = () => {
    if (props.variant === "variant1")
      return "relative box-border caret-transparent flex shrink-0 h-min w-full content-start items-start gap-x-2.5 flex-col justify-start max-w-[380px] gap-y-2.5 md:max-w-none";
    if (props.variant === "variant2")
      return "relative box-border caret-transparent flex shrink-0 h-min w-full content-start items-start gap-x-4 basis-auto flex-col grow-0 justify-center gap-y-4 md:gap-x-6 md:basis-0 md:grow md:gap-y-6 md:w-px";
    return "relative box-border caret-transparent flex shrink-0 content-center items-center gap-x-2.5 h-min justify-center max-w-[360px] gap-y-2.5 w-full md:max-w-[600px]";
  };

  const getTitleWrapperClassName = () => {
    if (props.variant === "variant1")
      return "relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full";
    if (props.variant === "variant2")
      return "relative box-border caret-transparent flex shrink-0 content-center items-center gap-x-2.5 h-min justify-start max-w-[480px] gap-y-2.5 w-full md:max-w-[800px]";
    return "";
  };

  const getTitleInnerClassName = () => {
    if (
      props.variant === "variant2" ||
      props.variant === "variant3" ||
      props.variant === "variant4"
    ) {
      return "relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-start break-words w-px";
    }
    return "";
  };

  const getTitleClassName = () => {
    if (props.variant === "variant1" || props.variant === "variant2") {
      return `text-white text-5xl font-bold box-border caret-transparent tracking-[-1.92px] leading-[48px] break-words text-left font-geist md:text-[80px] md:tracking-[-3.2px] md:leading-[75px] ${props.titleClassName || ""}`;
    }
    return `text-5xl font-bold box-border caret-transparent tracking-[-1.92px] leading-[48px] break-words text-center font-geist md:text-[80px] md:tracking-[-3.2px] md:leading-[75px] ${props.titleClassName || ""}`;
  };

  const getDescriptionOuterClassName = () => {
    if (props.variant === "variant1")
      return "relative content-start items-start box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-min justify-start gap-y-6 w-full overflow-hidden md:content-center md:items-center md:gap-x-2.5 md:flex-row md:gap-y-2.5";
    return "relative box-border caret-transparent flex shrink-0 h-min w-full content-end items-end gap-x-2.5 justify-center max-w-xs gap-y-2.5 overflow-hidden md:max-w-none";
  };

  const getDescriptionMiddleClassName = () => {
    if (props.variant === "variant1")
      return "relative content-end items-end box-border caret-transparent gap-x-2.5 flex basis-auto grow-0 shrink-0 h-min justify-end max-w-[400px] gap-y-2.5 w-full overflow-hidden md:basis-0 md:grow md:w-px";
    return "";
  };

  const getDescriptionClassName = () => {
    if (props.variant === "variant1") {
      return `text-gray-300 text-base box-border caret-transparent tracking-[-0.64px] leading-[21px] break-words text-left font-geist md:text-lg md:tracking-[-0.72px] md:leading-6 ${props.descriptionClassName || ""}`;
    }
    return `text-base box-border caret-transparent tracking-[-0.64px] leading-[21px] break-words text-center font-geist md:text-lg md:tracking-[-0.72px] md:leading-6 ${props.descriptionClassName || ""}`;
  };

  const renderTag = () => {
    if (props.variant === "variant1" || props.variant === "variant2") {
      return <h5 className={getTagElementClassName()}>{props.tagText}</h5>;
    }
    return <p className={getTagElementClassName()}>{props.tagText}</p>;
  };

  const renderTitle = () => {
    if (props.variant === "variant1") {
      const titleParts = props.title.split("\n");
      return (
        <>
          {titleParts.map((part, index) => (
            <h2 key={index} className={getTitleClassName()}>
              {part}
            </h2>
          ))}
        </>
      );
    }

    if (props.variant === "variant4" && props.title.includes("<br")) {
      return (
        <h2
          className={getTitleClassName()}
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
      );
    }

    return <h2 className={getTitleClassName()}>{props.title}</h2>;
  };

  return (
    <div className={getContainerClassName()}>
      <div className={getInnerContainerClassName()}>
        <div className={getHeaderContainerClassName()}>
          {(props.variant === "variant3" || props.variant === "variant4") && (
            <div className="relative box-border caret-transparent shrink-0 content-center items-center gap-x-0 flex flex-col h-min justify-center gap-y-0 w-full overflow-hidden">
              <div className="relative bg-[#eeda03] box-border caret-transparent shrink-0 h-[3px] w-[33px]"></div>
              <div className={getTagContainerClassName()}>{renderTag()}</div>
            </div>
          )}
          {(props.variant === "variant1" || props.variant === "variant2") && (
            <>
              <div className="relative bg-yellow-400 box-border caret-transparent  shrink-0 h-[3px] w-[33px]"></div>
              <div className={getTagContainerClassName()}>{renderTag()}</div>
            </>
          )}
        </div>
        <div className={getTitleContainerClassName()}>
          {getTitleWrapperClassName() && (
            <div className={getTitleWrapperClassName()}>
              {getTitleInnerClassName() && (
                <div className={getTitleInnerClassName()}>{renderTitle()}</div>
              )}
              {!getTitleInnerClassName() && renderTitle()}
            </div>
          )}
          {!getTitleWrapperClassName() && getTitleInnerClassName() && (
            <div className={getTitleInnerClassName()}>{renderTitle()}</div>
          )}
          {!getTitleWrapperClassName() &&
            !getTitleInnerClassName() &&
            renderTitle()}
          {props.variant === "variant2" && (
            <div className="relative content-end items-end box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-end max-w-[480px] gap-y-2.5 w-full overflow-hidden md:max-w-[800px]">
              <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-center break-words w-px">
                <p className={getDescriptionClassName()}>{props.description}</p>
              </div>
            </div>
          )}
        </div>
        {props.variant !== "variant2" && (
          <div className={getDescriptionOuterClassName()}>
            {getDescriptionMiddleClassName() && (
              <div className={getDescriptionMiddleClassName()}>
                <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-center break-words w-px">
                  <p className={getDescriptionClassName()}>
                    {props.description}
                  </p>
                </div>
              </div>
            )}
            {!getDescriptionMiddleClassName() && (
              <div className="relative box-border caret-transparent flex basis-0 flex-col grow shrink-0 justify-center break-words w-px">
                <p className={getDescriptionClassName()}>{props.description}</p>
              </div>
            )}
            {props.showLink && props.variant === "variant1" && (
              <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex basis-auto grow-0 shrink-0 h-min justify-start gap-y-2.5 w-full overflow-hidden md:basis-0 md:grow md:justify-end md:w-px">
                <div className="box-border caret-transparent contents">
                  <div className="relative box-border caret-transparent shrink-0 h-14 md:h-[70px]">
                    <a
                      href={props.linkUrl}
                      className="relative text-blue-700 content-center  items-center bg-[#eeda03] box-border caret-transparent gap-x-5 flex h-full justify-center gap-y-5 w-min pl-10 pr-3 py-[30px] rounded-[12px]"
                    >
                      <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min">
                        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
                          <p className="text-slate-900 text-[15px] box-border caret-transparent tracking-[-0.6px] leading-[18px] text-nowrap font-geist md:text-base md:tracking-[-0.64px] md:leading-[22px]">
                            {props.linkText}
                          </p>
                        </div>
                      </div>
                      <div className="relative content-center items-center aspect-square bg-slate-900 box-border caret-transparent gap-x-2.5 flex shrink-0 justify-center gap-y-2.5 w-[46px] overflow-hidden rounded-[23px]">
                        <div className="relative box-border caret-transparent shrink-0 h-[22px] w-[22px]">
                          <div className="box-border caret-transparent contents">
                            
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
