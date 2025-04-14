import React from 'react';

const MapComponent = () => {
  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.5774772246088!2d23.285285515517824!3d42.65947177916941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85965801b4b1%3A0xacb1611cdcb876b9!2sElite%20Dental%20Solutions!5e0!3m2!1sen!2sbg!4v1647356149183!5m2!1sen!2sbg"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent; 