interface SpecialOfferStickerProps {
  className?: string;
}

export default function SpecialOfferSticker({
  className = "",
}: SpecialOfferStickerProps) {
  return (
    <div className={`badge-special ${className}`} aria-label="Special offer: 3% off November bookings">
      <span className="badge-special-ribbon" aria-hidden="true" />
      <span className="badge-special-starburst" aria-hidden="true">
        <span className="badge-special-copy">
          <strong>3% OFF</strong>
          <span>NOVEMBER<br />BOOKINGS</span>
        </span>
      </span>
    </div>
  );
}
