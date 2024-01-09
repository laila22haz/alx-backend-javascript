export default function cleanSet(set, startString) {
  if (startString !== '' && set instanceof Set && typeof startString === 'string') {
    const arrayFromSet = Array.from(set);
    const filteredSet = arrayFromSet.filter((value) => typeof value === 'string' && value.startsWith(startString));
    const mapset = filteredSet.map((value) => value.substring(startString.length));
    return mapset.join('-');
  }
  return '';
}
