import React from "react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { useState } from "react";

const Community = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    setEmail("");
    alert("Thank you for subscribing to our newsletter!");
  };

  const [email, setEmail] = useState("");

  return (
    <>
      {/* Newsletter */}
      <section className="py-20 bg-emerald-800 text-white fade-in-up">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-light mb-4">
              Join the Defino Community
            </h2>
            <p className="text-emerald-100 mb-8">
              Subscribe to our newsletter for exclusive previews of new
              collections, styling inspiration, and invitations to private
              events.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white h-12 text-base border-none"
              />
              <Button
                type="submit"
                className="bg-white text-emerald-800 hover:bg-emerald-100 h-12 px-8 !rounded-button whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-emerald-200 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from Defino.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
