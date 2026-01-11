import React from "react";

export default function App() {
  const phone = "0400 000 000";
  const email = "hello@jsllandscaping.com.au";
  const serviceArea = "Perth, WA (Northern Suburbs)";

  const services = [
    {
      title: "Real & Artificial Turf",
      desc: "Supply and install, base prep, edging, clean finish.",
    },
    {
      title: "Reticulation",
      desc: "New installs, repairs, controller upgrades, troubleshooting.",
    },
    {
      title: "Paving",
      desc: "Paths, patios, courtyards—clean lines, solid base work.",
    },
    {
      title: "Decking",
      desc: "Timber & composite decks built for Perth conditions.",
    },
    {
      title: "Garden Beds & Edging",
      desc: "Defined borders, improved structure, easy maintenance.",
    },
    {
      title: "General Landscaping",
      desc: "Full makeovers, upgrades, tidy-outs, and ongoing improvements.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah • Alkimos",
      quote:
        "Fast quote, great communication, and the finish was unreal. Yard looks brand new.",
    },
    {
      name: "Mike • Clarkson",
      quote:
        "They sorted our paving and retic issues properly. Clean work and on time.",
    },
    {
      name: "Jess • Butler",
      quote:
        "Super easy to deal with. The turf and edging completely changed the place.",
    },
  ];

  const faqs = [
    {
      q: "Do you offer free quotes?",
      a: "Yes—send through your address and a quick description (or measurements) and we’ll organise a time.",
    },
    {
      q: "What areas do you service?",
      a: `Mostly ${serviceArea}. If you’re nearby, ask anyway.`,
    },
    {
      q: "How soon can you start?",
      a: "Depends on current bookings. Small jobs can often be scheduled sooner—message us and we’ll giv
