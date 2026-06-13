import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  kicker,
  title,
  description,
  align = "center",
  className
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto mb-10 max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left",
        className
      )}
    >
      {kicker ? <Badge>{kicker}</Badge> : null}
      <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
