import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [106.6406184, -6.2160287], // Longitude, Latitude for Tangerang location
      zoom: 15,
    });

    // Add marker for the location
    new mapboxgl.Marker({
      color: '#3b82f6'
    })
    .setLngLat([106.6406184, -6.2160287])
    .addTo(map.current);

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    setShowTokenInput(false);
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

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

          {showTokenInput ? (
            <div className="max-w-md mx-auto mb-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Enter Mapbox Token
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  To display the map, please enter your Mapbox public token. 
                  You can get one from <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
                </p>
                <form onSubmit={handleTokenSubmit} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIiwia..."
                    value={mapboxToken}
                    onChange={(e) => setMapboxToken(e.target.value)}
                    className="bg-background border-border focus:border-primary focus:ring-primary/20"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg transition-all duration-300"
                  >
                    Load Map
                  </Button>
                </form>
              </div>
            </div>
          ) : null}

          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
            <div 
              ref={mapContainer} 
              className="w-full h-96 md:h-[500px]"
              style={{ minHeight: showTokenInput ? '200px' : '500px' }}
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