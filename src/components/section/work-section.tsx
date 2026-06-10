/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight, GlobeIcon, MapPinIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  return (
    <Accordion
      type="multiple"
      className="w-full grid gap-6"
      defaultValue={DATA.work.map((w) => w.company)}
    >
      {DATA.work.map((work) => (
        <AccordionItem
          key={work.company}
          value={work.company}
          className="w-full border-b-0 grid gap-2"
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="flex items-center gap-x-3 justify-between w-full text-left">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <LogoImage src={work.logoUrl} alt={work.company} />
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="font-semibold leading-none flex items-center gap-2">
                    {work.company}
                    <span className="relative inline-flex items-center w-3.5 h-3.5">
                      <ChevronRight
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                          "translate-x-0 opacity-0",
                          "group-hover:translate-x-1 group-hover:opacity-100",
                          "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0",
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                          "opacity-0 rotate-0",
                          "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180",
                        )}
                      />
                    </span>
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {work.title}
                    <div className="flex flex-wrap gap-2 my-2">
                      {work.badges.map((b, i) => (
                        <Badge key={i} variant="outline">
                          {b}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                <span>
                  {work.start} - {work.end ?? "Present"}
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-0 ml-13 text-xs sm:text-sm text-muted-foreground">
            {work.description}
            <div className="my-2">
              <MapPinIcon className="size-3 me-1 inline" />
              {work.location}
            </div>
            {work.href && (
              <a
                href={work.href}
                className="my-2 text-sky-500 hover:text-blue-500 hover:underline"
              >
                <GlobeIcon className="size-3 me-1 inline" />
                Visit {work.company}
              </a>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
