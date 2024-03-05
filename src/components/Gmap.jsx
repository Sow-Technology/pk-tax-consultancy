import React from "react";

const Gmap = () => {
  return (
    <div className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.941761476095!2d80.05726857507437!3d12.847038087456971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDUwJzQ5LjMiTiA4MMKwMDMnMzUuNCJF!5e0!3m2!1sen!2sin!4v1709648408927!5m2!1sen!2sin&center=12.847038087456971,80.05726857507437&zoom=8"
        allowFullScreen=""
        height={300}
        width={320}
        // loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Gmap;
