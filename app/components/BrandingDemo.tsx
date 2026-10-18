"use client";

import { useState, type CSSProperties } from "react";

const brands = [
  {
    name: "North",
    mark: "N",
    primary: "#284b42",
    surface: "#e8efeb",
    background: "#f5f8f5",
    font: "Arial, sans-serif",
  },
  {
    name: "Forma",
    mark: "ƒ",
    primary: "#5a3b79",
    surface: "#eee8f3",
    background: "#faf7fc",
    font: "Georgia, serif",
  },
  {
    name: "Copper",
    mark: "C",
    primary: "#913d27",
    surface: "#f4e8df",
    background: "#fcf8f3",
    font: "Arial, sans-serif",
  },
];

type BrandStyle = CSSProperties & {
  "--brand-primary": string;
  "--brand-surface": string;
  "--brand-background": string;
};

export default function BrandingDemo() {
  const [brandIndex, setBrandIndex] = useState(0);
  const brand = brands[brandIndex];

  const style: BrandStyle = {
    "--brand-primary": brand.primary,
    "--brand-surface": brand.surface,
    "--brand-background": brand.background,
    fontFamily: brand.font,
  };

  return (
    <section className="brand-section" aria-label="Interactive branding demo">
      <div className="brand-intro">
        <p className="eyebrow muted">THE FEATURE, IN A SMALL DEMO</p>

        <h2>
          Same product.
          <br />
          <span className="serif-text">Your identity.</span>
        </h2>

        <p>
          In the white-label platform, admins can apply their logo, colors,
          and theme across the dashboard and admin panel.
        </p>

        <p>
          Try a fictional brand below to see the idea in action.
        </p>

        <div className="brand-options" aria-label="Choose a sample brand">
          {brands.map((item, index) => (
            <button
              type="button"
              key={item.name}
              aria-pressed={brandIndex === index}
              onClick={() => setBrandIndex(index)}
            >
              <span
                className="brand-swatch"
                style={{ background: item.primary }}
                aria-hidden="true"
              />
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <div className="brand-preview" style={style}>
        <header className="brand-preview-header">
          <div className="brand-identity">
            <span className="brand-mark">{brand.mark}</span>
            <strong>{brand.name}</strong>
          </div>
          <span className="brand-demo-label">Sample workspace</span>
        </header>

        <div className="brand-preview-body">
          <div className="brand-preview-nav" aria-hidden="true">
            <span className="brand-nav-active">Overview</span>
            <span>Transactions</span>
            <span>Customers</span>
          </div>

          <div className="brand-preview-content">
            <p className="brand-welcome">Welcome to your workspace</p>
            <h3>Here’s the overview.</h3>

            <div className="brand-metrics">
              <div>
                <span>Collections</span>
                <strong>₹2,48,500</strong>
              </div>
              <div>
                <span>Transactions</span>
                <strong>128</strong>
              </div>
            </div>

            <div className="brand-sample-table">
              <div>
                <span>Recent activity</span>
                <span>Status</span>
              </div>
              <div>
                <span>Sample collection</span>
                <span>Completed</span>
              </div>
              <div>
                <span>Sample transfer</span>
                <span>Processing</span>
              </div>
            </div>

            <div className="brand-action-sample">Brand preview</div>
          </div>
        </div>

        <p className="brand-preview-note" role="status">
          {brand.name} branding applied · Illustrative sample data
        </p>
      </div>
    </section>
  );
}