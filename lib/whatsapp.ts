const WHATSAPP_NUMBER = "919901333113";

const PACKAGE_NAMES: Record<string, string> = {
  "12-jyotirlinga-yatra": "25 day 12 Jyotirlinga Maha Pilgrimage Yatra",
  "kashi-triveni-ayodhya": "Kashi Triveni Ayodhya pilgrimage",
};

const PACKAGE_CATEGORIES: Record<string, string> = {
  holiday: "holiday packages",
  pilgrimage: "pilgrimage packages",
  weekend: "weekend packages",
};

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getPageInquiryUrl(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  let packageName: string | undefined;
  let isPackageListing = false;

  if (segments[0] === "packages" && segments.length > 1) {
    if (PACKAGE_CATEGORIES[segments[1]]) {
      isPackageListing = segments.length === 2;
      packageName =
        segments.length > 2
          ? PACKAGE_NAMES[segments[2]] ??
            segments[2].replace(/[-_]/g, " ")
          : PACKAGE_CATEGORIES[segments[1]];
    } else {
      packageName =
        PACKAGE_NAMES[segments[1]] ??
        segments[1].replace(/[-_]/g, " ");
    }
  }

  if (packageName) {
    const subject = isPackageListing ? packageName : `${packageName} package`;
    return getWhatsAppUrl(
      `Hi Khushi Travels, I am enquiring about ${subject}. Please share availability, pricing, and booking details.`
    );
  }

  const pageName = segments.join(" ").replace(/[-_]/g, " ") || "home";
  return getWhatsAppUrl(
    `Hi Khushi Travels, I am enquiring from the ${pageName} page. Please help me with the relevant trip or service details.`
  );
}
