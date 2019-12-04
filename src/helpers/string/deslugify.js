export default function deslugify(slug) {
  if (!slug) {
    return null;
  }

  const words = slug.trim().split('-');
  const capitalized = words.map(w => w.substr(0, 1).toUpperCase() + w.substr(1).toLowerCase());
  return capitalized.join(' ');
}
