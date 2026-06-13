import { Quote } from "lucide-react";
import { profile } from "@/data/profile";
import { Card } from "./shared/Card";
import { SectionHeader } from "./shared/SectionHeader";

export function TestimonialsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="testimonials">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          description="This optional section is ready for real feedback once you have it."
          kicker="Testimonials"
          title="Placeholder feedback you can remove or replace."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {profile.testimonials.map((testimonial) => (
            <Card className="p-6 sm:p-8" key={testimonial.name}>
              <Quote className="text-indigo-600" size={28} />
              <p className="mt-5 text-lg leading-8 text-slate-700">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="mt-6">
                <p className="font-bold text-slate-950">{testimonial.name}</p>
                <p className="text-sm font-medium text-slate-500">
                  {testimonial.role}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
