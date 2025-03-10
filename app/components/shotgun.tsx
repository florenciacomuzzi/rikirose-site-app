import Script from 'next/script';

export default function WidgetIframe() {
  return (
    <div>
      <h1>External Widget</h1>
      <iframe src="https://shotgun.live/en/venues/riki-rose/embedded=true&ui=dark&social=true" className="w-full h-96" />
      <Script src="https://shotgun.live/widget.js" strategy="lazyOnload" />
    </div>
  );
}