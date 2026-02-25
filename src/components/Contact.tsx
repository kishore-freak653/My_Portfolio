import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="section-container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Connect</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Get in <span className="gradient-text">Touch</span>
          </h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card gradient-border rounded-2xl p-8 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full gradient-bg text-primary-foreground font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity animate-pulse-glow"
          >
            <Send size={18} />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
