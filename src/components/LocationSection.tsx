import React from 'react';

const LocationSection = () => {

  return (
    <section className="py-20 bg-muted/50 relative">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Find Me Here
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Located in Tangerang, Indonesia. Feel free to visit or reach out!
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.228476891487!2d106.6384237!3d-6.2160287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f950f2793e8b%3A0xf016d48fc8ec4e34!2sJl.%20Komp.%20Sekneg%2C%20Panunggangan%20Utara%2C%20Kec.%20Pinang%2C%20Kota%20Tangerang%2C%20Banten%2015143!5e0!3m2!1sen!2sid!4v1695123456789!5m2!1sen!2sid"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96 md:h-[500px]"
            />
          </div>

          <div className="mt-8 text-center">
            <div className="bg-card border border-border rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-4">Address</h3>
              <p className="text-muted-foreground">
                Jl. Komp. Sekneg, Panunggangan Utara<br />
                Kec. Pinang, Kota Tangerang<br />
                Banten 15143, Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;