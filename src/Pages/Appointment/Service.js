import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  //   console.log(name);
  return (
    <div class="card w-96 bg-base-100 shadow-xl mx-auto  text-center">
      <div class="card-body ">
        <h2 class="card-title text-secondary mx-auto my-2">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try another date</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <div class="card-actions justify-end">
          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            for="booking-modal"
            class="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary mx-auto my-2"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;