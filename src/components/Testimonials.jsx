import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Digital Artist",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "The hyper-realistic textures are mind-blowing. I use these avatars for my virtual fashion brand, and my followers can't believe they aren't real photos.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Content Creator",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "Maintaining style consistency was always my biggest hurdle with AI. This platform solved it. My avatar looks like 'me' across every single generation.",
  },
  {
    name: "Emily Watson",
    role: "Gaming Streamer",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "I generated my 3D VTuber base here in seconds. The 4K export quality is professional-grade. It's completely changed my channel's branding.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 sm:py-32 px-6 lg:px-8 relative bg-slate-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          
          {/* Left side - Header */}
          <div className="lg:w-5/12 w-full sticky top-32">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              What our <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                creators
              </span> are saying
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
              Join over 10,000 artists, streamers, and professionals who have built 
              their digital presence using our AI studio.
            </p>
            
            {/* Trust Badges */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {testimonials.map((t, i) => (
                  <img key={i} src={t.image} className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="User" />
                ))}
              </div>
              <p className="text-sm font-bold text-slate-900">
                <span className="text-blue-600">4.9/5</span> from 2k+ reviews
              </p>
            </div>
          </div>

          {/* Right Side Testimonials */}
          <div className="lg:w-7/12 w-full">
            <div className="space-y-6 sm:space-y-8">
              {testimonials.map((testimonial, key) => (
                <div 
                  key={key} 
                  className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex flex-col gap-6">
                    <div className="text-blue-100">
                      <Quote className="w-10 h-10 fill-current" />
                    </div>
                    
                    <p className="text-slate-700 text-lg sm:text-xl leading-relaxed font-medium italic">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover shadow-md shadow-blue-500/10" 
                      />
                      <div>
                        <h4 className="font-bold text-slate-900 text-base">{testimonial.name}</h4>
                        <p className="text-sm text-slate-500 font-semibold">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}