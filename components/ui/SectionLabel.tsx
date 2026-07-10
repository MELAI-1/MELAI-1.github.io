import { cn } from "@/lib/utils";

export function SectionLabel({
  index,
  children,
  accent = "text-cyan-400",
}: {
  index: string;
  children: React.ReactNode;
  accent?: string;
}) {
  return (
    <p className={cn("section-label mb-3", accent)}>
      {`// ${index}. ${children}`}
    </p>
  );
}
