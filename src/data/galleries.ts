/**
 * ============================================================================
 *  PHOTO GALLERY DATA  —  personal page (/personal)
 * ============================================================================
 *
 *  HOW TO ADD YOUR OWN PHOTOS  (do this per section):
 *
 *  1. Drop your image files into the matching folder under:
 *         public/images/<section>/
 *     The folders already exist:
 *         public/images/hobbies
 *         public/images/yourguide
 *         public/images/oxford
 *         public/images/kenya
 *     Example: copy "sunset.jpg" into  public/images/kenya/sunset.jpg
 *
 *  2. Add ONE entry to the matching array below. The `src` path is written
 *     from the site root and always starts with "/images/..." (NOT "public/"):
 *
 *         { src: "/images/kenya/sunset.jpg",
 *           alt: "Sunset over the Nairobi skyline",   // describe it for screen readers
 *           caption: "Nairobi, January 2025" }         // optional text shown under the photo
 *
 *  3. Save. The gallery updates automatically — no other code changes needed.
 *
 *  NOTES
 *  - `alt` is required for accessibility; keep it a short, literal description.
 *  - `caption` is optional; omit it or leave "" for no caption.
 *  - If a file is missing/misnamed, the tile degrades gracefully to a neutral
 *    placeholder (no broken-image icon) — see PhotoGallery.tsx.
 *  - Any src that still starts with "/images/_placeholder" renders as an empty
 *    "add a photo here" tile. Delete those placeholder entries once you add
 *    real photos.
 * ============================================================================
 */

export type Photo = {
  src: string;
  alt: string;
  caption?: string;
};

/* ---- 1. Free time / Hobbies ---------------------------------------------- */
// Add your photos: drop files in public/images/hobbies and add an entry below.
export const hobbiesPhotos: Photo[] = [
  {
    src: "/images/_placeholder/1",
    alt: "Placeholder — add a hobbies photo",
    caption: "Add a photo: public/images/hobbies/your-file.jpg",
  },
  {
    src: "/images/_placeholder/2",
    alt: "Placeholder — add a hobbies photo",
  },
  {
    src: "/images/_placeholder/3",
    alt: "Placeholder — add a hobbies photo",
  },
];

/* ---- 2. YourGuide Committee (Co-Chair) ----------------------------------- */
// Add your photos: drop files in public/images/yourguide and add an entry below.
export const yourguidePhotos: Photo[] = [
  {
    src: "/images/_placeholder/1",
    alt: "Placeholder — add a YourGuide photo",
    caption: "Add a photo: public/images/yourguide/your-file.jpg",
  },
  {
    src: "/images/_placeholder/2",
    alt: "Placeholder — add a YourGuide photo",
  },
];

/* ---- 3. Study Abroad — Oxford University --------------------------------- */
// Add your photos: drop files in public/images/oxford and add an entry below.
export const oxfordPhotos: Photo[] = [
  {
    src: "/images/oxford/camel-selfie.jpg",
    alt: "Soaiba smiling behind a camel in the Sahara Desert",
    caption: "Greetings from the Sahara — the camel got the better selfie.",
  },
  {
    src: "/images/oxford/atlas-mountains.jpg",
    alt: "Soaiba and a friend taking a selfie in front of the Atlas Mountains",
    caption: "Postcard from the Atlas Mountains.",
  },
  {
    src: "/images/oxford/cliffs-of-moher.jpg",
    alt: "Soaiba bundled up in the snow at the Cliffs of Moher",
    caption: "Wind, snow, and the Cliffs of Moher.",
  },
  {
    src: "/images/oxford/winter-hat.jpg",
    alt: "Soaiba smiling while trying on a fluffy winter hat",
    caption: "Oxford winter essentials.",
  },
  {
    src: "/images/oxford/sahara-sunset.jpg",
    alt: "Soaiba and a friend posing among sand dunes at sunset",
    caption: "Sunset in the Sahara with a friend.",
  },
  {
    src: "/images/oxford/oxford-formal.jpg",
    alt: "Soaiba and two friends dressed for an Oxford formal dinner",
    caption: "A formal evening at Oxford.",
  },
];

/* ---- 4. Kraft Global Fellows — Kenya (prominent gallery) ----------------- */
// Add your photos: drop files in public/images/kenya and add an entry below.
// Many photos expected here — add as many entries as you like.
export const kenyaPhotos: Photo[] = [
  {
    src: "/images/kenya/nairobi-zebra.jpg",
    alt: "A zebra walking through grassland with hills and Nairobi in the distance",
    caption: "A zebra with Nairobi on the horizon.",
  },
  {
    src: "/images/kenya/forest-waterfall.jpg",
    alt: "A waterfall flowing through a dense green forest in Kenya",
    caption: "A waterfall tucked into the forest.",
  },
  {
    src: "/images/kenya/kenya-sunset.jpg",
    alt: "Soaiba watching the sunset over the Kenyan landscape",
    caption: "Golden hour over Kenya.",
  },
  {
    src: "/images/kenya/giraffe-center.jpg",
    alt: "Soaiba smiling beside a giraffe in a wooded sanctuary",
    caption: "Made a new (very tall) friend.",
  },
];

/* ---- 5. Closing collage --------------------------------------------------- */
export const closingPhotos: Photo[] = [
  {
    src: "/images/closing/kappa-alpha-theta.jpg",
    alt: "Soaiba posing with two of her Kappa Alpha Theta sorority sisters",
    caption: "My Kappa Alpha Theta sisters.",
  },
  {
    src: "/images/closing/new-york-waterfront.jpg",
    alt: "Lower Manhattan skyline viewed across the waterfront at dusk",
    caption: "New York on a moody evening.",
  },
  {
    src: "/images/closing/statue-of-liberty.jpg",
    alt: "The Statue of Liberty illuminated at night",
    caption: "Lady Liberty after dark.",
  },
  {
    src: "/images/closing/new-york-bagels.jpg",
    alt: "Two bagels topped with cream cheese, smoked salmon, capers, and red onion",
    caption: "A New York bagel done right.",
  },
  {
    src: "/images/closing/coffee-and-physics.jpg",
    alt: "A latte beside a book about African physical geography",
    caption: "Coffee, conversation, and a little physics.",
  },
  {
    src: "/images/closing/new-york-from-above.jpg",
    alt: "New York City skyline and the Empire State Building viewed from above",
    caption: "Views from the top.",
  },
  {
    src: "/images/closing/chicago-river.jpg",
    alt: "Historic skyscrapers lining the Chicago River on a sunny afternoon",
    caption: "A summer afternoon along the Chicago River.",
  },
  {
    src: "/images/closing/harry-styles-msg.jpg",
    alt: "Harry Styles concert display outside Madison Square Garden at night",
    caption: "Harry Styles at Madison Square Garden.",
  },
  {
    src: "/images/closing/pfizer-interns.jpg",
    alt: "Soaiba and three fellow interns standing in front of a Pfizer sign",
    caption: "The Pfizer intern crew.",
  },
  {
    src: "/images/closing/oxford-radcliffe-camera.jpg",
    alt: "The Radcliffe Camera and bicycles under a bright blue Oxford sky",
    caption: "Blue skies over Oxford.",
  },
];
